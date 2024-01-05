/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        'red-hat-display': ['Red Hat Display', 'sans-serif'],
      },
      colors: {
        primary: '#515DEF',
        'info-soft': '#E9F8FF',
        'primary-soft': '#F8F9FF',
        'danger-soft': '#FCEFEE',
        'purple-soft': '#FBEEFC',
        'warning-soft': '#FFF5EF',
        'success-soft': '#EEFCF5',
        'info-soft': '#E9F8FF',
        'title-color': '#313131',
        'black-heading-2': '#333333',
        'sub-heading': '#5C554B',
        'description-color': '#515B6F',
        'grey-3': '#909090',
        'grey-4': '#AFAFBB',
        'footer-color': '#202430',
        'icon-grey': '#51555E',
      },
    },
  },
  plugins: [],
};
