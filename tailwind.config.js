/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        maia_gray: "#f5eff9",
        maia_white: "#fdfbfe",
      },

      fontFamily: {
        heading: ['Inconsolata', 'Commit Mono', 'monospace'],
        // heading: ['ui-serif', 'Georgia', 'Cambria', "Times New Roman", 'Times', 'serif'],
      },
  },
    
  },
  plugins: [],
}

