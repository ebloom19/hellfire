import React, { useState, useEffect } from "react";
import { MobileMenu } from "../mobile-menu/mobile-menu";
import { Link } from "react-router-dom";
import '../../styling/scss/NavBar.scss';

export const MobileNavigationBar = () => {
  const [isOpen, setOpen] = useState(false);

  // Stop scroll ability if nav bar is open
  useEffect(() => {
    if(isOpen) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "";
    }
  }, [isOpen])

  return (
    <div className="nav-links-container">
        <MobileMenu isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
        {isOpen && (
            <ul className="links-wrapper-mobile">
                <li className="link-item-mobile">
                    <Link 
                        className="link" 
                        to="/"
                        onClick={() => setOpen(false)}
                    >
                        Home
                    </Link>
                </li>
                <li className="link-item-mobile">
                    <Link 
                        className="link" 
                        to="/" 
                        onClick={() => setOpen(false)}
                    >
                        Spells
                    </Link>
                </li>
                <div className="accessibility-container-mobile">
                    <Link 
                        className="register-button" 
                        to="/favorites" 
                        onClick={() => setOpen(false)}
                    >
                        Favorites
                    </Link>
                </div>
            </ul>
        )}
    </div>
  );
}
