module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      typography: (theme) => ({
        dark: {
          css: {
            color: theme('colors.gray.100'),
            h1: {
              color: theme('colors.gray.100'),
            },
            h2: {
              color: theme('colors.gray.100'),
            },
            h3: {
              color: theme('colors.gray.100'),
            },
            h4: {
              color: theme('colors.gray.100'),
            },
            a: {
              color: theme('colors.gray.100'),
            },
            p: {
              color: theme('colors.gray.100'),
            },
            code: {
              color: theme('colors.gray.100'),
            },
            i: {
              color: theme('colors.gray.100'),
            },
          },
        },
        DEFAULT: {
          css: {
            pre: {
              backgroundColor: 'unset',
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: { typography: ['dark'] },
  },
  plugins: [require('@tailwindcss/typography')],
};
