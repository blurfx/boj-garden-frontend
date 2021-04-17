module.exports = {
  'src/**/*.{ts,tsx}': () => 'tsc --noEmit',
  'src/**/*.{ts,tsx,js}': [
    'eslint --fix',
    'stylelint --fix',
  ],
};
