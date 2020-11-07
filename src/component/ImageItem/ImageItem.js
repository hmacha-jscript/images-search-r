import React, { useContext } from "react";
import "./image-item.css";
import { ImagesContext } from "../../context/ImagesProvider";

export default function ImageItem({ img }) {
	const { handleImageId } = useContext(ImagesContext);

	let {
		urls: { thumb, alt_description },
	} = img;
	return (
		<>
			<img
				src={thumb}
				alt={alt_description}
				onClick={() => handleImageId(img.id)}
			/>
		</>
	);
}
