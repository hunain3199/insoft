/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFF9E8',
        foreground: '#212B36',
        card: {
          DEFAULT: '#FFF9E8',
          foreground: '#212B36',
        },
        popover: {
          DEFAULT: '#FFF9E8',
          foreground: '#212B36',
        },
        primary: {
          DEFAULT: '#2555BB',
          foreground: '#FFF9E8',
        },
        secondary: {
          DEFAULT: '#FFF9E8',
          foreground: '#a22b3d',
        },
        muted: {
          DEFAULT: '#E5D5C5',
          foreground: '#6E4C4B',
        },
        accent: {
          DEFAULT: '#6E4C4B',
          foreground: '#FFF9E8',
        },
        destructive: {
          DEFAULT: '#6E4C4B',
          foreground: '#FFF9E8',
        },
        border: '#a22b3d',
        input: '#FFF9E8',
        ring: '#a22b3d',
        chart: {
          1: '#a22b3d',
          2: '#6E4C4B',
          3: '#F3F4F6',
          4: '#FFF9E8',
          5: '#212B36',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
