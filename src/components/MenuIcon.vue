<template>
  <ul class="relative w-full h-full">
    <li
      class="absolute w-full h-1 transition ease-in-out delay-150 bg-black top-1/2"
      :class="isOpen ? '-translate-y-1/2 rotate-45' : '-translate-y-2.5'"
    ></li>
    <li
      class="absolute h-1 transition ease-in-out delay-150 bg-black top-1/2"
      :class="isOpen ? '-translate-y-1/2 -rotate-45  w-full' : '-translate-y-1/2 w-3/4 '"
    ></li>
    <li
      class="absolute w-full h-1 transition ease-in-out delay-150 bg-black top-1/2"
      :class="isOpen ? '-translate-y-1/2 -rotate-45' : 'translate-y-1.5'"
    ></li>
  </ul>
</template>

<script setup>
defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})
</script>
