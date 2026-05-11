import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"]
      },
      colors: {
        ink: {
          950: "#070707",
          900: "#0b0b0c",
          800: "#111113",
          700: "#1a1a1d",
          600: "#26262b",
          500: "#3a3a40"
        },
        ember: {
          50: "#fff7ec",
          100: "#ffecd1",
          200: "#ffd49a",
          300: "#ffb45a",
          400: "#ff9233",
          500: "#ff7a1a",
          600: "#f15a00",
          700: "#c64402",
          800: "#9c360b",
          900: "#7f2f0e"
        },
        cream: "#f6efe3",
        sand: "#d8c6a3"
      },
      backgroundImage: {
        "radial-glow":
          "radial-gradient(circle at 50% 0%, rgba(255,122,26,0.18), transparent 60%)",
        "grain":
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.5 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.35'/></svg>\")"
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" }
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" }
        },
        glow: {
          "0%, 100%": { opacity: "0.45" },
          "50%": { opacity: "0.85" }
        }
      },
      animation: {
        shimmer: "shimmer 6s linear infinite",
        float: "float 7s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
        glow: "glow 6s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
