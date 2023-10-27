/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        red : "#fc4747", 
        darkBlue : "#10141e",
        gray : "#5a698f",
        blueSlate : "#161d2f",
        blackTransparent : "#00000096 ",
        whiteNew: "#ffffff57"

        
      }
    },
  },
  plugins: [],
}
