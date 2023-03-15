module.exports = {
  root: true,
  extends: ['@callstack', 'plugin:react-native-a11y/all'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'react-native/no-raw-text': [
          2,
          {
            skip: ['MyButton', 'Title'],
          },
        ],
      },
    },
  ],
};
