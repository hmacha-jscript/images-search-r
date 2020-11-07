import React, { useContext } from "react";
import "./image-details.css";
import { ImagesContext } from "../../context/ImagesProvider";

export default function ImageDetails() {
	const { images, imageId } = useContext(ImagesContext);
	let imageSelected = images.find((img) => img.id === imageId);
	let { urls, alt_description } = imageSelected ? imageSelected : {};
	return (
		<>
			<div className="item">
				<img
					src={urls ? urls.regular : ""}
					alt={alt_description}
					className="regular-img"
				/>
			</div>
			<div className="item-details">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta fugit
				ut eligendi neque, nihil hic quod, quidem nesciunt harum sint
				voluptatibus iste. Quibusdam saepe quisquam ea, quidem in perspiciatis
				illum velit fuga atque optio nesciunt natus quis modi harum aut.
			</div>
		</>
	);
}
