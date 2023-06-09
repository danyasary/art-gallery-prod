module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        prettywise: ['prettywise', 'regular'],
        'sf-pro': ['San Francisco', 'sans-serif'],
        muara: ['Muara', 'sans-serif'],
      },
      fontSize: {
        '6xl': ['64px', '1.25'],
        '4xl': ['52px', '1'],
        '3xl': ['40px', '1.10'],
        '2xl': ['32px', '1.20'],
        xl: ['24px', '1.20'],
        lg: ['20px', '1.40'],
        base: ['16px', '1.40'],
        sm: ['14px', '1.40'],
        xs: '12px',
        '2xs': '10px',
      },
      colors: {
        brand: {
          primary: '#CCA035',
          secondary: '#FFDC8F',
          tertiary: '#906C28',
          quaternary: '#1F2227',
          quinary: '#262931',
          senary: '#16171A',
        },
        neutral: {
          100: '#000000',
          90: '#0F1010',
          80: '#232425',
          70: '#343536',
          60: '#5E6061',
          50: '#8D9093',
          40: '#BEC2C5',
          30: '#D4D9DB',
          20: '#E2E6EA',
        },
        gradient: {
          black: '#323232e8',
        },
      },
      backgroundImage: {
        'navbar-bg': 'linear-gradient(180deg, #1F2227 36.7%, #262931 112.44%)',
        slider:
          'linear-gradient(74.22deg, #1F2227 20%, rgba(15, 23, 42, 0.413542) 50%, rgba(15, 23, 42, 0) 90%)',
        gallery:
          'linear-gradient(180deg, rgba(50, 50, 50, 0) -3.87%, rgba(50, 50, 50, 0.91) 80.74%)',
        artwork: "url('/public/rectangle.svg')",
      },
      backgroundColor: {
        primary: '#1F2227',
        secondary: '#16171A',
      },
    },
  },
  plugins: [],
}
