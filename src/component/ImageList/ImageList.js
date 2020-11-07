import React, { useContext } from "react";
import ImageItem from "../ImageItem/ImageItem";
import "./image-list.css";
import { ImagesContext } from "../../context/ImagesProvider";

export default function ImageList() {
	const { images } = useContext(ImagesContext);
	console.log(images);
	return (
		<>
			{images.map((img) => {
				return (
					<div className="list-item" key={img.id}>
						<ImageItem img={img} />
					</div>
				);
			})}
		</>
	);
}
