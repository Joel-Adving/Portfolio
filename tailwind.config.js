module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      main: {
        primary: '#08d9d6',
        secondary: '#ff2e63',
        light_primary: '#eaeaea',
        light_secondary: '#52616b',
        dark: '#252a34',
        black: '#000',
        white: '#fff',
      },
      discordTheme: {
        darkest: '#202225',
        dark: '#292b2f',
        DEFAULT: '#2f3136',
        light: '#36393f',
        lightest: '#8e9297',
      },
      green: {
        DEFAULT: '#43b581',
      },
      purple: {
        DEFAULT: '#904fad',
      },
      red: {
        DEFAULT: '#f04747',
      },
      offWhite: {
        DEFAULT: '#f5f5f5',
      },
    },
  },
  variants: {
    overflow: ['hover', 'focus'],
  },
  plugins: [],
}
