import React from "react";
import "./Home.css";

const Home = () => {
	return (
		<div className='content__container'>
			<h1 className='heading text-primary'>Odaberite opciju:</h1>
			<div className='btn__container'>
				<button className='btn btn-primary'>Nudim Pomoć</button>
				<button className='btn btn-primary'>Trebam Pomoć</button>
			</div>
		</div>
	);
};

export default Home;
