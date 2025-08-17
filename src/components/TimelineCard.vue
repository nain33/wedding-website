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
    class="h-[250px] px-3 xs:px-5 pt-2 bg-no-repeat"
    :class="[
      bgColorVariants[bgColor],
      bgPositionVariants[backgroundPosition],
      backgroundImageVariants[backgroundImage],
    ]"
  >
    <div class="flex flex-col items-center h-full relative">
      <div class="font-wotham text-xl text-title-red">
        {{ event.dayOfWeek }}
      </div>
      <div class="font-wotham text-xl -mt-2 mb-2">{{ event.date }}</div>

      <div class="absolute inset-0 flex items-center justify-center">
        <div class="grid grid-cols-[1fr_0.1fr_1fr] w-full">
          <div class="flex flex-col self-center items-center">
            <div class="font-wotham text-[30px] text-title-red">
              {{ event.eventName }}
            </div>
            <div class="font-domine text-[17px]">{{ event.location }}</div>
            <div class="font-domine text-[12px]">{{ event.address }}</div>
            <div class="font-domine text-[12px]">{{ event.time }}</div>
          </div>

          <div class="w-0.25 h-25 self-center bg-black mx-auto"></div>

          <div
            class="flex flex-col items-center self-center font-domine text-[8px] xs:text-[10px] text-center"
          >
            <div class="mb-2">{{ event.description }}</div>
            Dress code
            <div>{{ event.dressCode }}</div>
            <div class="flex flex-row mt-2 gap-1">
              <button
                @click="showCalendarSelection = true"
                class="flex flex-row items-center border-title-red border rounded-full px-2 py-0.5 gap-0.5 text-title-red"
              >
                <img
                  :src="calendarIcon.src"
                  alt="Calendar Icon"
                  class="w-4 h-4"
                />
                <span>Add to cal</span>
              </button>
              <button
                class="flex flex-row items-center border-title-red border rounded-full px-2 py-0.5 gap-0.5 text-title-red"
              >
                <img
                  :src="directionsIcon.src"
                  alt="Directions Icon"
                  class="w-4 h-4"
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
