import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
	return (
		<div className='content__container'>
			<form>
				<h1 className='heading text-primary'>Prijava</h1>
				<p className='body-text'>
					<i className='fa-solid fa-user' /> Prijavite se u korisnički račun
				</p>
				<div className='form__group'>
					<input type='email' placeholder='E-mail' name='email' />
				</div>
				<div className='form__group'>
					<input type='password' placeholder='Lozinka' name='password' />
				</div>
				<button className='btn btn-primary'>Registriraj me</button>
				<p>
					Još nemate račun?{" "}
					<Link className='text-primary' to='/register'>
						Registrirajte se
					</Link>
				</p>
			</form>
		</div>
	);
};

export default Login;
