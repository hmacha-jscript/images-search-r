import React, { useContext } from "react";
import "./search-box.css";
import { ImagesContext } from "../../context/ImagesProvider";

export default function Search() {
	const { searchTerm, handleSearch, handleSearchTerm } = useContext(
		ImagesContext
	);

	// const handleChange = (e) => {
	// 	handleTerm(e.target.value);
	// };

	const handleSubmit = (e) => {
		e.preventDefault();
		handleSearch();
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Enter search term here...."
				className="search-term"
				value={searchTerm}
				onChange={(e) => handleSearchTerm(e.target.value)}
			/>
			<button className="search-btn">Search</button>
		</form>
	);
}
