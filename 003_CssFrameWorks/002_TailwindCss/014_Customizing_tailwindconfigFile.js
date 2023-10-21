#1-Tailwind Configuration
One can use the ‘Tailwind Configuration’ feature to customize the Tailwind CSS according to his/her liking by simply manipulating the configure file of Tailwind CSS.
This means that one can add custom values of margin, border, colour, screen breakpoints, colors, etc. Eventually, the Complete control of Tailwind CSS customization properties lies in your hands

#2-Default Configuration file
You can add the complete configuration file, such that it comprises all the Tailwind’s default configuration, in your application by using the below command

npx tailwindcss init confHarry --full  


#3-Theme Configuration:
The theme section is where you can customize colors, fonts, spacing, and more. For example, to change the default font family, you can do:
// npx tailwindcss init confHarry --full
Extend or Add Utility Classes:  You can add your custom utility classes under the extend 


module.exports = {
  content: ["*"],
  theme: {
    screens: {
      xsm: '500px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      spacing: {
        13: '3.25rem'
      },
      fontSize: {
        '10xl': ['9rem', { lineHeight: '1.2' }],
      }
    },
  },
  plugins: [],
}


Every customization will be in extend only but screen customization will be under theme
