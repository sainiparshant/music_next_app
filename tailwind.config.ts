import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class', // 👈 Enables dark mode with `class` strategy
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {}
  },
  plugins: []
}

export default config
