import type { Config } from 'tailwindcss';

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        lalezar: ['Lalezar'],
        knewave: ['Knewave'],
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }: { addUtilities: any }) {
      addUtilities({
        '.content-area': {
          '@apply relative flex h-screen w-screen border-2 border-red-600 bg-slate-400 p-5':
            '',
        },
        '.center-layout': {
          '@apply relative grid h-screen w-screen place-items-center border-2 border-red-600 bg-slate-400 p-5':
            '',
        },
      });
    }),
  ],
};
