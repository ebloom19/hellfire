import React from "react";
import { Link } from "react-router-dom";
import '../scss/NavBar.scss';

export function Accessibility(props: any) {
  return (
    <div className="accessibility-container">
        <Link className="register-button" to="/register">Register</Link>
        <Link className="login-button" to="/login">Login</Link>
    </div>
  );
}
