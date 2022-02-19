module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'no-param-reassign': 0,
    "linebreak-style": 0,
    'vue/no-v-html': 0,
    'no-shadow': ['error', { 'allow': ['state'] }],
    'import/no-unresolved': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "import/extensions": 0,
    'import/no-extraneous-dependencies': 0,
    'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }],
    'max-len': ['error', { "code": 500 }],
    'no-underscore-dangle': 0,
    'no-unused-expressions': ['error', {
      allowShortCircuit: true,
      allowTernary: true,
      allowTaggedTemplates: true,
    }],
  },
};
