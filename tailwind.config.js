/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter var', 'Inter', ...defaultTheme.fontFamily.sans],
    },
    borderRadius: {
      none: 0,
      xs: 2,
      sm: 4,
      md: 6,
      lg: 10,
      xl: 16,
      '2xl': 20,
      '3xl': 24,
      full: 9999,
    },
    boxShadow: {
      none: 'hsl(var(--merza-theme-shadows-none))',
      xs: 'hsl(var(--merza-theme-shadows-xs))',
      sm: 'hsl(var(--merza-theme-shadows-sm))',
      md: 'hsl(var(--merza-theme-shadows-md))',
      lg: 'hsl(var(--merza-theme-shadows-lg))',
      xl: 'hsl(var(--merza-theme-shadows-xl))',
    },
    screens: {
      xs: '340px',
      sm: '420px',
      'sm-gutters': '468px',
      md: '740px',
      'md-gutters': '788px',
      lg: '960px',
      'lg-gutters': '1008px',
      xl: '1200px',
      'xl-gutters': '1248px',
    },
    extend: {
      backgroundColor: {
        default: 'hsl(var(--merza-theme-background-default))',
        screen: 'hsl(var(--merza-theme-background-screen))',
        subtle: 'hsl(var(--merza-theme-background-subtle))',
        element: 'hsl(var(--merza-theme-background-element))',
        hover: 'hsl(var(--merza-theme-background-hover))',
        primary: 'hsl(var(--primary))',
      },
      colors: {
        default: 'hsl(var(--merza-theme-text-default))',
        secondary: 'hsl(var(--merza-theme-text-secondary))',
        zinc: {
          50: '#f9f9f9',
          100: '#ededed',
          200: '#d3d3d3',
          300: '#b3b3b3',
          400: '#a0a0a0',
          500: '#898989',
          600: '#6c6c6c',
          700: '#202020',
          800: '#121212',
          900: '#111',
        },
      },
      borderColor: {
        default: 'hsl(var(--merza-theme-border-default))',
        secondary: 'hsl(var(--merza-theme-border-secondary))',
      },
    },
  },
  plugins: [],
};
