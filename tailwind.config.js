/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 0px 15px 0px #38302D',
      },
      colors: {
        'navbar-bg': '#514141',
        'custom-black-adventage':'#1B1817',
        'custom-white-adventage':'#E6E6E6',
        'custom-back-popup-input':'#1B1817',
        'main':'#1B1817',
        'titles-color':'#E8E4FF'
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #A8715F 100%, #38302D 100%)',
        'custom-gradient-titles': 'radial-gradient(0% 0% at 50.43% 0%, rgba  10%, rgba(168, 113, 95, 1) 0%)',
      },
    },
  },
  plugins: [],
}

