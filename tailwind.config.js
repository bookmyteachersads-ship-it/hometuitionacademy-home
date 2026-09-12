const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: "var(--theme-default-primary)",
        primaryLight: "var(--theme-default-primary-light)",
        primaryLightest: "var(--theme-default-primary-lightest)",
        primaryDark: "var(--theme-default-primary-dark)",
        primaryBaseSelected: "var(--theme-default-primary-base-selected)",
        primaryCharts: "var(--theme-default-primary-charts)",
        blight: "var(--theme-default-blight)",

        // Neutral / Gray Scale
        white: "var(--theme-default-white)",
        black: "var(--theme-default-black)",
        gray: "var(--theme-default-gray)",
        grays: "var(--theme-default-grays)",
        grayLight: "var(--theme-default-gray-light)",
        grayLightest: "var(--theme-default-gray-lightest)",
        grayDark: "var(--theme-default-gray-dark)",
        grayBorder: "var(--theme-default-gray-border)",
        grayDarker: "var(--theme-default-gray-darker)",

        // State Colors
        success: "var(--theme-default-success)",
        successLight: "var(--theme-default-success-light)",
        successDark: "var(--theme-default-success-dark)",
        infoLight: "var(--theme-default-info-light)",
        danger: "var(--theme-default-danger)",
        dangerLight: "var(--theme-default-danger-light)",
        dangerDark: "var(--theme-default-danger-dark)",
        warning: "var(--theme-default-warning)",
        warningLight: "var(--theme-default-warning-light)",
        warningCharts: "var(--theme-default-warning-charts)",
        warningDark: "var(--theme-default-warning-dark)",
        warningDark2: "var(--theme-default-warning-dark-2)",

        // Meteorite Theme Colors
        meteorite: "var(--theme-default-meteorite)",
        meteoriteLight: "var(--theme-default-meteorite-light)",
        meteoriteGray: "var(--theme-default-meteorite-gray)",
        meteoriteDark: "var(--theme-default-meteorite-dark)",
        meteoriteDark2: "var(--theme-default-meteorite-dark-2)",

        // UI-Specific Colors
        dark: "var(--theme-default-dark)",
        whiteBlue: "var(--theme-default-white-blue)",
        primaryTimer: "var(--theme-default-primary-timer)",
        blackTimer: "var(--theme-default-black-timer)",
        periwinkle: "var(--theme-default-periwinkle)",
        generalBorderColor: "var(--theme-default-general-border-color)",
        highlightedCardBg: "var(--theme-default-highlighted-card-bg)",
        highlightedCardText: "var(--theme-default-highlighted-card-text)",
      },

      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        scroll: "scroll 40s linear infinite",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".whitespace-nowrap": {
          whiteSpace: "nowrap",
        },
      });
    }),
  ],
};
