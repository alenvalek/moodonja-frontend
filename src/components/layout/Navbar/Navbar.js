import { Avatar, Button } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import "./Navbar.css";
import { logoutUser } from "../../../actions/auth";

const Navbar = ({ isAuth, userLoading, user, logoutUser }) => {
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
						<Link to='/dashboard'>Dashboard</Link>
					</li>
					<li className='nav__list__item'>
						<Link to='/chat'>Chat</Link>
					</li>
					<li className='nav__list__item'>
						<Avatar>{user && user.username[0].toUpperCase()}</Avatar>
					</li>
					<li className='nav__list__item'>
						<Button
							onClick={logoutUser}
							variant='contained'
							color='error'
							endIcon={<LogoutIcon />}>
							Odjava
						</Button>
					</li>
				</ul>
			</nav>
		</>
	);

	const navBlank = (
		<nav>
			<ul className='nav__list'>
				<ul className='nav__list'>
					<li className='nav__list__item'>
						<h3>: ) :</h3>
					</li>
					<li className='nav__list__item'></li>
					<li className='nav__list__item'></li>
					<li className='nav__list__item'></li>
					<li className='nav__list__item'></li>
				</ul>
			</ul>
		</nav>
	);

	return !userLoading ? (isAuth ? loggedInNav : loggedOutNav) : navBlank;
};

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	userLoading: state.auth.loading,
	user: state.auth.user,
});

export default connect(mapStateToProps, { logoutUser })(Navbar);
