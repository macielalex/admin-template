module.exports = {
  purge:{
    content:  [
      './src/pages/**/*.{js,ts,jsx,tsx}', 
      './src/components/**/*.{js,ts,jsx,tsx}'
    ],
    safelist: [
      /^bg-/,
      /^to-/,
      /^from-/,
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      'sm': '240px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
