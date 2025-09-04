<script setup lang="ts">
import { google, outlook, ics } from "calendar-link";
import googleImg from "../assets/google.svg";
import appleImg from "../assets/apple.svg";
import outlookImg from "../assets/outlook.svg";
import type { EventCalendar } from "../eventInfo";
import { onMounted } from "vue";

const props = defineProps<{
  title: string;
  calendarEvent: EventCalendar;
}>();

const emit = defineEmits<{
  close: [];
}>();

//https://github.com/add2cal/add-to-calendar-button
//https://github.com/AnandChowdhary/calendar-link

const openCalendar = (calendar: string) => {
  if (calendar === "google") window.open(google(props.calendarEvent), "_blank");
  else if (calendar === "apple")
    window.open(ics(props.calendarEvent), "_blank");
  else if (calendar === "outlook")
    window.open(outlook(props.calendarEvent), "_blank");
};

//TODO: Figure out how to close this component when you click outside it. Adding event listener in mounted doesn't work cause it mounts, detects the click of the button, then emits the close - weirdly.
onMounted(() => {
  console.log("mounted");
  // document.addEventListener("click", (event: any) => {
  //   if (!event.target.closest("#calendar-selection")) {
  //     console.log("closing");
  //     emit("close");
  //   }

  // });
});
</script>

<template>
  <div
    id="calendar-selection"
    class="fixed bottom-0 z-10 flex h-56 w-full flex-col items-center justify-self-center bg-[#C4DCD0] pt-2"
  >
    <div class="font-wotham text-title-red text-[30px]">
      {{ title }}
    </div>
    <div class="mt-5 flex w-3/4 flex-col gap-2">
      <button
        @click="openCalendar('google')"
        class="flex h-8 w-full cursor-pointer items-center justify-center rounded-full border border-[#860225]"
      >
        <img :src="googleImg.src" class="mr-1.5 inline-block h-4" />
        Google
      </button>
      <button
        @click="openCalendar('apple')"
        class="flex h-8 w-full cursor-pointer items-center justify-center rounded-full border border-[#860225]"
      >
        <img :src="appleImg.src" class="mr-1.5 inline-block h-4" />
        Apple
      </button>
      <button
        @click="openCalendar('outlook')"
        class="flex h-8 w-full cursor-pointer items-center justify-center rounded-full border border-[#860225]"
      >
        <img :src="outlookImg.src" class="mr-1.5 inline-block h-4" />
        Outlook
      </button>
      <button
        @click="emit('close')"
        class="font-domine cursor-pointer self-center text-xs"
      >
        Cancel
      </button>
    </div>
  </div>
</template>
