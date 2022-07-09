import React from "react";
// import { useMediaQuery } from "react-responsive";
// import { Logo } from "../logo";
import logo from './hellfire_club.webp';
import face from './face.webp';
import { Accessibility } from "./accessibility";
import { Link } from "react-router-dom";
import { NavLinks } from "./navLinks";
import { DeviceSize } from "./responsive";
import '../scss/NavBar.scss';
// import { MobileNavLinks } from "./mobileNavLinks";

export function Navbar(props: any) {
  // const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });

  return (
      <div className="navbar-container">
        <Link style={{display: 'flex'}} to="/">
          <img src={logo} alt="Hellfire Club" style={{width: '120px'}}/>
          <img src={face} alt="Hellfire Devil Face" style={{width: '90px'}}/>
        </Link>
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
