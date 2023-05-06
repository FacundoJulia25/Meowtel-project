/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors:{

        // primary colors
        'green-primary': '#B9D74D',
        'green-primary-dark': '#8BB741',
        'green-secundary-dark': '#103A1E',
        'green-bg':'EFF3E2',
        'orange-strong':'#F39100',
        'bg-primary': "#EFF3E2",
        // secundary 
        'services-bg-color':'#FEF2CB',
        'nav-items-blue':'#50B1E3'
      },
      fontFamily:{
        londrina:['Londrina Solid'],
        poppins:['Poppins'],
      }
    },
  },
  plugins: [],
}

