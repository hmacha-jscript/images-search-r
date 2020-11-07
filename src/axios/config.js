import axios from "axios";

export default axios.create({
	baseURL: "https://api.unsplash.com/",
	params: {
		per_page: 5,
	},
	headers: {
		"Accept-Version": "v1",
		Authorization: "Client-ID tW-yMFEuAkqHzUI01j9jOoYNjkFDxeL1pGLwmXL3OaI",
	},
});
