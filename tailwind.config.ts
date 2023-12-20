const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      md: '750px',
      lg: '1350px',
    },
    extend: {
      keyframes: {
        fadein: {
          to: { transform: 'translateY(0)'},
          from: { transform: 'translateY(40px)', opacity: '0' },
        },
      },
      animation: {
        fadein: 'fadein 2s ease-in-out',
        fadein2: 'fadein 1s ease-in-out',
      },
      fontFamily: {
        anton: ['Anton'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
