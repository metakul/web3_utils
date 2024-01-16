import { createContext, useState, useMemo } from "react";
import { createTheme } from '@mui/material/styles';


// color design tokens export
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        grey: {
          100: "#e0e0e0",
          200: "#c2c2c2",
          300: "#a3a3a3",
          400: "#858585",
          500: "#666666",
          600: "#525252",
          700: "#3d3d3d",
          800: "#292929",
          900: "#141414",
        },
        
        primary: {
          100: "#f0fff0", // a very light shade of green
          200: "#00ff00", // lime green
          300: "#00e600", // a slightly darker shade of green
          400: "#009900", // forest green
          500: "#008000", // green
          600: "#006400", // dark green
          700: "#004d00", // a deeper shade of green
          800: "#003300", // a very deep shade of green
          900: "#001a00"  // an extremely deep shade of green
        },

        secondary: {
          100: "#d6cceb",
          200: "#ad99d6",
          300: "#8566c2",
          400: "#5c33ad",
          500: "#330099",
          600: "#29007a",
          700: "#1f005c",
          800: "#14003d",
          900: "#0a001f",
        },
        greenAccent: {
          100: "#ccffcc",
          200: "#99ff99",
          300: "#66ff66",
          400: "#33ff33",
          500: "#00ff00",
          600: "#00cc00",
          700: "#009900",
          800: "#006600",
          900: "#003300"
      },
        redAccent: {
          100: "#f8dcdb",
          200: "#f1b9b7",
          300: "#e99592",
          400: "#e2726e",
          500: "#FF0000",
          600: "#af3f3b",
          700: "#832f2c",
          800: "#58201e",
          900: "#2c100f",
        },
        blueAccent: {
          100: "#e1e2fe",
          200: "#c3c6fd",
          300: "#a4a9fc",
          400: "#868dfb",
          500: "#6870fa",
          600: "#535ac8",
          700: "#3e4396",
          800: "#2a2d64",
          900: "#151632",
        },
      }
    : {
        grey: {
          100: "#141414",
          200: "#292929",
          300: "#3d3d3d",
          400: "#525252",
          500: "#666666",
          600: "#858585",
          700: "#a3a3a3",
          800: "#c2c2c2",
          900: "#e0e0e0",
        },
     
        primary: {
          100: "#001a00", // an extremely deep shade of green
          200: "#003300", // a very deep shade of green
          300: "#004d00", // a deeper shade of green
          400: "#006400", // dark green
          500: "#008000", // green
          600: "#009900", // forest green
          700: "#00e600", // a slightly darker shade of green
          800: "#00ff00", // lime green
          900: "#f0fff0", // a very light shade of green
        },
          greenAccent: {
    100: "#003300",
    200: "#006600",
    300: "#009900",
    400: "#00cc00",
    500: "#00ff00",
    600: "#33ff33",
    700: "#66ff66",
    800: "#99ff99",
    900: "#ccffcc",
},
        secondary: {
            100: "#0a001f",
            200: "#14003d",
            300: "#1f005c",
            400: "#29007a",
            500: "#330099",
            600: "#5c33ad",
            700: "#8566c2",
            800: "#ad99d6",
            900: "#d6cceb",
        },
        redAccent: {
          100: "#2c100f",
          200: "#58201e",
          300: "#832f2c",
          400: "#af3f3b",
          500: "#FF0000",
          600: "#e2726e",
          700: "#e99592",
          800: "#f1b9b7",
          900: "#f8dcdb",
        },
        blueAccent: {
          100: "#151632",
          200: "#2a2d64",
          300: "#3e4396",
          400: "#535ac8",
          500: "#6870fa",
          600: "#868dfb",
          700: "#a4a9fc",
          800: "#c3c6fd",
          900: "#e1e2fe",
        },
      }),
});



// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              main: colors.primary[500],
              dark: colors.primary[800],
              light: colors.primary[100],
            },
            secondary: {
              main: colors.secondary[500],
              dark: colors.secondary[800],
              light: colors.secondary[100],
            },
            neutral: {
              dark: colors.grey[900],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.primary[900],
            },
            colors:{
              colors:colors
            }
          }
        : {
            // palette values for light mode
            primary: {
              main: colors.primary[500],
              dark: colors.primary[900],
              light: colors.primary[100],
            },
            secondary: {
              main: colors.secondary[500],
              dark: colors.secondary[900],
              light: colors.secondary[100],
            },
            neutral: {
              dark: colors.grey[900],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: "#ffffff",
            },
            colors:{
              colors:colors
            }
          }),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
    colors
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};


