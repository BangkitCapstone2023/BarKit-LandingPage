const config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#DD283C',
          200: '#E6E6E6',
          300: '#212326',
        },
        black: {
          100: '#212625',
          200: '#424C4A',
          300: '#57605E',
          400: '#82918E',
          500: '#212326',
        },
        secondary: {
          200: '#FFBC9F',
        },
        tertiary: {
          200: '#FFDB95',
          300: '#FBF7EC',
        },
      },
      fontFamily: {
        head: ['Plus Jakarta Sans', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      opacity: {
        15: '.15',
      },
    },
  },
  plugins: [],
};

export default config;
