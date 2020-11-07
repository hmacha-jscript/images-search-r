import { Component } from "react";
import "./App.css";
import ImageDetails from "./component/ImageDetails/ImageDetails";
import ImageList from "./component/ImageList/ImageList";
import Search from "./component/Search/Search";
import axios from "./axios/config";

class App extends Component {
	constructor() {
		super();
		this.state = {
			images: [],
			searchTerm: "",
			imageId: "",
			imageSelected: "",
		};
	}

	render() {
		return (
			<div className="App">
				<div className="search-box">
					<Search />
				</div>
				<div className="container">
					<div className="details">
						<ImageDetails />
					</div>
					<div className="list">
						<ImageList />
					</div>
				</div>
			</div>
		);
	}
}
export default App;
