// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
    jquery: true
  },
  globals: {
    $: true,
    logger: true,
    _: true
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    'import/no-webpack-loader-syntax': 'off',
    'no-new': 'off',
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // disallow newline at the end of file
    'eol-last': 'off',
    // cf. https://eslint.org/docs/rules/one-var
    'one-var': ['error', { separateRequires: true }],
    // disallow a space before function parenthesis
    'space-before-function-paren': 'off',
    // cf. https://eslint.org/docs/rules/curly#multi
    'curly': 'off',
    // cf. https://eslint.org/docs/rules/object-curly-spacing#objectsinobjects
    'object-curly-spacing': ['error', 'always', { 'arraysInObjects': false, 'objectsInObjects': true }],
    // cf. https://eslint.org/docs/rules/indent
    'indent': ['error', 2,
      {
        'ArrayExpression': 1,
        'ObjectExpression': 1,
        'SwitchCase': 1
      }
    ],
    // cf. https://eslint.org/docs/rules/operator-linebreak#before
    'operator-linebreak': ['error', 'before'],
    // disallows a whitespace (space or tab) beginning a comment (spaced-comment)
    'spaced-comment': 'off',
    // Disallow Use of the Comma Operator (no-sequences)
    'no-sequences': 'off',
    // disable valid v-for directives
    // cf. https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-for.md
    // cf. https://github.com/vuejs/vetur/issues/261
    'vue/valid-v-for': 'off'
  }
}
