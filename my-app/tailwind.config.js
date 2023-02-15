/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {},
     screens: {
      'sm': '500px',
      'md': '768px',
      'lg': '1024px'
    },
    minWidth: {
      '1/6': '16.666%'
    },
    colors: {
      'bkgd': '#C0D6DF',
      'notes-bkgd': '#1b63724b',
      'btn':'#022B3A',
      'btn-hover': '#044157',
      'btn-delete': '#ce1703',
      'deleteHover': '#ee1e06',
      'white': '#ffffff',
      'black': '#000000',
      'note-melon': '#E9AFA3',
      'note-june': '#C5D86D',
      'red':'#ff0000',
      'coral':"#ff7f15",
      'aqua':"#00ffff",

    },
    shadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
    
    
  },
  plugins: [],
}
