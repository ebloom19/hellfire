import React, { useState, useEffect } from "react";
import { Accessibility } from "./accessibility";
import { MenuToggle } from "./menuToggle";
import { Link } from "react-router-dom";
import '../scss/NavBar.scss';

export function MobileNavLinks(props: any) {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if(isOpen) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "";
    }
  }, [isOpen])

  return (
    <div className="nav-links-container">
        <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
        {isOpen && (
            <ul className="links-wrapper-mobile">
                <li className="link-item-mobile">
                    <Link className="link" to="/"onClick={() => setOpen(false)}>Home</Link>
                </li>
                <li className="link-item-mobile">
                    <Link className="link" to="/" onClick={() => setOpen(false)}>Spells</Link>
                </li>
                {/* <div className="marginer"/> */}
                <div className="accessibility-container">
                    <Link className="register-button" to="/favorites" onClick={() => setOpen(false)}>Favorites</Link>
                </div>
            </ul>
        )}
    </div>
  );
}
