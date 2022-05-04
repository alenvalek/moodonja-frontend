import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
	return (
		<>
			<nav>
				<ul class='nav__list'>
					<li class='nav__list__item'>
						<h3>: ) :</h3>
					</li>
					<li class='nav__list__item'>
						<Link to='/'>Početna</Link>
					</li>
					<li class='nav__list__item'>
						<Link to='/'>FAQ</Link>
					</li>
					<li class='nav__list__item'>
						<Link to='/'>Prijava</Link>
					</li>
					<li class='nav__list__item'>
						<Link to='/register'>
							<button class='btn btn-primary'>Kreiraj račun</button>
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Navbar;
