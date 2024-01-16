
import { styled } from "@mui/material/styles";

export const StyledRoot = styled("div")({
    display: "flex",
    minHeight: "100%",
    overflow: "hidden",
  });
  
export const Main = styled("div")(({ theme,APP_BAR_MOBILE }) => ({
    flexGrow: 1,
    overflow: "auto",
    minHeight: "100%",
    paddingTop: "18vh",
    [theme.breakpoints.up("lg")]: {
    },
  }));