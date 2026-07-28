/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        md: "2rem",
        lg: "2rem",
        xl: "2rem",
        "2xl": "2rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },

    extend: {
      colors: {
        background: "#050816",
        surface: "#0B1023",
        card: "#12192D",

        primary: {
          DEFAULT: "#00D4FF",
          light: "#67E8F9",
          dark: "#0891B2",
        },

        accent: {
          DEFAULT: "#FFD54F",
          dark: "#F59E0B",
        },

        text: {
          DEFAULT: "#FFFFFF",
          secondary: "#CBD5E1",
          muted: "#94A3B8",
        },

        success: "#22C55E",
        warning: "#F59E0B",
        danger: "#EF4444",
        info: "#3B82F6",
      },

      spacing: {
  18: "4.5rem",
  22: "5.5rem",
  26: "6.5rem",
  30: "7.5rem",
},

zIndex: {
  60: "60",
  70: "70",
  80: "80",
  90: "90",
  100: "100",
},
transitionTimingFunction: {
  smooth: "cubic-bezier(0.22,1,0.36,1)",
},
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },

      borderRadius: {
        sm: "8px",
        DEFAULT: "16px",
        lg: "24px",
        xl: "32px",
        full: "9999px",
      },

      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,.25)",
        glass: "0 20px 60px rgba(0,0,0,.35)",
        glow: "0 0 35px rgba(0,212,255,.35)",
        gold: "0 0 35px rgba(255,213,79,.30)",
      },

      backgroundImage: {
        hero:
          "linear-gradient(180deg,#050816 0%,#0B1023 100%)",
        primary:
          "linear-gradient(135deg,#00D4FF,#0891B2)",
        gold:
          "linear-gradient(135deg,#FFD54F,#F59E0B)",
      },

      keyframes: {
        float: {
          "0%,100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-12px)",
          },
        },

        fadeUp: {
          from: {
            opacity: "0",
            transform: "translateY(30px)",
          },

          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        pulseGlow: {
          "0%,100%": {
            opacity: ".6",
          },

          "50%": {
            opacity: "1",
          },
        },
      },

      animation: {
        float: "float 5s ease-in-out infinite",
        fadeUp: "fadeUp .8s ease forwards",
        glow: "pulseGlow 2.5s infinite",
      },
    },
  },

  plugins: [],
};
