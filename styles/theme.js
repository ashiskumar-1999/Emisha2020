import { extendTheme } from "@chakra-ui/core";
import { createBreakpoints } from "@chakra-ui/theme-tools"

const breakpoints = createBreakpoints({
  sm: "20em",
  md: "48em",
  lg: "62em",
  xl: "80em",
})

const overrides = {
  breakpoints,
}

const theme = extendTheme({
  overrides,
  styles: {
    global: (props) => ({
      body: {
        background: "#ffffff"
      }
    })
  },
  font: {
    body: "Inter, sans-serif",
    heading: "Segoe UI, Segoe UI Symbol"
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "28px",
    "4xl": "36px",
    "5xl": "48px",
    "6xl": "64px",
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    bold: 700,
    extrabold: 900
  },
  lineHeight: {
    normal: "normal",
    none: "1",
    shorter: "1.25",
    short: "1.375",
    base: "1.5",
    tall: "1.625",
    taller: "2"
  },
  letterSpacing: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em"
  },
  colors: {
    black: "#000000",
    gray: {
      50: "#181818",
      100: "#736969",
      150: "#151515",
      200: "#999999",
      250: "#202020"
    },
    offwhite: {
      50: "#D2D2D2"
    },
    yellow: {
      50: "#FFCC00",
      100: "#A3F76A"
    },
    green: {
      50: "#A3F76A"
    },
    cyan: {
      50: "#00b8ea",
      100: "#0059aa"
    },
    blue: {
      50: "#0E39D0",
      100: "#3182CE"
    },
    primary: {
      100: "#E5FCF1",
      200: "#27EF96",
      300: "#10DE82",
      400: "#0EBE6F",
      500: "#0CA25F",
      600: "#0A864F",
      700: "#086F42",
      800: "#075C37",
      900: "#064C2E"
    }
  },
  backgroundColor: {
    transparent: "transparent",
    black: {
      50: "#343131"
    },
    white: "#ffffff"
  },
  space: {
    px: "1px",
    0: "0",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    8: "2rem",
    10: "2.5rem",
    12: "3rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    32: "8rem",
    40: "10rem",
    48: "12rem",
    56: "14rem",
    64: "16rem"
  },
  sizes: {
    full: "100%",
    "3xs": "14rem",
    "2xs": "16rem",
    xs: "20rem",
    sm: "24rem",
    md: "28rem",
    lg: "32rem",
    xl: "36rem",
    "2xl": "42rem",
    "3xl": "48rem",
    "4xl": "56rem",
    "5xl": "64rem",
    "6xl": "72rem"
  }
});




export default theme;