import "../../styling/scss/NavBar.scss";

import React from "react";
import { Link } from "react-router-dom";

export function NavigationLinks() {
	return (
		<div className="nav-links-container">
			<ul className="links-wrapper">
				<li className="link-item">
					<Link className="link" to="/">
						Home
					</Link>
				</li>
				<li className="link-item">
					<Link className="link" to="/">
						Spells
					</Link>
				</li>
			</ul>
		</div>
	);
}
