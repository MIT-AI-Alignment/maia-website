/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        maia_gray: "#f5eff9",
        maia_white: "#fdfbfe",
        maia_purple: "#663399",
        maia_pink: "#0070f3",
        maia_black: "#1b1023"
      },

      fontFamily: {
        heading: ['Inconsolata', 'Commit Mono', 'monospace'],
        // heading: ['ui-serif', 'Georgia', 'Cambria', "Times New Roman", 'Times', 'serif'],
      },
  },
    
  },
  plugins: [],
}

