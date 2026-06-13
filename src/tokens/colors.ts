const cssVar = (name: string) => `var(${name})`;

const primitiveColors = {
  white: "#ffffff",
  black: "#000000",
  gray: {
    "050": "#f7f7f7",
    "100": "#f2f2f2",
    "200": "#e2e2e3",
    "300": "#c7c8ca",
    "400": "#aeb0b2",
    "500": "#939598",
    "600": "#646568",
    "700": "#4d4e51",
    "800": "#3b3c3e",
    "900": "#252527",
  },
  blue: {
    "050": "#e6f7ff",
    "100": "#cbeefe",
    "200": "#98d8fe",
    "300": "#65bdfe",
    "400": "#05a6ff",
    "500": "#185cfb",
    "600": "#0050d1",
    "700": "#0045b6",
    "800": "#00349a",
    "900": "#002279",
  },
  green: {
    "050": "#edfde7",
    "100": "#d7fbc9",
    "200": "#a8f794",
    "300": "#6ce95d",
    "600": "#009d19",
    "700": "#008321",
    "800": "#006a24",
    "900": "#005725",
  },
  yellow: {
    "050": "#fefbe1",
    "200": "#fff386",
    "300": "#ffe543",
    "400": "#ffd006",
    "500": "#efb905",
    "600": "#ce9e00",
    "700": "#ab7f06",
    "800": "#88630b",
    "900": "#735611",
  },
  red: {
    "050": "#ffede5",
    "200": "#ffb09d",
    "400": "#ff4a48",
    "500": "#ff0c1f",
    "600": "#db082c",
    "700": "#b70634",
    "900": "#7a0237",
  },
  purple: {
    "200": "#e098fe",
    "300": "#c865fc",
    "600": "#e098fe",
    "800": "#37008f",
  },
  teal: {
    "200": "#97fbdb",
    "300": "#62f5d2",
    "800": "#006681",
  },
  orange: {
    "200": "#ffd19b",
    "300": "#ffb169",
    "800": "#931b01",
  },
} as const;

const alphaColors = {
  black: {
    "04": "#000000a3",
    "12": "#0000001f",
    "32": "#00000052",
    "48": "#0000007a",
    "64": "#ffffffa3",
    "80": "#000000cc",
  },
  white: {
    "04": "#ffffff0a",
    "12": "#ffffff1f",
    "32": "#ffffff52",
    "48": "#ffffff7a",
    "64": "#ffffffa3",
    "80": "#ffffffcc",
  },
} as const;

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
        "1": cssVar("--overlay-luminosity-negative-1"),
        "2": cssVar("--overlay-luminosity-negative-2"),
        "3": cssVar("--overlay-luminosity-negative-3"),
      },
      positive: {
        "1": cssVar("--overlay-luminosity-positive-1"),
        "2": cssVar("--overlay-luminosity-positive-2"),
        "3": cssVar("--overlay-luminosity-positive-3"),
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
    default: cssVar("--link-default"),
    hover: cssVar("--link-hover"),
    visited: cssVar("--link-visited"),
    inverse: {
      default: cssVar("--link-inverse-default"),
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
} as const;

const colors = {
  primitive: primitiveColors,
  alpha: alphaColors,
  semantic: semanticColors,
} as const;

type Colors = typeof colors;

export { primitiveColors, alphaColors, semanticColors, colors };
export type { Colors };
