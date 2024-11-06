/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('/src/assets/bg-shadow.png')",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui')],
}
