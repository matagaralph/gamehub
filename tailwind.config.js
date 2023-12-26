/** @type {import('tailwindcss').Config} */
export default {
  safelist: ['icon-md', 'text-icon-default'],
  darkMode: ['class', '[class*="dark-theme"]'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
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
    extend: {
      backgroundColor: {
        default: 'hsl(var(--merza-theme-background-default))',
        screen: 'hsl(var(--merza-theme-background-screen))',
        subtle: 'hsl(var(--merza-theme-background-subtle))',
        element: 'hsl(var(--merza-theme-background-element))',
        hover: 'hsl(var(--merza-theme-background-hover))',
      },
      colors: {
        default: 'hsl(var(--merza-theme-text-default))',
        secondary: 'hsl(var(--merza-theme-text-secondary))',
      },
      borderColor: {
        default: 'hsl(var(--merza-theme-border-default))',
        secondary: 'hsl(var(--merza-theme-border-secondary))',
      },
    },
  },
  plugins: [],
};
