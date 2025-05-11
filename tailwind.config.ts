import type { Config } from "tailwindcss"
const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        background: "#050505",
        foreground: "#ffffff",
        primary: {
          DEFAULT: "#00f7ff",
          foreground: "#000000",
        },
        secondary: {
          DEFAULT: "#ff00ff",
          foreground: "#000000",
        },
        accent: {
          DEFAULT: "#ffcc00",
          foreground: "#000000",
        },
        muted: {
          DEFAULT: "#1a1a1a",
          foreground: "#a1a1a1",
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
      },
      boxShadow: {
        glow: "0 0 15px 2px rgba(0, 247, 255, 0.5)",
        "glow-lg": "0 0 25px 5px rgba(0, 247, 255, 0.5)",
        "glow-purple": "0 0 15px 2px rgba(255, 0, 255, 0.5)",
        "glow-yellow": "0 0 15px 2px rgba(255, 204, 0, 0.5)",
      },
      animation: {
        "glow-pulse": "glow-pulse 3s infinite",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 15px 2px rgba(0, 247, 255, 0.2)" },
          "50%": { boxShadow: "0 0 25px 5px rgba(0, 247, 255, 0.7)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
