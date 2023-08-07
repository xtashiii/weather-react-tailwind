/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-temp': "url('../assets/bg-temp-now.png')",
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif']
      },
      colors: {
        'blue-sky': '#8E87FA',
        'blue-frame-handle': '#6D67D0',
        'blue-statistic-box': 'rgba(102, 96, 200, 0.6)',
        'white-location-name': '#C2BFF4',
        'low-white': '#DAD8F7',
        'statistic-white': '#E7E6FB'
      },
      width: {
        '120': '30rem',
      },
      height: {
        '120': '30rem',
      },
      margin: {
        '42': '11.75rem'
      }
    },
  },
  plugins: [],
}
