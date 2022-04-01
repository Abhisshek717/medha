import React from "react";
import { Carousel } from "react-bootstrap";
import Imageone from "./assets/pic1.png";
import Imagetwo from "./assets/pic2.png";
const Carsoules = () => {
	return (
		<Carousel fade>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src={Imageone}
					alt="fourth slide"
				/>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src={Imagetwo}
					alt="fifth slide"
				/>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://giet.ac.in/public/assets/images/onam_thumb.jpg"
					alt="Third slide"
				/>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://giet.ac.in/public/assets/images/medha-thumb.jpg"
					alt="First slide"
				/>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://giet.ac.in/public/assets/images/maitri-thumb.jpg"
					alt="Second slide"
				/>
			</Carousel.Item>
		</Carousel>
	);
};

export default Carsoules;
