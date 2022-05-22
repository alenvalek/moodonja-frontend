import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/layout/Landing/Landing";
import Navbar from "./components/layout/Navbar/Navbar";
import Register from "./components/auth/Register/Register";
import Login from "./components/auth/Login/Login";
import Home from "./components/layout/Home/Home";

const App = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<Landing />} />
				<Route path='/register' element={<Register />} />
				<Route path='/login' element={<Login />} />
				<Route path='/home' element={<Home />} />
			</Routes>
		</>
	);
};

export default App;
