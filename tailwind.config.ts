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
        primary: {
          DEFAULT: "#087A58",
          strong: "#066748",
          ink: "#065F43",
          soft: "#EEFAF5",
          "soft-2": "#DCF3EA",
          border: "#B9E6D6",
          bright: "#34D399",
        },
        "on-primary": "#FFFFFF",
        secondary: {
          DEFAULT: "#0D1117",
        },
        "on-secondary": "#FFFFFF",
        neutral: "#FFFFFF",
        surface: {
          DEFAULT: "#FFFFFF",
          2: "#FBFCFD",
          muted: "#F7F8FA",
          sunken: "#F2F4F7",
        },
        "on-surface": {
          DEFAULT: "#363C47",
          strong: "#0D1117",
          variant: "#5B6472",
          muted: "#697382",
        },
        outline: {
          DEFAULT: "#E7EAEF",
          strong: "#D6DBE3",
        },
        error: {
          DEFAULT: "#D61F26",
          on: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      borderRadius: {
        sm: "12px",
        md: "18px",
        lg: "26px",
        full: "9999px",
      },
      boxShadow: {
        card: "0 1px 3px rgba(13,17,23,.05), 0 6px 16px -10px rgba(13,17,23,.14)",
        raised: "0 2px 6px rgba(13,17,23,.04), 0 18px 44px -22px rgba(13,17,23,.22)",
        float: "0 4px 10px rgba(13,17,23,.05), 0 34px 70px -30px rgba(13,17,23,.28)",
        input: "0 1px 2px rgba(13,17,23,.04)",
      },
      maxWidth: {
        shell: "1180px",
        "shell-narrow": "880px",
      },
      letterSpacing: {
        headline: "-0.035em",
        mono: "0.16em",
      },
      lineHeight: {
        headline: "1.06",
        body: "1.72",
      },
    },
  },
  plugins: [],
};

export default config;
