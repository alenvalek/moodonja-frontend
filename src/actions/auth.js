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
export const loadUser = async (dispatch) => {
	const token = localStorage.getItem("token");
	if (token) {
		axios.defaults.headers.common["x-auth-token"] = token;
	} else {
		delete axios.defaults.headers.common["x-auth-token"];
	}

	try {
		const res = await axios.get("http://localhost:5000/auth");

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
			const res = await axios.post("http://localhost:5000/users", body, config);

			dispatch({
				type: REGISTER_SUCCESS,
				payload: res.data,
			});
		} catch (error) {
			dispatch({
				type: REGISTER_FAIL,
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
			const res = await axios.post("http://localhost:5000/auth", body, config);

			dispatch({
				type: LOGIN_SUCCESS,
				payload: res.data,
			});
		} catch (error) {
			dispatch({
				type: LOGIN_FAIL,
			});
		}
	};

// odjava korinsika
export const logoutUser = () => async (dispatch) => {
	dispatch({
		type: LOGOUT,
	});
};
