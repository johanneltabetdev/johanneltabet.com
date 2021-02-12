module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: ['airbnb-base', 'plugin:vue/recommended', 'prettier', 'prettier/vue'],
  plugins: ['vue', 'prettier'],
  // add your custom rules here
  rules: {
    'prettier/prettier': 'error',
    'no-param-reassign': 'off',
    'vue/no-v-html': 'off',
    semi: ['error', 'never'],
    'comma-dangle': ['error', 'always-multiline'],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['scripts/**'],
      },
    ],
    'no-use-before-define': ['error', { functions: false, classes: true }],
    'no-return-assign': 'off',
  },
  settings: {
    'import/resolver': {
      nuxt: {
        nuxtSrcDir: 'src',
      },
    },
    'import/core-modules': ['vue', 'vuex'],
  },
}
