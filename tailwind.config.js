/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('../img/hero.jpg')",
        'section1': "url('../img/section1.jpg')",
        'section2': "url('../img/section2.jpg')",
        'footer': "url('../img/footer.jpg')",
      },
      fontFamily: {
        'Poppins': ['"Poppins"'],
        'Great-Vibes': ['"Great Vibes"'],
        'Edu': ["Edu NSW ACT Foundation"]
      },
      colors: {
        'section': '#f5f5f5)',
      }
    },
  },
  plugins: [],
}
