require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    parser: ['@babel/eslint-parser']
  },
  rules: {
    'no-underscore-dangle': 'off',
    'vue/no-mutating-props': 'off'
  }
}
