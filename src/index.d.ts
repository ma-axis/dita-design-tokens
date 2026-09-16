export type ColorTokens = {
  white: string
  black: string
  background: string
  surface: string
  surfaceHover: string
  overlay: string
  border: string
  borderStrong: string
  textPrimary: string
  textSecondary: string
  textOnPrimary: string
  textDisabled: string
  primary: string
  primaryHover: string
  primaryActive: string
  primarySoft: string
  primarySoftText: string
  primaryBorder: string
  accent: string
  accentHover: string
  accentSoft: string
  accentSoftText: string
  accentGlow: string
  success: string
  successSoft: string
  successSoftText: string
  warning: string
  warningSoft: string
  warningSoftText: string
  danger: string
  dangerHover: string
  dangerSoft: string
  dangerSoftText: string
}

export const colors: { light: ColorTokens; dark: ColorTokens }

export const space: { 1: number; 2: number; 3: number; 4: number; 5: number; 6: number; 7: number; 8: number; 9: number; 10: number }

export const radii: { 1: number; 2: number; 3: number; round: number }

export const fontSizes: { 1: number; 2: number; 3: number; 4: number; 5: number; 6: number; 7: number; 8: number }

export const fontWeights: { regular: string; medium: string; semibold: string; bold: string }

export const lineHeights: { tight: number; normal: number; relaxed: number }

export const shadows: { sm: string; md: string; lg: string }

export const zIndices: { header: number; overlay: number; modal: number; toast: number }

export const fontFamily: string
