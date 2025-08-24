<script setup lang="ts">
import { ref } from "vue";

const weddingDate = new Date("2026-07-06T09:00:00Z");
const now = new Date();
let daysToGo = ref(
  Math.floor((weddingDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)),
);

let hoursToGo = ref(
  Math.floor(
    ((weddingDate.getTime() - now.getTime()) % (1000 * 60 * 60 * 24)) /
      (1000 * 60 * 60),
  ),
);
let minutesToGo = ref(
  Math.floor(
    ((weddingDate.getTime() - now.getTime()) % (1000 * 60 * 60)) / (1000 * 60),
  ),
);
let secondsToGo = ref(
  Math.floor(((weddingDate.getTime() - now.getTime()) % (1000 * 60)) / 1000),
);

//TODO: There must be a simpler maths solution to get the numbers
const countdown = () => {
  const timeLeft = weddingDate.getTime() - new Date().getTime();

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
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
    class="bg-background-green xs:px-10 m-auto flex h-[150px] flex-row items-center justify-between px-8 md:h-[350px] md:w-3/4"
  >
    <div class="m-auto flex flex-col justify-start text-center">
      <div class="text-title-red font-wotham text-3xl md:text-5xl">When</div>
      <hr class="text-title-red m-auto -mt-2 mb-3 w-3" />
      <div class="font-domine text-sm md:text-lg">06.07.2026</div>
    </div>
    <div
      class="font-dancing-script flex flex-col gap-1 border bg-[#C4DCD0] px-6 py-2 text-center text-sm md:gap-2 md:text-3xl"
    >
      <span>{{ daysToGo }} days to go</span>
      <span>{{ hoursToGo }} hours</span>
      <span>{{ minutesToGo }} minutes</span>
      <span>{{ secondsToGo }} seconds</span>
    </div>
    <div class="m-auto flex flex-col justify-end text-center">
      <div class="text-title-red font-wotham text-3xl md:text-5xl">Where</div>
      <hr class="text-title-red mx-auto -mt-2 mb-3 w-3" />
      <div class="font-domine text-sm md:text-lg">
        Nairobi <br />
        Kenya
      </div>
    </div>
  </div>
</template>
