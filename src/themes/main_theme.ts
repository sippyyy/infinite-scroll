import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#465892",
      light:"#546da6",
      contrastText: "#fff",
    },
    secondary: {
      main: "#686E70",
      contrastText: "#fff",
    },
  },
  typography: {
    htmlFontSize: 10,
    h1: {
      fontSize: "2rem",
      "@media (min-width:600px)": {
        fontSize: "2.5rem",
      },
      "@media (min-width:900px)": {
        fontSize: "3rem",
      },
    },
    h2: {
      fontSize: "1.5rem",
      "@media (min-width:600px)": {
        fontSize: "1.8rem",
      },
      "@media (min-width:900px)": {
        fontSize: "2rem",
      },
    },
    h3: {
      fontSize: "1.8rem",
      "@media (min-width:600px)": {
        fontSize: "1.5rem",
      },
      "@media (min-width:900px)": {
        fontSize: "3.5rem",
      },
    },
    h4: {
      fontSize: "2rem",
      "@media (min-width:600px)": {
        fontSize: "1.8rem",
      },
      "@media (min-width:900px)": {
        fontSize: "2.4rem",
      },
    },
    h6: {
      fontSize: "1rem",
      "@media (min-width:600px)": {
        fontSize: "0.7rem",
      },
      "@media (min-width:900px)": {
        fontSize: "1.8rem",
      },
    },
    body1: {
      fontSize: "1rem",
      "@media (min-width:600px)": {
        fontSize: "1.2rem",
      },
      "@media (min-width:900px)": {
        fontSize: "1.4rem",
      },
    },
    body2: {
      fontSize: "1rem",
      "@media (min-width:600px)": {
        fontSize: "1.2rem",
      },
      "@media (min-width:900px)": {
        fontSize: "1.3rem",
      },
    },
  },
});
