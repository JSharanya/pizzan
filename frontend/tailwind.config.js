const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        customDarkBlue: 'rgba(1, 15, 28, 1)', // or '#010F1C' as a hex value
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

