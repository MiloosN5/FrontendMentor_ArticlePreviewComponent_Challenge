/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      's1': '17.5rem', // small change1 [280px]
      's2': '21.875rem', // small change2 [350px]
      'd': '62rem' // desktop [992px]
    },
    extend: {
      colors: {
        'myBlue': {
          'lv1': 'hsl(217, 19%, 35%)', // VeryDarkGrayishBlue 
          'lv2': 'hsl(214, 17%, 51%)', // DesaturatedDarkBlue
          'lv3': 'hsl(212, 23%, 69%)', // GrayishBlue
          'lv4': 'hsl(210, 46%, 95%)', // LightGrayishBlue
          'hover': 'hsl(200, 100%, 60%)' // hover blue
        }
      },
      backgroundImage: {
        'heroImg_URL': "url('../src/assets/drawers.jpg')"
      },
      backgroundPosition: {
        'heroImg_POS--s2': 'center -1.25rem', // [center -20px]
        'heroImg_POS--d': '-0.125rem center' // [-2px center]
      },
      fontFamily: {
        'Manrope': ['Manrope']
      },
      fontSize: {
        'h2': 'clamp(1rem, 0.6rem + 1.34vw, 1.25rem)', // [16px -> 20px]
        'desc': '0.8125rem', // [13px]
        'info--default': '0.8125rem', // [13px]
        'info--popup': '0.875rem', // [14px]
      },
      letterSpacing: {
        'h2': '0.012em', 
        'desc': '0.01em', 
        'info--default': '0.01em', 
        'info--popup': '0.3em' 
      },
      lineHeight: {
        'h2': 'clamp(1.4375rem, 0.94rem + 1.67vw, 1.75rem)', // [23px -> 28px]
        'desc': '1.25rem', // [20px]
        'info--default': '1rem', // [16px]
      },
      gap: {
        'section': '0.8125rem', // [13px]
        'section--d': '0.625rem', // [10px]
        'popup': '2.25rem', // [36px]
        'popup--s2': '1.0625rem', // [17px]
        'footer': '1rem', // [16px]
        'social': '1.0625rem', // [17px]
      },
      padding: {
        'body_T': '4.625rem', // [74px]
        'section_T--s1': '2.375rem', // [38px]
        'section_T': '1.25rem', // [20px]
        'section_X': '1rem', // [16px]
        'section_X--s1': '2rem', // [32px]
        'section_X--d': '2.5rem', // [40px]
        'section_B': '1.25rem', // [20px]
        'footer_Y': '0.75rem', // [12px]
        'popup_X': '2rem', // [32px]
        'popup_X--d': '2.1875rem', // [35px]
        'popup_B': '3.125rem', // [50px]
      },
      width: {
        'card--d': '45.625rem', // [730px]
        'heroImg--d': '17.8125rem', // [285px] 
        'section--d': '27.8125rem', // [445px] 
        'avatar': '2.5rem', // [40px] 
        'shareWrapper': '2rem', // [32px] 
        'shareIcon': '1rem', // [16px] 
        'arrow': '1.625rem' // [26px] 
      },
      height: {
        'heroImg': '12.5rem', // [200px]
        'heroImg--d': '17.75rem', // [284px]
        'popup--d': '3.4375rem', // [55px]
        'shareWrapper': '2rem', // [32px]
        'shareIcon': '1rem', // [16px]
      },
      borderWidth: {
        'arrow': '0.8125rem' // [13px]
      },
      borderRadius: {
        'card': '0.625rem' // [10px]
      },
      inset: {
        'popup_B--d': '4.1875rem', // [67px]
        'popup_R--d': '-4.25rem', // [-68px]
        'popupArrow_L': '6.8125rem' // [109px]
      },
      dropShadow: {
        'card': '0rem 1.875rem 1.25rem rgba(20,20,100,.1)', // 0px 30px 20px 
        'popup': '0rem 0.5rem 0.125rem rgba(130,130,130,.15)' // 0px 8px 2px
      },
      content: {
        'empty': "''"
      }
    },
  },
  plugins: [],
}

