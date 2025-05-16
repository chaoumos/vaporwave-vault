/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'vaporwave-blue': '#50a3a2',
        'vaporwave-pink': '#e966a0',
        'vaporwave-purple': '#7c4dff',
      },
      fontFamily: {
        'pixel': ['"Press Start 2P"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}