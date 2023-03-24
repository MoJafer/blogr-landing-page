/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(356, 100%, 66%)',
        secondary: 'hsl(355, 100%, 74%)',
        gradient: 'hsl(353, 100%, 62%)',
        'gradient-l': 'hsl(13, 100%, 72%)',
        headings: 'hsl(208, 49%, 24%)',
        footerText: 'hsl(240, 2%, 79%)',
        footerBg: 'hsl(240, 10%, 16%)',
        body: 'hsl(207, 13%, 34%)',
        'footer-bg': 'hsl(240, 10%, 16%)',
      }
    },

  },
  plugins: [],
}
