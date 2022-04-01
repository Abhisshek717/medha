import React from "react";
import { Card } from "react-bootstrap";
const Cards = ({ title, description }) => {
	return (
		<Card style={{ width: "20rem" }} className="text-dark">
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Text>{description}</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default Cards;
