import React from "react";
import { Link } from "react-router-dom";
import '../scss/NavBar.scss';

export function NavLinks(props: any) {
  return (
      <div className="nav-links-container">
         <ul className="links-wrapper">
            <li className="link-item">
                <Link className="link" to="/">Home</Link>
            </li>
            <li className="link-item">
                <Link className="link" to="/">Spells</Link>
            </li>
            <li className="link-item">
                <Link className="link" to="#">Favorites</Link>
            </li>
        </ul>
      </div>
  );
}
