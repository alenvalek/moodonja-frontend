import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/layout/Landing/Landing";
import Navbar from "./components/layout/Navbar/Navbar";

const App = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<Landing />} />
			</Routes>
		</>
	);
};

export default App;
