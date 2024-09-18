module.exports = {
  builder: 'webpack',
  presets: [
    [
      '@x.render/build-react-component-webpack-preset',
      {
        inlineStyle: true,
      },
    ],
  ],
};
