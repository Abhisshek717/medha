import React from "react";
import { Container } from "react-bootstrap";
const CardOne = () => {
	return (
		<Container className="mt-5">
			<div className="header w-100">
				<h1>Presentation</h1>
			</div>
			<div className="para w-100">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit
					esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
					occaecat cupidatat non proident, sunt in culpa qui officia
					deserunt mollit anim id est laborum.
				</p>
			</div>
			<div className="link w-100">
				<a href="#">Register Here</a>
			</div>
		</Container>
	);
};

export default CardOne;
