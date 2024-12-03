import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1.5rem",
      },
      transitionDuration: {
        DEFAULT: "0.3s",
      }, // Adjust the duration to 0.3s
    },
  },
  plugins: [],
} satisfies Config;
