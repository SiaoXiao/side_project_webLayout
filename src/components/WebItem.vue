<template>
  <div class="card">
    <div class="card-title">
      <h2 class="relative text-4xl font-bold">
        {{ itemData.title }}
        <svg
          width="25"
          height="25"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="absolute -bottom-[12.5px] -right-[12.5px]"
        >
          <circle
            cx="13.1814"
            cy="13.0804"
            r="8.5"
            stroke="#AA6666"
            stroke-opacity="0.6"
            stroke-width="8"
          />
        </svg>
      </h2>
    </div>
    <div class="card-content">
      <p class="text-base">
        {{ itemData.content }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  itemData: {
    type: Object,
    default: () => ({})
  }
})
</script>
