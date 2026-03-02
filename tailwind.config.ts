import type { Config } from "tailwindcss";

export default {
  // Forced Light Mode: darkMode set to false ensures system preferences are ignored
  darkMode: false, 
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        "deep-blue": {
          DEFAULT: "hsl(210 100% 20%)",
          50: "hsl(210 100% 97%)",
          100: "hsl(210 100% 94%)",
          200: "hsl(210 100% 86%)",
          300: "hsl(210 100% 74%)",
          400: "hsl(210 100% 58%)",
          500: "hsl(210 100% 45%)",
          600: "hsl(210 100% 35%)",
          700: "hsl(210 100% 28%)",
          800: "hsl(210 100% 23%)",
          900: "hsl(210 100% 20%)",
          950: "hsl(210 100% 12%)",
        },
        cyan: {
          DEFAULT: "hsl(190 90% 50%)",
          50: "hsl(190 90% 97%)",
          100: "hsl(190 90% 92%)",
          200: "hsl(190 90% 82%)",
          300: "hsl(190 90% 68%)",
          400: "hsl(190 90% 55%)",
          500: "hsl(190 90% 50%)",
          600: "hsl(190 90% 42%)",
          700: "hsl(190 90% 35%)",
          800: "hsl(190 90% 28%)",
          900: "hsl(190 90% 22%)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "calc(var(--radius) + 4px)",
        "2xl": "calc(var(--radius) + 8px)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        glow: "var(--shadow-glow)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 40px hsl(190 90% 50% / 0.2)" },
          "50%": { boxShadow: "0 0 80px hsl(190 90% 50% / 0.4)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
        float: "float 6s ease-in-out infinite",
        glow: "glow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;