/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        ink: '#151a2b',
        line: '#e7eaf1',
        panel: '#ffffff',
        surface: '#f7f8fb',
        muted: '#5c6882',
        brand: {
          pink: '#ff3d8a',
          purple: '#8b5cf6',
          blue: '#38bdf8',
        },
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #ff3d8a 0%, #8b5cf6 40%, #38bdf8 100%)',
      },
      boxShadow: {
        'brand-pink': '0 15px 35px rgba(255, 61, 138, 0.25)',
      },
    },
  },
  plugins: [],
};
