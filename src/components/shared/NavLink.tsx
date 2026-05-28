import { Link, styled } from "@mui/material";

export const NavLink = styled(Link)({
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "0.82rem",
  fontWeight: 400,
  color: "#111111",
  textDecoration: "none",
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: -2,
    left: 0,
    width: 0,
    height: "1px",
    backgroundColor: "#111111",
    transition: "width 0.25s ease",
  },
  "&:hover::after": { width: "100%" },
});