import React from "react";
import "./Landing.css";

const Landing = () => {
	return (
		<div className='container'>
			<div className='container__card'>
				<div className='conatiner__card__header'>
					<h1 style={{ color: "white", fontSize: "4rem", fontWeight: "500" }}>
						Moodonja
					</h1>
					<h2
						style={{
							color: "white",
							fontSize: "2rem",
							fontWeight: "300",
							lineHeight: "50px",
						}}>
						Sigurna platforma za podijeliti kako se osjećate ili pružiti pomoć
						nekome kome je potrebna.
					</h2>
				</div>
				<div className='container__card__actions'>
					<button className='btn btn-primary'>Registriraj se</button>
					<button className='btn btn-secondary'>Prijavi se</button>
				</div>
			</div>
		</div>
	);
};

export default Landing;
