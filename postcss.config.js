module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      unitToConvert: 'px',
      viewportWidth: 1624,
      unitPrecision: 5,
      propList: ['*'],
      viewportUnit: 'rem',
      fontViewportUnit: 'rem',
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: false,
      replace: true,
      exclude: undefined,
      include: undefined,
      landscape: false
    }
  }
}
