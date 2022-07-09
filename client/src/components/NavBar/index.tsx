import React from "react";
// import { useMediaQuery } from "react-responsive";
// import { Logo } from "../logo";
import logo from './hellfire_club.webp';
import face from './face.webp';
import { Accessibility } from "./accessibility";
import { NavLinks } from "./navLinks";
import { DeviceSize } from "./responsive";
import '../scss/NavBar.scss';
// import { MobileNavLinks } from "./mobileNavLinks";

export function Navbar(props: any) {
  // const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });

  return (
      <div className="navbar-container">
        <div style={{display: 'flex', marginLeft: '30px'}}>
          <img src={logo} alt="Hellfire Club" style={{width: '100px'}}/>
          <img src={face} alt="Hellfire Devil Face" style={{width: '70px'}}/>
        </div>
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
