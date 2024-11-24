import type { Config } from "tailwindcss";
import TailwindAnimate from "tailwindcss-animate";
import plugin from "tailwindcss/plugin";

const tailwind3dTransformPlugin = plugin((pluginAPI) => {
  pluginAPI.addUtilities({
    ".backface-hidden": {
      backfaceVisibility: "hidden"
    },
    ".perspective-1000": {
      perspective: "1000px"
    },
    ".transform-style-3d": {
      transformStyle: "preserve-3d"
    },
    ".rotate-y-180": {
      transform: "rotateY(180deg)"
    }
  });
});

export default {
  darkMode: ["class"],
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1440px",
        xl: "1280px",
        lg: "768px",
        mobile: "410px"
      }
    },
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      fontFamily: {
        sans: ["var(--font-lora)"]
      }
    }
  },
  plugins: [TailwindAnimate, tailwind3dTransformPlugin]
} satisfies Config;
