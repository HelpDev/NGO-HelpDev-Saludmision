/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Docs Nuxt: https://tailwindcss.nuxtjs.org/
 */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        // First add to nuxt config
        sans: ['Work Sans', ...defaultTheme.fontFamily.sans],
        serif: ['Montserrat', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        primary: {
          100: '#74D7F2',
          200: '#4FCCEE',
          300: '#2AC1EB',
          400: '#15ADD7',
          500: '#118FB2',
          600: '#0C667F',
          700: '#073D4C',
          800: '#021418',
          900: '#000000'
        },
        social: {
          twitter: '#1da1f2',
          facebook: '#1877f2',
          instagram: '#e4405f',
          mail: '#005ff9',
          whatsapp: '#25D366'
        }
      },
      height: {
        '10v': '10vh',
        '20v': '20vh',
        '30v': '30vh',
        '40v': '40vh',
        '50v': '50vh',
        '60v': '60vh',
        '70v': '70vh',
        '80v': '80vh',
        '90v': '90vh',
        '100v': '100vh'
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'node_modules/vue-tailwind/dist/*.js',
      'nuxt.config.js'
    ]
  }
};
