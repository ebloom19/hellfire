import "../../styling/scss/NavBar.scss";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { MobileMenu } from "../mobile-menu/mobile-menu";

export const MobileNavigationBar = () => {
	const [isOpen, setOpen] = useState(false);

	// Stop scroll ability if nav bar is open
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
	}, [isOpen]);

	return (
		<div className="nav-links-container">
			<MobileMenu isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
			{isOpen && (
				<ul className="links-wrapper-mobile">
					<li className="link-item-mobile">
						<button onClick={() => setOpen(false)} onKeyDown={() => setOpen(false)}>
							<Link className="link" to="/">
								Home
							</Link>
						</button>
					</li>
					<li className="link-item-mobile">
						<button onClick={() => setOpen(false)} onKeyDown={() => setOpen(false)}>
							<Link className="link" to="/">
								Spells
							</Link>
						</button>
					</li>
					<div className="accessibility-container-mobile">
						<button onClick={() => setOpen(false)} onKeyDown={() => setOpen(false)}>
							<Link className="register-button" to="/favorites">
								Favorites
							</Link>
						</button>
					</div>
				</ul>
			)}
		</div>
	);
};
