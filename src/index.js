import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import axios from "axios";

<<<<<<< HEAD
axios.defaults.baseURL = "https://moodonja.herokuapp.com/";
=======
axios.defaults.baseURL = "https://moodonja.herokuapp.com";
>>>>>>> 08f7d13ac461ee61733c90d800c5c8d4ca100c30

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Router>
		<App />
	</Router>
);
