/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        discord: {
          dark: '#313338',
          darker: '#2b2d31',
          darkest: '#1e1f22',
          blurple: '#5865F2',
          green: '#23a55a',
          yellow: '#f0b232',
          red: '#f23f43',
        },
        instagram: {
          border: '#dbdbdb',
          darkBorder: '#262626',
          bgDark: '#000000',
        },
        twitter: {
          blue: '#1d9bf0',
          dark: '#000000',
          dim: '#15202b',
        },
        linkedin: {
          blue: '#0a66c2',
        },
        tiktok: {
          cyan: '#00f2fe',
          pink: '#fe0979',
          dark: '#121212',
        },
        whatsapp: {
          green: '#00a884',
          teal: '#128c7e',
          dark: '#111b21',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
