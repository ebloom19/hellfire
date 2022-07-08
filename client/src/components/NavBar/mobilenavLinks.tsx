import React, { useState } from "react";
import { Accessibility } from "./accessibility";
import { MenuToggle } from "./menuToggle";
import '../scss/NavBar.scss';

export function MobileNavLinks(props: any) {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="nav-links-container">
        <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
        {isOpen && (
            <ul className="links-wrapper-mobile">
                <li className="link-item-mobile">
                    <a className="link" href="#">About us</a>
                </li>
                <li className="link-item-mobile">
                    <a className="link" href="#">How it works</a>
                </li>
                <li className="link-item-mobile">
                    <a className="link" href="#">Spells</a>
                </li>
                <li className="link-item-mobile">
                    <a className="link" href="#">Favorites</a>
                </li>
                <div className="marginer"/>
                <Accessibility />
            </ul>
        )}
    </div>
  );
}
