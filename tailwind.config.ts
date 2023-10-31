import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: colors.white,
      black: colors.black,
      red: colors.red,
      blue: colors.blue,
      showcase: {
        tlou: '#E8CA99',
        pokedex: '#F1F4F8',
        nooven: '#E2EFF8',
        talklink: '#EDEFED'
      },
      primary: {
        500: '#262626',
        600: '#212121',
      },
      gray: {
        100: '#EAEBEB',
        200: '#C3C3C3',
        300: '#989898',
        500: '#686868',
        900: '#101010',
      },
    },
    extend: {
      fontFamily: {
        gothic: ['var(--CarroisGothic)', 'sans-serif'],
        roboto: ['var(--Roboto)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
