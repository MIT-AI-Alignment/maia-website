/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // ===========================================
        // MAIA Brand Colors - Primary Purple Palette
        // Base color: #663399 (Rebecca Purple)
        // ===========================================
        maia: {
          50:  '#faf5ff',  // Lightest tint
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#8b5cf6',  // Vibrant purple (use for accents)
          700: '#7c3aed',
          800: '#663399',  // Brand purple (Rebecca Purple)
          900: '#4c1d95',
          950: '#1b1023',  // Darkest (same as dark bg)
        },

        // ===========================================
        // Surface Colors - Backgrounds & Containers
        // ===========================================
        surface: {
          // Light mode
          light: '#fdfbfe',      // Main background (maia_white)
          'light-alt': '#f5eff9', // Secondary background (maia_gray)
          'light-elevated': '#ffffff', // Cards, modals
          
          // Dark mode
          dark: '#1b1023',       // Main background (maia_black)
          'dark-alt': '#2d1f3d', // Secondary background
          'dark-elevated': '#3d2952', // Cards, modals
        },

        // ===========================================
        // Border Colors
        // ===========================================
        border: {
          light: '#e5e7eb',
          dark: '#4c3d5c',
          maia: '#663399',
          // Subtle borders with opacity for cards
          'maia-subtle': 'rgba(102, 51, 153, 0.2)',      // Light mode
          'maia-subtle-dark': 'rgba(168, 85, 247, 0.3)', // Dark mode
        },

        // ===========================================
        // Semantic Colors - Status & Feedback
        // ===========================================
        status: {
          success: {
            light: '#dcfce7',
            DEFAULT: '#22c55e',
            dark: '#166534',
          },
          warning: {
            light: '#fef9c3',
            DEFAULT: '#eab308',
            dark: '#854d0e',
          },
          error: {
            light: '#fee2e2',
            DEFAULT: '#ef4444',
            dark: '#991b1b',
          },
          info: {
            light: '#dbeafe',
            DEFAULT: '#3b82f6',
            dark: '#1e40af',
          },
        },

        // ===========================================
        // Tag/Badge Colors - For paper categories etc.
        // ===========================================
        tag: {
          conference: { light: '#dbeafe', dark: '#1e3a5f' },  // Blue - NeurIPS, ICLR
          adversarial: { light: '#fee2e2', dark: '#5f1e1e' }, // Red
          rlhf: { light: '#dcfce7', dark: '#1e5f2c' },        // Green
          scaling: { light: '#f3e8ff', dark: '#4c1d95' },     // Purple
          mechinterp: { light: '#ffedd5', dark: '#7c2d12' },  // Orange
          governance: { light: '#e0f2fe', dark: '#0c4a6e' },  // Sky
          openai: { light: '#ffe4e6', dark: '#881337' },      // Rose
        },

        // ===========================================
        // Legacy aliases (for gradual migration)
        // ===========================================
        maia_white: '#fdfbfe',
        maia_black: '#1b1023',
        maia_gray: '#f5eff9',
        maia_purple: '#663399',
      },

      fontFamily: {
        heading: ['Inconsolata', 'Commit Mono', 'monospace'],
      },

      // ===========================================
      // Box Shadow with brand colors
      // ===========================================
      boxShadow: {
        'maia': '0 4px 14px 0 rgba(102, 51, 153, 0.15)',
        'maia-lg': '0 10px 40px 0 rgba(102, 51, 153, 0.2)',
      },
    },
  },
  plugins: [],
}

