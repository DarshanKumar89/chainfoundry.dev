import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0F1B2D",
          900: "#0A1422",
          800: "#0F1B2D",
          700: "#16243B",
          600: "#1E3050",
        },
        accent: {
          DEFAULT: "#1D9E75",
          hover: "#17855F",
        },
        mist: {
          50: "#F7F8FA",
          100: "#EEF1F5",
          200: "#DDE3EB",
          300: "#C4CDD9",
          400: "#8B96A8",
          500: "#5A6578",
        },
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-instrument-serif)", "ui-serif", "Georgia", "serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      maxWidth: {
        prose: "70ch",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "blink": "blink 1s steps(2) infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
