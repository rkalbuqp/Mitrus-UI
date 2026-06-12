const cssVar = (name: string) => `var(${name})`;

export const fontFamilies = {
  sans: '"Inter", sans-serif',
  display01: cssVar("--font-family-display-01"),
} as const;

export const fontWeights = {
  regular: 400,
  medium: 500,
  semibold: 600,
} as const;

export const fontSizes = {
  "0625": "0.625rem",
  "075": "0.75rem",
  "087": "0.875rem",
  "100": "1rem",
  "125": "1.25rem",
  "150": "1.5rem",
  "200": "2rem",
  "250": "2.5rem",
  "300": "3rem",
  "350": "3.5rem",
  "425": "4.25rem",
  "500": "5rem",
} as const;

export const lineHeights = {
  "100": 1,
  "125": 1.25,
  "150": 1.5,
  "175": 1.75,
  "200": 2,
  "250": 2.5,
  "300": 3,
  "350": 3.5,
  "425": 4.25,
  "500": 5,
} as const;

export const typographyColors = {
  primary: cssVar("--color-fill-primary"),
  secondary: cssVar("--color-fill-secondary"),
  tertiary: cssVar("--color-fill-tertiary"),
  accent: cssVar("--color-fill-accent"),
  success: cssVar("--color-fill-success"),
  warning: cssVar("--color-fill-warning"),
  critical: cssVar("--color-fill-critical"),
  inverse: cssVar("--color-fill-inverse"),
} as const;

export const effects = {
  blur100: "8px",
  luminosityModerate: "rgb(0 0 0 / 0.12)",
} as const;

export const typography = {
  fontFamilies,
  fontWeights,
  fontSizes,
  lineHeights,
  colors: typographyColors,
  effects,
} as const;

export type Typography = typeof typography;
