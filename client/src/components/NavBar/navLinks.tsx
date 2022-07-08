import React from "react";
import '../scss/NavBar.scss';

export function NavLinks(props: any) {
  return (
      <div className="nav-links-container">
         <ul className="links-wrapper">
            <li className="link-item">
                <a className="link" href="#">About us</a>
            </li>
            <li className="link-item">
                <a className="link" href="#">How it works</a>
            </li>
            <li className="link-item">
                <a className="link" href="#">Spells</a>
            </li>
            <li className="link-item">
                <a className="link" href="#">Favorites</a>
            </li>
        </ul>
      </div>
  );
}
