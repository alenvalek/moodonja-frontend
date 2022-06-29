/* eslint-disable */

import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	AUTH_FAIL,
	LOAD_USER,
	LOGOUT,
	LOGIN_SUCCESS,
} from "../actions/types";

const initialState = {
	token: localStorage.getItem("token"),
	isAuth: null,
	loading: true,
	user: null,
};

export default function (state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case LOAD_USER:
			return {
				...state,
				isAuth: true,
				loading: false,
				user: payload,
			};
		case REGISTER_SUCCESS:
		case LOGIN_SUCCESS:
			localStorage.setItem("token", payload.token);
			return {
				...state,
				...payload,
				isAuth: true,
				loading: false,
			};
		case REGISTER_FAIL:
		case AUTH_FAIL:
		case LOGOUT:
			localStorage.removeItem("token");
			return {
				...state,
				token: null,
				isAuth: false,
				loading: false,
			};
		default:
			return state;
	}
}
