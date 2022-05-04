import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/layout/Landing/Landing";
import Navbar from "./components/layout/Navbar/Navbar";
import Register from "./components/auth/Register/Register";
import Login from "./components/auth/Login/Login";

const App = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<Landing />} />
				<Route path='/register' element={<Register />} />
				<Route path='/login' element={<Login />} />
			</Routes>
		</>
	);
};

export default App;
