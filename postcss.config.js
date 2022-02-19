module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 16,
      propList: ['*', '!background-position'],
      selectorBlackList: ['px-', 'html'],
    },
  },
};
