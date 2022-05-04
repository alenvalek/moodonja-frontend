import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/layout/Landing/Landing";
import Navbar from "./components/layout/Navbar/Navbar";
import Register from "./components/auth/Register/Register";

const App = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<Landing />} />
				<Route path='/register' element={<Register />} />
			</Routes>
		</>
	);
};

export default App;
