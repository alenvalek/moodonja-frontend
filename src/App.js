import { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/layout/Landing/Landing";
import Navbar from "./components/layout/Navbar/Navbar";
import Register from "./components/auth/Register/Register";
import Login from "./components/auth/Login/Login";
import Home from "./components/layout/Home/Home";

// REDUX state managment
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";

// route helpers
import GuestRoute from "./components/auth/GuestRoute";
import ProtectedRoute from "./components/auth/ProtectedRoute";

const App = () => {
	useEffect(() => {
		store.dispatch(loadUser);
	}, []);

	return (
		<Provider store={store}>
			<>
				<Navbar />

				<Routes>
					<Route
						index
						element={
							<GuestRoute isLanding={true}>
								<Landing />
							</GuestRoute>
						}
					/>

					<Route
						path='/register'
						element={
							<GuestRoute>
								<Register />
							</GuestRoute>
						}
					/>

					<Route
						path='/login'
						element={
							<GuestRoute>
								<Login />
							</GuestRoute>
						}
					/>
					<Route
						path='/home'
						element={
							<ProtectedRoute>
								<Home />
							</ProtectedRoute>
						}
					/>
				</Routes>
			</>
		</Provider>
	);
};

export default App;
