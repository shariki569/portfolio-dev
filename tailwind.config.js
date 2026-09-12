/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0c1220',
          900: '#121a2b',
          800: '#1a2740',
          700: '#243556',
        },
        mist: {
          50: '#f5f7fb',
          100: '#e9eef6',
          200: '#d5deec',
        },
        accent: {
          DEFAULT: '#0f766e',
          soft: '#14b8a6',
          deep: '#0d5c56',
        },
      },
      fontFamily: {
        display: ['"Sora"', 'system-ui', 'sans-serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 20px 60px -30px rgba(15, 118, 110, 0.45)',
        lift: '0 18px 40px -24px rgba(12, 18, 32, 0.35)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
        rise: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        shimmer: 'shimmer 8s ease infinite',
        rise: 'rise 0.8s ease forwards',
      },
      backgroundImage: {
        'hero-mesh':
          'radial-gradient(ellipse 80% 60% at 20% 20%, rgba(20,184,166,0.18), transparent 55%), radial-gradient(ellipse 70% 50% at 90% 10%, rgba(36,53,86,0.16), transparent 50%), linear-gradient(165deg, #f5f7fb 0%, #e8eef5 45%, #dfe8f2 100%)',
        'section-fade':
          'linear-gradient(180deg, rgba(245,247,251,0) 0%, rgba(245,247,251,1) 100%)',
      },
    },
  },
  plugins: [],
}
