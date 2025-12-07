/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#050509",
        foreground: "#f7f7f8",
        muted: "#a3a3b5",
        soft: "#8b8b96",
        border: "rgba(255,255,255,0.06)",
        accent: "#0ecc74",
        "accent-soft": "rgba(14, 204, 116, 0.16)"
      },
      maxWidth: {
        page: "840px"
      },
      boxShadow: {
        card: "0 18px 60px rgba(0,0,0,0.55)"
      },
      borderRadius: {
        xl2: "18px"
      },
      animation: {
        fadeUp: "fadeUp 0.6s ease-out forwards"
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(12px)" },
          "100%": { opacity: 1, transform: "translateY(0)" }
        }
      },
      fontFamily: {
        geist: ['"Geist"', "system-ui", "-apple-system", "BlinkMacSystemFont", '"SF Pro Text"', "sans-serif"]
      }
    },
  },
  plugins: [],
};
