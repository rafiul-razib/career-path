/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '10xl': ['12rem', { lineHeight: '1' }],
      },
      maxHeight: {
        '550px': '550px',
      },
      padding: ['hover']
    },
    
  },
  plugins: [require("tailwindcss-named-groups"), require('@tailwindcss/forms'),],
}

