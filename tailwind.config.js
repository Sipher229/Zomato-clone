/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'introBackground': "url('./src/assets/image_resources/zomato_image_resources/intro_background.jpg')",
        'hipHoliParties': "url('./src/assets/image_resources/zomato_image_resources/hipHoli.jpg')",
        'liveScreen': "url('./src/assets/image_resources/zomato_image_resources/liveScreen.jpeg')",
        'diningPlace1': "url('./src/assets/image_resources/zomato_image_resources/diningPlace1.jpg')",
        'diningPlace2': "url('./src/assets/image_resources/zomato_image_resources/diningPlace2.jpg')",
        'appStore': "Url('./src/assets/image_resources/zomato_image_resources/appStore.png')",
        'googlePlay': "Url('./src/assets/image_resources/zomato_image_resources/googlePlay.png')",
      },
      fontFamily:{
        'bigZomato': 'Salsa',
        'generalFont': 'Roboto',

      },
      colors:{
        'getAppBg': "#fffbf7"
      },
      backgroundSize:{
        '10': '10rem',
        '9': '9rem'
      }
    },
  },
  plugins: [],
}

