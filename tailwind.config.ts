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
    screens: {
      xs: "410px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px"
    },
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      fontFamily: {
        sans: ["var(--font-inter)"]
      },
      boxShadow: {
        landingPhotoDark: "-3px -3px 30px 0 rgba(71, 85, 105, 0.25), 3px 3px 30px 0 rgba(71, 85, 105, 0.25)"
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0"
          },
          to: {
            height: "var(--radix-accordion-content-height)"
          }
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)"
          },
          to: {
            height: "0"
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out"
      }
    }
  },
  plugins: [TailwindAnimate, tailwind3dTransformPlugin]
} satisfies Config;
