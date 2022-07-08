import React from "react";
// import { useMediaQuery } from "react-responsive";
// import { Logo } from "../logo";
import { Accessibility } from "./accessibility";
import { NavLinks } from "./navLinks";
import { DeviceSize } from "./responsive";
import '../scss/NavBar.scss';
// import { MobileNavLinks } from "./mobileNavLinks";

export function Navbar(props: any) {
  // const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });

  return (
      <div className="navbar-container">
        {/* <LeftSection>
            <Logo />
        </LeftSection> */}
        <div className="middle-section">
            {/* {!isMobile && <NavLinks />} */}
            <NavLinks/>
        </div>
        <div className="right-section">
            <Accessibility/>
            {/* {!isMobile && <Accessibility />} */}
            {/* {isMobile && <MobileNavLinks />} */}
        </div>
      </div>
  );
}
