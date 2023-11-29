import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      brand: {
        '800': '#1F2335',
        '700': '#24283b',
        '600': '#353949',
        'text': '#B1C2EF',
        'gray': '#59606d',
        'light-blue': '#4198b7',
      }
      
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
export default config
