import "../../styling/scss/NavBar.scss";

import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

import { breakPoints } from "../../styling/break-points";
import { MobileNavigationBar, NavigationLinks } from "../";

export const NavigationBar = () => {
	const isMobile = useMediaQuery({ maxWidth: breakPoints.mobile });

	return (
		<div className="navbar-container">
			<Link style={{ display: "flex", marginLeft: "20px" }} to="/">
				<img src="/assets/hellfire_club.webp" alt="Hellfire Club" style={{ width: "120px" }} />
				<img src="/assets/face.webp" alt="Hellfire Devil Face" style={{ width: "90px" }} />
			</Link>
			<div className="middle-section">{!isMobile && <NavigationLinks />}</div>
			<div className="right-section">
				{!isMobile && (
					<div className="accessibility-container">
						<Link className="register-button" to="/favorites">
							Favorites
						</Link>
					</div>
				)}
				{isMobile && <MobileNavigationBar />}
			</div>
		</div>
	);
};
