<template>
  <div
    class="relative z-20 flex flex-col justify-between flex-shrink-0 w-full bg-white md:w-[345px] order-1"
  >
    <div
      class="relative flex items-center justify-between h-[87px] md:h-auto md:py-[78px] md:justify-center md:shadow-none pr-[18px] pl-[26px]"
      :class="showMenu ? '' : 'shadow-custom'"
    >
    <!-- mobile menu -->
      <button
        class="flex-center w-6 h-[18px] md:hidden"
        @click.prevent="toggleMenu"
      >
        <MenuIcon :isOpen="showMenu" />
      </button>
      <!-- Web title -->
      <div class="flex-center">
        <span class="text-xl font-bold md:text-3xl">白頭翁不吃小米</span>
      </div>
      <!-- Logo -->
      <div
        class="static w-12 h-12 bg-white rounded-full md:-right-12 md:absolute md:w-24 md:h-24 shadow-logo"
      ></div>
    </div>
    <!-- menu list -->
    <div
      class="flex-grow md:flex md:flex-col md:justify-between"
      :class="showMenu ? 'shadow-custom' : 'hidden'"
    >
      <ul class="flex flex-col gap-[21px] pb-[45px] md:pb-0">
        <li v-for="(item, i) in menuItems" :key="i" class="flex-center">
          <RouterLink
            :to="item.to"
            class="relative text-lg hover:text-[#AA6666] cursor-pointer transition ease-in-out delay-150"
            :class="item.isActive ? 'font-bold text-[#AA6666] isActive' : ''"
            >{{ item.text }}</RouterLink
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const showMenu = ref(false)
const menuItems = reactive([
  { to: '/', text: '白頭翁的特性', isActive: true },
  { to: '/', text: '白頭翁的故事', isActive: false },
  { to: '/', text: '白頭翁的美照', isActive: false },
  { to: '/', text: '白頭翁的危機', isActive: false }
])
// menu isActive 狀態會改用router path 判斷去做css樣式變更


const toggleMenu = () => (showMenu.value = !showMenu.value)

const handleMediaQueryChange = (e) => {
  if (e.matches) {
    showMenu.value = false
  }
}

onMounted(() => {
  const mediaQuery = window.matchMedia('(min-width: 768px)')
  mediaQuery.addEventListener('change', handleMediaQueryChange)

  handleMediaQueryChange(mediaQuery)
})

onUnmounted(() => {
  mediaQuery.removeEventListener('change', handleMediaQueryChange)
})
</script>

<style lang="scss" scoped>
.isActive::after {
  position: absolute;
  content: '';
  display: block;
  width: 100%;
  height: 2px;
  background-color: #aa6666;
}
</style>
