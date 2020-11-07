import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ImagesProvider } from "./context/ImagesProvider";

ReactDOM.render(
	<React.StrictMode>
		<ImagesProvider>
			<App />
		</ImagesProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
