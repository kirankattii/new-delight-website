/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "8rem",
        xl: "8rem",
        "2xl": "18rem",
      },
    },
    extend: {
      colors: {
        "app-green-1": "#77cb3b", // Primary green
        "app-green-2": "#16a326", // Darker green
        "app-green-3": "#15803d", // Darkest green
        "app-light-1": "#f0fdf0", // Lightest background
        "app-light-2": "#dcfce0", // Light background
        "app-dark-1": "#166534", // Dark text
        "app-dark-2": "#14532d", // Darker text
      },
      fontFamily: {
        'playfair-display': ['var(--font-playfair-display)', 'Georgia', 'serif'],
        'inter': ['var(--font-inter)', 'system-ui', 'sans-serif'],
        'nunito-sans': ['var(--font-nunito-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
