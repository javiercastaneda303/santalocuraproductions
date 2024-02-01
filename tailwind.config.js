module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#489ac2',
        secondary: '#242834',
        third: '#c4b0a9'
      },
      width: {
        30: '30px',
        60: '60px'
      },
      height: {
        30: '30px',
        40: '40px'
      }
    }
  },
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  variants: {},
  plugins: []
}
