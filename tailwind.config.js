/* eslint-disable style/quote-props */
/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,tsx,ts}'],
  theme: {
    extend: {
      strokeWidth: {
        3: '4px',
      },
      boxShadow: {
        xs: '0 0 2px 0 rgba(41, 50, 60, 0.5)',
        ring: '0px 0px 0px 4px rgba(17,187,166,0.3)',
      },
      fontFamily: {
        game: ['Press Start 2P'],
      },
      colors: {
        bg: {
          primary: {
            DEFAULT: 'var(--background-primary)',
            hover: 'var(--background-primary-hover)',
          },
          secondary: {
            DEFAULT: 'var(--background-secondary)',
            hover: 'var(--background-secondary-hover)',
          },
        },
        fg: {
          primary: {
            DEFAULT: 'var(--foreground-primary)',
            hover: 'var(--foreground-primary-hover)',
          },
          secondary: {
            DEFAULT: 'var(--foreground-secondary)',
            hover: 'var(--foreground-secondary-hover)',
          },
        },
        bd: {
          primary: {
            DEFAULT: 'var(--border-primary)',
            hover: 'var(--border-primary-hover)',
          },
        },
        accent: {
          DEFAULT: 'var(--accent)',
        },
        primary: {
          DEFAULT: 'var(--primary)',
        },
      },
      animation: {
        border: 'border 3s',
        'caret-blink': 'caret-blink 1.25s ease-out infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'slide-in-right': 'slideInFromRight 0.2s ease-out forwards',
        'slide-in-left': 'slideInFromLeft 0.2s ease-out forwards',
        'slide-in-top': 'slideInFromTop 0.2s ease-out forwards',
        fadeInLeft: 'fadeInLeft 0.5s ease-out forwards',
        jiggle: 'jiggle 1s ease-in-out',
        flash: 'flash 1s ease-in-out',
        shake: 'shake 1s ease-in-out',
        glow: 'glow 1s ease-in-out',
        fadeInZoom: 'fadeInZoom 0.3s forwards',
        fadeOutZoom: 'fadeOutZoom 0.3s forwards',
        fadeIn: 'fadeIn 0.3s forwards',
        fadeOut: 'fadeOut 0.3s forwards',
      },
      transitionProperty: {
        colors: 'background-color, border-color, color, fill, stroke',
      },
      transitionDuration: {
        200: '200ms',
      },
      keyframes: {
        'caret-blink': {
          '0%,70%,100%': { opacity: '1' },
          '20%,50%': { opacity: '0' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        slideInFromRight: {
          '0%': { transform: 'translateX(100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        slideInFromLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        slideInFromTop: {
          '100%': { transform: 'translateY(100%)', opacity: 1 },
        },
        fadeInLeft: {
          '0%': {
            opacity: 0,
            transform: 'translate3d(-100%, 0, 0)',
          },
          '100%': {
            opacity: 1,
            transform: 'translate3d(0, 0, 0)',
          },
        },
        jiggle: {
          '0%': {
            transform: 'scale3d(1, 1, 1)',
          },
          '30%': {
            transform: 'scale3d(1.25, 0.75, 1)',
          },
          '40%': {
            transform: 'scale3d(0.75, 1.25, 1)',
          },
          '50%': {
            transform: 'scale3d(1.15, 0.85, 1)',
          },
          '65%': {
            transform: 'scale3d(0.95, 1.05, 1)',
          },
          '75%': {
            transform: 'scale3d(1.05, 0.95, 1)',
          },
          '100%': {
            transform: 'scale3d(1, 1, 1)',
          },
        },
        flash: {
          '0%, 50%, 100%': {
            opacity: '1',
          },
          '25%, 75%': {
            opacity: '0',
          },
        },
        shake: {
          '0%, 100%': {
            transform: 'translateX(0)',
          },
          '10%, 30%, 50%, 70%, 90%': {
            transform: 'translateX(-10px)',
          },
          '20%, 40%, 60%, 80%': {
            transform: 'translateX(10px)',
          },
        },
        glow: {
          '0%': {
            backgroundColor: '#FCFCFD',
          },
          '30%': {
            backgroundColor: '#FFF6CD',
          },
          '100%': {
            backgroundColor: '#FCFCFD',
          },
        },
        fadeInZoom: {
          '0%': { opacity: 0, transform: 'translate(-50%, -50%) scale(0.95)' },
          '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
        },
        fadeOutZoom: {
          '0%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
          '100%': { opacity: 0, transform: 'translate(-50%, -50%) scale(0.55)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    ({ addBase }) => {
      addBase({
        '*': {
          transitionProperty: 'background-color, border-color, color, fill, stroke',
          transitionDuration: '200ms',
        },
      });
    },
  ],
  variants: {},
};
