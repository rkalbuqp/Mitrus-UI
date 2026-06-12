const cssVar = (name) => `var(${name})`;

const primitiveColors = {
  white: cssVar("--color-white"),
  black: cssVar("--color-black"),
  gray: {
    50: cssVar("--color-gray-050"),
    100: cssVar("--color-gray-100"),
    200: cssVar("--color-gray-200"),
    300: cssVar("--color-gray-300"),
    400: cssVar("--color-gray-400"),
    500: cssVar("--color-gray-500"),
    600: cssVar("--color-gray-600"),
    700: cssVar("--color-gray-700"),
    800: cssVar("--color-gray-800"),
    900: cssVar("--color-gray-900"),
  },
  blue: {
    50: cssVar("--color-blue-050"),
    100: cssVar("--color-blue-100"),
    200: cssVar("--color-blue-200"),
    300: cssVar("--color-blue-300"),
    400: cssVar("--color-blue-400"),
    500: cssVar("--color-blue-500"),
    600: cssVar("--color-blue-600"),
    700: cssVar("--color-blue-700"),
    800: cssVar("--color-blue-800"),
    900: cssVar("--color-blue-900"),
  },
  green: {
    50: cssVar("--color-green-050"),
    100: cssVar("--color-green-100"),
    200: cssVar("--color-green-200"),
    300: cssVar("--color-green-300"),
    600: cssVar("--color-green-600"),
    700: cssVar("--color-green-700"),
    800: cssVar("--color-green-800"),
    900: cssVar("--color-green-900"),
  },
  yellow: {
    50: cssVar("--color-yellow-050"),
    200: cssVar("--color-yellow-200"),
    300: cssVar("--color-yellow-300"),
    400: cssVar("--color-yellow-400"),
    500: cssVar("--color-yellow-500"),
    600: cssVar("--color-yellow-600"),
    700: cssVar("--color-yellow-700"),
    800: cssVar("--color-yellow-800"),
    900: cssVar("--color-yellow-900"),
  },
  red: {
    50: cssVar("--color-red-050"),
    200: cssVar("--color-red-200"),
    400: cssVar("--color-red-400"),
    500: cssVar("--color-red-500"),
    600: cssVar("--color-red-600"),
    700: cssVar("--color-red-700"),
    900: cssVar("--color-red-900"),
  },
  purple: {
    200: cssVar("--color-purple-200"),
    300: cssVar("--color-purple-300"),
    600: cssVar("--color-purple-600"),
    800: cssVar("--color-purple-800"),
  },
  teal: {
    200: cssVar("--color-teal-200"),
    300: cssVar("--color-teal-300"),
    800: cssVar("--color-teal-800"),
  },
  orange: {
    200: cssVar("--color-orange-200"),
    300: cssVar("--color-orange-300"),
    800: cssVar("--color-orange-800"),
  },
  alpha: {
    black: {
      4: cssVar("--color-black-a04"),
      12: cssVar("--color-black-a12"),
      32: cssVar("--color-black-a32"),
      48: cssVar("--color-black-a48"),
      64: cssVar("--color-black-a64"),
      80: cssVar("--color-black-a80"),
    },
    white: {
      4: cssVar("--color-white-a04"),
      12: cssVar("--color-white-a12"),
      32: cssVar("--color-white-a32"),
      48: cssVar("--color-white-a48"),
      64: cssVar("--color-white-a64"),
      80: cssVar("--color-white-a80"),
    },
  },
};

const semanticColors = {
  background: {
    primary: cssVar("--background-primary"),
    secondary: cssVar("--background-secondary"),
  },
  surface: {
    neutral: {
      primary: cssVar("--surface-neutral-primary"),
      secondary: cssVar("--surface-neutral-secondary"),
    },
    accent: cssVar("--surface-accent"),
    success: cssVar("--surface-success"),
    warning: cssVar("--surface-warning"),
    critical: cssVar("--surface-critical"),
    inverse: cssVar("--surface-inverse"),
  },
  fill: {
    neutral: {
      default: cssVar("--fill-neutral-default"),
      hover: cssVar("--fill-neutral-hover"),
      selected: cssVar("--fill-neutral-selected"),
    },
    accent: {
      primary: {
        default: cssVar("--fill-accent-primary-default"),
        hover: cssVar("--fill-accent-primary-hover"),
        selected: cssVar("--fill-accent-primary-selected"),
      },
      secondary: {
        default: cssVar("--fill-accent-secondary-default"),
        hover: cssVar("--fill-accent-secondary-hover"),
        selected: cssVar("--fill-accent-secondary-selected"),
      },
    },
    success: {
      default: cssVar("--fill-success-default"),
      hover: cssVar("--fill-success-hover"),
      selected: cssVar("--fill-success-selected"),
    },
    warning: {
      default: cssVar("--fill-warning-default"),
      hover: cssVar("--fill-warning-hover"),
      selected: cssVar("--fill-warning-selected"),
    },
    critical: {
      default: cssVar("--fill-critical-default"),
      hover: cssVar("--fill-critical-hover"),
      selected: cssVar("--fill-critical-selected"),
    },
    decorative: {
      "01": cssVar("--fill-decorative-01"),
      "02": cssVar("--fill-decorative-02"),
      "03": cssVar("--fill-decorative-03"),
      "04": cssVar("--fill-decorative-04"),
      "05": cssVar("--fill-decorative-05"),
    },
    inverse: {
      default: cssVar("--fill-inverse-default"),
      hover: cssVar("--fill-inverse-hover"),
      selected: cssVar("--fill-inverse-selected"),
    },
    disabled: cssVar("--fill-disabled"),
  },
  overlay: {
    backdrop: cssVar("--overlay-backdrop"),
    image: {
      black: cssVar("--overlay-image-black"),
      white: cssVar("--overlay-image-white"),
    },
    luminosity: {
      negative: {
        1: cssVar("--overlay-luminosity-negative-1"),
        2: cssVar("--overlay-luminosity-negative-2"),
        3: cssVar("--overlay-luminosity-negative-3"),
      },
      positive: {
        1: cssVar("--overlay-luminosity-positive-1"),
        2: cssVar("--overlay-luminosity-positive-2"),
        3: cssVar("--overlay-luminosity-positive-3"),
      },
    },
  },
  content: {
    neutral: {
      primary: cssVar("--content-neutral-primary"),
      secondary: cssVar("--content-neutral-secondary"),
      tertiary: cssVar("--content-neutral-tertiary"),
    },
    accent: cssVar("--content-accent"),
    success: cssVar("--content-success"),
    warning: cssVar("--content-warning"),
    critical: cssVar("--content-critical"),
    decorative: {
      "01": cssVar("--content-decorative-01"),
      "02": cssVar("--content-decorative-02"),
      "03": cssVar("--content-decorative-03"),
      "04": cssVar("--content-decorative-04"),
      "05": cssVar("--content-decorative-05"),
    },
    inverse: cssVar("--content-inverse"),
    disabled: cssVar("--content-disabled"),
  },
  link: {
    DEFAULT: cssVar("--link-default"),
    hover: cssVar("--link-hover"),
    visited: cssVar("--link-visited"),
    inverse: {
      DEFAULT: cssVar("--link-inverse-default"),
      hover: cssVar("--link-inverse-hover"),
      visited: cssVar("--link-inverse-visited"),
    },
  },
  border: {
    neutral: {
      default: cssVar("--border-neutral-default"),
      hover: cssVar("--border-neutral-hover"),
      selected: cssVar("--border-neutral-selected"),
    },
    accent: {
      default: cssVar("--border-accent-default"),
      hover: cssVar("--border-accent-hover"),
      selected: cssVar("--border-accent-selected"),
    },
    success: cssVar("--border-success"),
    warning: cssVar("--border-warning"),
    critical: cssVar("--border-critical"),
    focus: {
      default: cssVar("--border-focus-default"),
      inverse: cssVar("--border-focus-inverse"),
    },
    inverse: {
      default: cssVar("--border-inverse-default"),
      hover: cssVar("--border-inverse-hover"),
      selected: cssVar("--border-inverse-selected"),
    },
  },
};

const fontSize = {
  "0625": cssVar("--font-size-0625"),
  "075": cssVar("--font-size-075"),
  "087": cssVar("--font-size-087"),
  "100": cssVar("--font-size-100"),
  "125": cssVar("--font-size-125"),
  "150": cssVar("--font-size-150"),
  "200": cssVar("--font-size-200"),
  "250": cssVar("--font-size-250"),
  "300": cssVar("--font-size-300"),
  "350": cssVar("--font-size-350"),
  "425": cssVar("--font-size-425"),
  "500": cssVar("--font-size-500"),
};

const lineHeight = {
  100: cssVar("--font-line-height-100"),
  125: cssVar("--font-line-height-125"),
  150: cssVar("--font-line-height-150"),
  175: cssVar("--font-line-height-175"),
  200: cssVar("--font-line-height-200"),
  250: cssVar("--font-line-height-250"),
  300: cssVar("--font-line-height-300"),
  350: cssVar("--font-line-height-350"),
  425: cssVar("--font-line-height-425"),
  500: cssVar("--font-line-height-500"),
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./.storybook/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        ...primitiveColors,
        ...semanticColors,
      },
      fontFamily: {
        sans: [cssVar("--font-family-sans")],
        display: [cssVar("--font-family-display-01")],
      },
      fontWeight: {
        regular: cssVar("--font-weight-regular"),
        medium: cssVar("--font-weight-medium"),
        semibold: cssVar("--font-weight-semibold"),
      },
      fontSize,
      lineHeight,
      blur: {
        100: cssVar("--blur-100"),
      },
      boxShadow: {
        moderate: `0 4px ${cssVar("--blur-100")} 0 ${cssVar("--color-luminosity-moderate")}`,
      },
      textColor: {
        fill: {
          primary: cssVar("--color-fill-primary"),
          secondary: cssVar("--color-fill-secondary"),
          tertiary: cssVar("--color-fill-tertiary"),
          accent: cssVar("--color-fill-accent"),
          success: cssVar("--color-fill-success"),
          warning: cssVar("--color-fill-warning"),
          critical: cssVar("--color-fill-critical"),
          inverse: cssVar("--color-fill-inverse"),
        },
      },
    },
  },
  plugins: [],
};
