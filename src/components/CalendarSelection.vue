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
    class="fixed bottom-0 h-56 w-full bg-[#C4DCD0] flex flex-col items-center pt-2 z-10"
  >
    <div class="font-wotham text-[30px] text-title-red">
      {{ title }}
    </div>
    <div class="mt-5 gap-2 flex flex-col w-3/4">
      <button
        @click="openCalendar('google')"
        class="rounded-full w-full border border-[#860225] h-8 flex items-center justify-center"
      >
        <img :src="googleImg.src" class="inline-block h-4 mr-1.5" />
        Google
      </button>
      <button
        @click="openCalendar('apple')"
        class="rounded-full w-full border border-[#860225] h-8 flex items-center justify-center"
      >
        <img :src="appleImg.src" class="inline-block h-4 mr-1.5" />
        Apple
      </button>
      <button
        @click="openCalendar('outlook')"
        class="rounded-full w-full border border-[#860225] h-8 flex items-center justify-center"
      >
        <img :src="outlookImg.src" class="inline-block h-4 mr-1.5" />
        Outlook
      </button>
      <button @click="emit('close')" class="self-center font-domine text-xs">
        Cancel
      </button>
    </div>
  </div>
</template>
