    /** @type {import('tailwindcss').Config} */
    module.exports = {
      content: [
        // Add your project's file paths here for Tailwind to scan
        './public/*.{html,js}',
        './src/**/*.{js,jsx,ts,tsx}',
      ],
      theme: {
        extend: {},
      },
      plugins: [
        require('daisyui'),
      ],
    };