import { Avatar } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
	const [user, setUser] = useState(false);

	const loggedOutNav = (
		<>
			<nav>
				<ul className='nav__list'>
					<li className='nav__list__item'>
						<h3>: ) :</h3>
					</li>
					<li className='nav__list__item'>
						<Link to='/'>Početna</Link>
					</li>
					<li className='nav__list__item'>
						<Link to='/faq'>FAQ</Link>
					</li>
					<li className='nav__list__item'>
						<Link to='/login'>Prijava</Link>
					</li>
					<li className='nav__list__item'>
						<Link to='/register'>
							<button className='btn btn-primary'>Kreiraj račun</button>
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);

	const loggedInNav = (
		<>
			<nav>
				<ul className='nav__list'>
					<li className='nav__list__item'>
						<h3>: ) :</h3>
					</li>
					<li className='nav__list__item'>
						<Link to='/home'>Početna</Link>
					</li>
					<li className='nav__list__item'>
						<Link to='/'>Dashboard</Link>
					</li>
					<li className='nav__list__item'>
						<Link to='/'>Prijatelji</Link>
					</li>
					<Avatar style={{ marginRight: "1rem" }}>JD</Avatar>
				</ul>
			</nav>
		</>
	);
	return user ? loggedInNav : loggedOutNav;
};

export default Navbar;