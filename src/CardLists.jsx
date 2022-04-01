import React from "react";
import Cards from "./Cards";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardLists = () => {
	return (
		<Container className="mt-5 mb-3 w-100 ">
			<Row className="gy-5">
				<Col className="col-sm-12 col-md-6 col-lg-4">
					<Link to="/cardone" className="text-decoration-none">
						<Cards
							title="presentation"
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
						/>
					</Link>
				</Col>
				<Col className="col-sm-12 col-md-6 col-lg-4">
					<Link to="/cardtwo" className="text-decoration-none">
						<Cards
							title="Paper Presentation"
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
						/>
					</Link>
				</Col>
				<Col className="col-sm-12 col-md-6 col-lg-4">
					<Link to="/cardthree" className="text-decoration-none">
						<Cards
							title="Sports"
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
						/>
					</Link>
				</Col>
				<Col className="col-sm-12 col-md-6 col-lg-4">
					<Link to="/cardfour" className="text-decoration-none">
						<Cards
							title="Hackathon"
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
						/>
					</Link>
				</Col>
				<Col className="col-sm-12 col-md-6 col-lg-4">
					<Link to="/cardfive" className="text-decoration-none">
						<Cards
							title="Poster Presentation"
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, "
						/>
					</Link>
				</Col>
				<Col className="col-sm-12 col-md-6 col-lg-4">
					<Link to="/cardsix" className="text-decoration-none">
						<Cards
							title="Dancing"
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
						/>
					</Link>
				</Col>
			</Row>
		</Container>
	);
};

export default CardLists;
