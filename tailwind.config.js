export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'noto-sans': ['Noto Sans TC', 'sans-serif'],
      },
      boxShadow: {
        custom: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        logo: '0px 0px 6px rgba(0, 0, 0, 0.25)',
      },
      backgroundImage: {
        'banner': "url('./src/assets/banner.png')"
      }
    },
  },
  plugins: [],
}
