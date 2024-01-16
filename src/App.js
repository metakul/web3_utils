import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ColorModeContext, useMode } from "./themes/themes";
import { CssBaseline, ThemeProvider } from "@mui/material";
// routes
import Router from "./routes";

//add react-hot-toast 

export default function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <HelmetProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </HelmetProvider>
    </ThemeProvider>
    </ColorModeContext.Provider>

  );
}
