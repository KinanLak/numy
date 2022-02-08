module.exports = {
  mode: 'jit',
  content: ['./public/pages/*.html'],
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

      // '5xs': '.625rem',
      // '4xs': '.9375rem',
      // '3xs': '1.25rem',
      // '2xs': '1.5625rem',
      // 'xs': '1.875rem',
      // 'sm': '2.1875rem',
      // 'base': '2.5rem',
      // 'lg': '2.8125rem',
      // 'xl': '3.125rem',
      // '2xl': '3.75rem',
      // '3xl': '4,6875rem',
      // '4xl': '5.625rem',
      // '5xl': '7.5rem',
      // '6xl': '10rem',
      // '7xl': '12.5rem',
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      title: ['Slab', 'serif']
    },
    extend: {
      backgroundImage: {
        tmpl: 'url(https://picsum.photos/1200)',
        thumb1: 'url(./assets/img/thumbnails/1.jpg)',
        thumb2: 'url(./assets/img/thumbnails/2.jpg)',
        thumb3: 'url(./assets/img/thumbnails/3.jpg)',
        thumb4: 'url(./assets/img/thumbnails/4.jpg)',
      },
      colors: {
        'myellow': '#F8E9A1',
        'mlightorange':'#eab308',
        'morange': '#EE962B',
        'mred': '#F76C6C',
        'mlightblue': '#A8D0E6',
        'mblue': '#374785',
        'mdarkblue': '#24305E',
        'mverdydarkblue': '#1f284f',
      },
      screens: {
        'mini':'0px'
      },
    },
  },
  plugins: [
  ],
}
