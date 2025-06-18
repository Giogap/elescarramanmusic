import { memo } from "react";
import { FooterComponent, NavbarComponent } from "./index";

export const MemoizedNavbar = memo(NavbarComponent);
export const MemoizedFooter = memo(FooterComponent);
