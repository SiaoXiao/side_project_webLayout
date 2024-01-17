<template>
  <div class="relative z-10 order-2 w-full">
    <!-- 上 -->
    <div
      class="relative bg-no-repeat bg-cover bg-center bg-banner md:min-h-[70vh] aspect-square md:aspect-auto"
    >
      <div class="absolute bottom-0 left-0 right-0">
        <div class="flex flex-col py-9 px-11">
          <h1 class="text-5xl font-bold text-right text-white">白頭翁 (Chinese bulbul)</h1>
          <span class="block mt-1 text-lg text-right text-white"
            >又名白頭鵯。以果實、昆蟲為主食，無法消化小米、穀類。平均壽命約 8~10 年。</span
          >
        </div>
      </div>
    </div>
    <!-- 下 -->
    <div class="bg-[#DCCCBC] grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-[50px] pt-[58px] gap-[50px] md:gap-5">
      <template v-for="item in itemData" :key="item.id">
        <WebItem :itemData="item" />
      </template>
    </div>
  </div>
</template>

<script setup>
const itemData = reactive([
  {
    id: 1,
    title: '外觀',
    content:
      '白頭鵯體長約17到22公分，額至頭頂純黑色而富有光澤，兩眼上方至後枕白色，形成一白色枕環。耳羽後部有一白斑，此白環與白斑在黑色的頭部均極為醒目，老鳥的枕羽(後頭部)更潔白，所以又叫「白頭翁」。'
  },
  {
    id: 2,
    title: '棲地',
    content:
      '白頭翁和麻雀、綠繡眼合稱「城市三寶」，常成群出現在平原區灌木叢、丘陵樹林地帶，以及校園、公園、庭院、行道中的各種高高的電線與樹上。'
  },
  {
    id: 3,
    title: '食性',
    content:
      '以果樹的漿果和種子為主食，並時常飛入果園偷吃果實，還會吃嫩葉嫩芽，尤其是胡蝶蘭的嫩葉嫩芽葉，偶爾啄食昆蟲。'
  }
])
</script>
