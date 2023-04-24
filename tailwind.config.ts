import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        primary: '#9C2F31',
        bgPink: '#E5C7C4',
      },
      boxShadow: {
        top: 'var(--top-shadow-elevation-medium)',
        bottom: 'var(--bottom-shadow-elevation-medium)',
      },
      dropShadow: {
        glow: [
          '-1mm -1mm 1mm rgba(247, 204, 204, 0.53)',
          '1mm 1mm 2mm rgb(255, 255, 255)',
        ],
      },
      fontFamily: {
        cursive: 'var(--font-cursive)',
        sans: 'var(--font-sans)',
      },
      fontSize: {
        header: 'var(--header)',
        subtitle: 'var(--subtitle)',
        body: 'var(--body)',
      },
      screens: {
        md: '900px',
      },
      keyframes: {
        fadeIn: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
      },
      backgroundImage: {
        gradientPinkDesktop: 'var(--background-gradient-desktop)',
        gradientPinkMobile: 'var(--background-gradient-mobile)',
        gradientPartners: 'var(--background-gradient-families)',
        gradientFamilies: 'var(--background-gradient-partners)',
        gradientBase: 'var(--background-gradient-base)',
      },
    },
  },
};
