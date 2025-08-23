<script setup lang="ts">
import { ref } from "vue";
import calendarIcon from "../assets/calendar.svg";
import directionsIcon from "../assets/directions.svg";
import CalendarSelection from "./CalendarSelection.vue";
import type { Event } from "../eventInfo";

defineProps<{
  event: Event;
  bgColor: "green" | "yellow";
  backgroundImage: "elephants" | "peacock" | "birds-of-paradise";
  backgroundPosition: "bottom" | "left" | "right";
}>();

const bgColorVariants = {
  green: "bg-background-green",
  yellow: "bg-background-yellow",
};

const bgPositionVariants = {
  bottom: "bg-bottom",
  left: "bg-left",
  right: "bg-right",
};

const backgroundImageVariants = {
  elephants: "bg-elephants",
  peacock: "bg-peacock",
  "birds-of-paradise": "bg-birds-of-paradise",
};

const showCalendarSelection = ref(false);
</script>

<template>
  <div
    class="xs:px-5 h-[250px] bg-no-repeat px-3 pt-2"
    :class="[
      bgColorVariants[bgColor],
      bgPositionVariants[backgroundPosition],
      backgroundImageVariants[backgroundImage],
    ]"
  >
    <div class="relative flex h-full flex-col items-center">
      <div class="font-wotham text-title-red text-xl">
        {{ event.dayOfWeek }}
      </div>
      <div class="font-wotham -mt-2 mb-2 text-xl">{{ event.date }}</div>

      <div class="absolute inset-0 flex items-center justify-center">
        <div class="grid w-full grid-cols-[1fr_0.1fr_1fr]">
          <div class="flex flex-col items-center self-center">
            <div class="font-wotham text-title-red text-[30px]">
              {{ event.eventName }}
            </div>
            <div class="font-domine text-[17px]">{{ event.location }}</div>
            <div class="font-domine text-[12px]">{{ event.address }}</div>
            <div class="font-domine text-[12px]">{{ event.time }}</div>
          </div>

          <div class="mx-auto h-25 w-0.25 self-center bg-black"></div>

          <div
            class="font-domine xs:text-[10px] flex flex-col items-center self-center text-center text-[8px]"
          >
            <div class="mb-2">{{ event.description }}</div>
            Dress code
            <div>{{ event.dressCode }}</div>
            <div class="mt-2 flex flex-row gap-1">
              <button
                @click="showCalendarSelection = true"
                class="border-title-red text-title-red flex flex-row items-center gap-0.5 rounded-full border px-2 py-0.5"
              >
                <img
                  :src="calendarIcon.src"
                  alt="Calendar Icon"
                  class="h-4 w-4"
                />
                <span>Add to cal</span>
              </button>
              <button
                class="border-title-red text-title-red flex flex-row items-center gap-0.5 rounded-full border px-2 py-0.5"
              >
                <img
                  :src="directionsIcon.src"
                  alt="Directions Icon"
                  class="h-4 w-4"
                />
                <span>Directions</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <CalendarSelection
    v-if="showCalendarSelection"
    @close="showCalendarSelection = false"
    :title="event.eventName"
    :calendarEvent="event.calendarEvent"
  />
</template>
