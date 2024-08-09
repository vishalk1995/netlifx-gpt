/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      // Custom scrollbar styles
      scrollbar: {
        width: '8px',
        height: '8px',
        track: {
          background: '#f1f1f1',
        },
        thumb: {
          background: '#888',
          borderRadius: '4px',
        },
        thumbHover: {
          background: '#555',
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
