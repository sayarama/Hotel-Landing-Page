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
        'hero': "url('https://raw.githubusercontent.com/ulrmdhn/Hotel-Landing-Page/main/src/img/hero.webp')",
        'section1': "https://raw.githubusercontent.com/ulrmdhn/Hotel-Landing-Page/main/src/img/section1.webp')",
        'section2': "https://raw.githubusercontent.com/ulrmdhn/Hotel-Landing-Page/main/src/img/section2.webp')",
        'footer': "url('https://raw.githubusercontent.com/ulrmdhn/Hotel-Landing-Page/main/src/img/footer.webp')",
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
