import { createTheme } from "@mui/material/styles";
export const theme = createTheme({
  palette: {
    mode: "light",
    primary:   { main: "#111111" },
    secondary: { main: "#FFFFFF" },
    background:{ default: "#FFFFFF", paper: "#F7F6F3" },
    text:      { primary: "#111111", secondary: "#888888" },
  },
  typography: {
    fontFamily: "'DM Serif Display', 'DM Sans', serif",
    h1: { fontFamily: "'DM Serif Display', serif", fontWeight: 400, letterSpacing: "-0.03em" },
    h2: { fontFamily: "'DM Serif Display', serif", fontWeight: 400, letterSpacing: "-0.02em" },
    h3: { fontFamily: "'DM Serif Display', serif", fontWeight: 400 },
    body1: { fontFamily: "'DM Sans', sans-serif", fontWeight: 300 },
    body2: { fontFamily: "'DM Sans', sans-serif", fontWeight: 300 },
    button: { fontFamily: "'DM Sans', sans-serif", fontWeight: 400, textTransform: "none", letterSpacing: "0.02em" },
  },
  shape: { borderRadius: 2 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 0, padding: "10px 28px", fontSize: "0.85rem" },
        outlined: {
          borderColor: "#111111", color: "#111111",
          "&:hover": { backgroundColor: "#111111", color: "#FFFFFF", borderColor: "#111111" },
        },
        contained: {
          backgroundColor: "#111111", color: "#FFFFFF", boxShadow: "none",
          "&:hover": { backgroundColor: "#333333", boxShadow: "none" },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 0, fontFamily: "'DM Sans', sans-serif",
          fontWeight: 300, fontSize: "0.75rem", letterSpacing: "0.08em",
          border: "0.5px solid #DDDDDD", backgroundColor: "transparent",
        },
      },
    },
    MuiDivider: {
      styleOverrides: { root: { borderColor: "#ECECEC" } },
    },
  },
});