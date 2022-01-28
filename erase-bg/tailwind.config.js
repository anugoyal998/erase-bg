module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        c1: '#F84002',
        c2: '#ABD8FF',
        c3: '#FC6F40'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
  important: true,
}
