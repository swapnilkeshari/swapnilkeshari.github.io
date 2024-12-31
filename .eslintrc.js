module.exports = {
    extends: [
      'next/core-web-vitals', // Includes essential Next.js rules
      'eslint:recommended',    // Recommended ESLint rules
    ],
    plugins: ['next'], // Enable the Next.js plugin
    rules: {
      'react/no-unescaped-entities': 'off', // Disable this rule
      '@next/next/no-page-custom-font': 'off', // Disable this rule 
    },
  };
  