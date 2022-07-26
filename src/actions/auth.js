import axios from "axios";
import {
	REGISTER_FAIL,
	REGISTER_SUCCESS,
	AUTH_FAIL,
	LOAD_USER,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
} from "./types";

// fetch/auth user from backend
export const loadUser = () => async (dispatch) => {
	const token = localStorage.getItem("token");
	console.log("loading user..");
	if (token) {
		axios.defaults.headers.common["x-auth-token"] = token;
	} else {
		delete axios.defaults.headers.common["x-auth-token"];
	}

	try {
		const res = await axios.get("/auth");
		console.log(res.data);

		dispatch({
			type: LOAD_USER,
			payload: res.data,
		});
	} catch (error) {
		console.log(error);
		dispatch({
			type: AUTH_FAIL,
		});
	}
};

// registracija

export const registerUser =
	({ username, email, password }) =>
	async (dispatch) => {
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		const body = JSON.stringify({ username, email, password });

		try {
			const res = await axios.post("/users", body, config);

			dispatch({
				type: REGISTER_SUCCESS,
				payload: res.data,
			});
			dispatch(loadUser());
		} catch (error) {
			dispatch({
				type: REGISTER_FAIL,
				payload: error.response.data.errors,
			});
			console.log(error);
		}
	};

// prijava korisnika
export const loginUser =
	({ email, password }) =>
	async (dispatch) => {
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		const body = JSON.stringify({ email, password });

		try {
			const res = await axios.post("/auth", body, config);

			dispatch({
				type: LOGIN_SUCCESS,
				payload: res.data,
			});
			dispatch(loadUser());
		} catch (error) {
			dispatch({
				type: LOGIN_FAIL,
				payload: error.response.data.errors,
			});
		}
	};

// odjava korinsika
export const logoutUser = () => async (dispatch) => {
	dispatch({
		type: LOGOUT,
	});
};
