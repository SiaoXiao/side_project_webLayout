<template>
  <div class="relative z-10 flex-grow min-w-0 md:pl-[345px] flex flex-col-reverse bg-center bg-no-repeat bg-cover bg-none md:bg-banner">
    <div class="">
      <div class="flex flex-col justify-end h-full bg-center bg-no-repeat bg-cover md:h-auto py-9 px-11 aspect-square md:aspect-auto md:bg-none bg-banner">
        <h1 class="text-5xl font-bold text-right text-white">白頭翁 (Chinese bulbul)</h1>
        <span class="block mt-1 text-lg text-right text-white"
          >又名白頭鵯。以果實、昆蟲為主食，無法消化小米、穀類。平均壽命約 8~10 年。</span
        >
      </div>
      <div
        class="bg-[#DCCCBC] flex flex-col flex-wrap md:flex-row items-center justify-around h-full md:h-[367px] py-[50px] px-[36px] gap-[50px] md:gap-3 md:px-[50px] sm-py-[58px]"
      >
        <template v-for="item in itemData" :key="item.id">
          <WebItem :itemData="item" />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
const itemData = reactive([
  {
    id: 1,
    title: '外觀',
    content:
      '白頭鵯體長約17到22公分，額至頭頂純黑色而富有光澤，兩眼上方至後枕白色，形成一白色枕環。耳羽後部有一白斑，此白環與白斑在黑色的頭部均極為醒目，老鳥的枕羽(後頭部)更潔白，所以又叫「白頭翁」。',
  },
  {
    id: 2,
    title: '棲地',
    content:
      '白頭翁和麻雀、綠繡眼合稱「城市三寶」，常成群出現在平原區灌木叢、丘陵樹林地帶，以及校園、公園、庭院、行道中的各種高高的電線與樹上。',
  },
  {
    id: 3,
    title: '食性',
    content:
      '以果樹的漿果和種子為主食，並時常飛入果園偷吃果實，還會吃嫩葉嫩芽，尤其是胡蝶蘭的嫩葉嫩芽葉，偶爾啄食昆蟲。',
  },
])
</script>
