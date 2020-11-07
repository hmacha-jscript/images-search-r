import { getNodeText } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import axios from "../axios/config";

const ImagesContext = React.createContext();

function ImagesProvider({ children }) {
	const [images, setImages] = useState([]);
	const [imageId, setImageId] = useState("");
	const [searchTerm, setSearchTerm] = useState("");
	const [search, setSearch] = useState("");

	useEffect(() => {
		axios
			.get("/search/photos", {
				params: {
					query: search || "forest",
				},
			})
			.then((response) => {
				setImages(response.data.results);
				setImageId(response.data.results[0].id);
			})
			.catch(() => {
				console.log("no results");
			});
	}, [search]);

	const handleSearchTerm = (term) => {
		setSearchTerm(term);
	};

	const handleSearch = () => {
		setSearch(searchTerm);
	};

	const handleImageId = (id) => {
		setImageId(id);
	};

	return (
		<ImagesContext.Provider
			value={{
				images,
				imageId,
				searchTerm,
				handleSearchTerm,
				handleSearch,
				handleImageId,
			}}
		>
			{children}
		</ImagesContext.Provider>
	);
}

export { ImagesContext, ImagesProvider };
