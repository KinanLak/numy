module.exports = {
  mode: 'jit',
  content: ['./public/*.html'],
  theme: {
    fontSize: {
      '5xs': '.25rem',
      '4xs': '.375rem',
      '3xs': '.5rem',
      '2xs': '.625rem',
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      title: ['Slab', 'serif']
    },
    extend: {
      colors: {
        'myellow': '#F8E9A1',
        'mred': '#F76C6C',
        'mlightblue': '#A8D0E6',
        'mblue': '#374785',
        'mdarkblue': '#24305E'
      },
    },
  },
  plugins: [
  ],
}
