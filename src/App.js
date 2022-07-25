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
import store from "./store.js";
import { loadUser } from "./actions/auth";

// route helpers
import GuestRoute from "./components/auth/GuestRoute";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import PostDetails from "./components/layout/Posts/PostDetails";
import Dashboard from "./components/layout/Dashboard/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Chat from "./components/layout/Chat/Chat";

const App = () => {
	useEffect(() => {
		store.dispatch(loadUser());
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
					<Route
						path='/post/:id'
						element={
							<ProtectedRoute>
								<PostDetails />
							</ProtectedRoute>
						}
					/>
					<Route
						path='/chat'
						element={
							<ProtectedRoute>
								<Chat />
							</ProtectedRoute>
						}
					/>
					<Route
						path='/dashboard'
						element={
							<ProtectedRoute>
								<Dashboard />
							</ProtectedRoute>
						}
					/>
				</Routes>

				<ToastContainer theme='colored' />
			</>
		</Provider>
	);
};

export default App;
