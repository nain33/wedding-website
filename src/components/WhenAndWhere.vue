<script setup lang="ts">
import { ref } from "vue";

const weddingDate = new Date("2026-07-06T09:00:00Z");
const now = new Date();
let daysToGo = ref(
  Math.floor((weddingDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
);

let hoursToGo = ref(
  Math.floor(
    ((weddingDate.getTime() - now.getTime()) % (1000 * 60 * 60 * 24)) /
      (1000 * 60 * 60)
  )
);
let minutesToGo = ref(
  Math.floor(
    ((weddingDate.getTime() - now.getTime()) % (1000 * 60 * 60)) / (1000 * 60)
  )
);
let secondsToGo = ref(
  Math.floor(((weddingDate.getTime() - now.getTime()) % (1000 * 60)) / 1000)
);

//TODO: There must be a simpler maths solution to get the numbers
const countdown = () => {
  const timeLeft = weddingDate.getTime() - new Date().getTime();

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  daysToGo.value = days;
  hoursToGo.value = hours;
  minutesToGo.value = minutes;
  secondsToGo.value = seconds;
};
setInterval(countdown, 1000);
</script>

<template>
  <div
    class="h-[136px] bg-background-green px-10 flex flex-row items-center justify-between"
  >
    <div class="flex flex-col justify-start">
      <div class="text-title-red text-[28px] font-wotham">When</div>
      <hr class="w-3 -mt-2 mb-3 m-auto text-title-red" />
      <div class="font-domine text-xs">06.07.2026</div>
    </div>
    <div
      class="border bg-[#C4DCD0] flex flex-col font-dancing-script text-xs px-6 py-2 text-center gap-1"
    >
      <span>{{ daysToGo }} days to go</span>
      <span>{{ hoursToGo }} hours</span>
      <span>{{ minutesToGo }} minutes</span>
      <span>{{ secondsToGo }} seconds</span>
    </div>
    <div class="flex flex-col justify-end text-center">
      <div class="text-title-red text-[28px] font-wotham">Where</div>
      <hr class="w-3 -mt-2 mb-3 mx-auto text-title-red" />
      <div class="font-domine text-xs">
        Nairobi <br />
        Kenya
      </div>
    </div>
  </div>
</template>
