import { type Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  plugins: [require('tailwindcss-animate')],
}

export default config
