module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: '#ffffff', // white
      danger: "#dc2626", // red- 600
      blue: '#3b82f6', // blue-500
      green: '#15803d', // green-500
      slate: '#94a3b8', // slate-400
      gray: '#a1a1aa', // zinc-400
      dark: '#0f172a', // slate-900
      accent: '#ddd6fe', // violet-200
      yellow: '#eab308', // yellow-500
      primary: '#8b5cf6', // violet-500
      'primary-dark': '#7c3aed', // violet-600
      'primary-pure-dark': '#4c1d95', // violet-600
      'primary-light': '#f5f3ff', // violet-200
      'primary-lighter': '#f8fcff', // violet-50
      'dark-blue': '#2563eb', // blue-600
      'dark-green': '#16a34a', // green-600
      'light-blue': '#bfdbfe', // blue-200
      'light-gray': '#f1f5f9', //gray-50
      'gray-700': '#374151', // gray 700
      'dim-gray': '#696969'
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif']
    },
    extend: {
      screens: {
        'sm': '500px',
        '3xl': '2000px'
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
