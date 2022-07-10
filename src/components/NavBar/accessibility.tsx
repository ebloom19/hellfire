import React from "react";
import { Link } from "react-router-dom";
import '../scss/NavBar.scss';

export function Accessibility(props: any) {
  return (
    <div className="accessibility-container">
        <Link className="register-button" to="/favorites">Favorites</Link>
    </div>
  );
}
