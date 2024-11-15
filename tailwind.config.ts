import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      height: {
        header: "var(--header-height)",
        banner: "var(--banner-height)",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#fff",
            },
            background: { 400: "#606060", 500: "#3d3c3c" },
            content1: { "100": "#8f8f8f" },
          },
        },
        dark: {},
      },
    }),
  ],
} satisfies Config;
