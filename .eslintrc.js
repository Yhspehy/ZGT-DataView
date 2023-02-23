/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier'
  ],
  overrides: [
    {
      files: [
        '**/__tests__/*.{cy,spec}.{js,ts,jsx,tsx}',
        'cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}'
      ],
      extends: ['plugin:cypress/recommended']
    },
    {
      files: ['*.vue', '*.js'],
      rules: {
        'prettier/prettier': [
          'error',
          {
            singleQuote: true,
            trailingComma: 'none',
            semi: false
          }
        ]
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
