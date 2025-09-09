/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'axencis-1': '#2E38F2', // Primary blue
        'axencis-2': '#3037BF', // Medium blue  
        'axencis-3': '#32408C', // Dark blue
        'axencis-4': '#B4B9D9', // Light blue-gray
        'axencis-5': '#333640', // Dark gray
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
    },
  },
  plugins: [],
}