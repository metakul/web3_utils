import { Outlet } from "react-router-dom";

import Topbar from "../../Components/Topbar";
import { useMediaQuery } from "@mui/material";
import {StyledRoot, Main} from "./style.css"
const APP_BAR = 64;

export default function DashboardLayout() {

  const isNonMobile = useMediaQuery("(min-width: 766px)");


  return (
    <>
      <StyledRoot>
        <Topbar
          isNonMobile={isNonMobile}
        />
        <Main  APP_BAR={APP_BAR} >
          <Outlet />
        </Main>
      </StyledRoot>
    </>
  );
}
