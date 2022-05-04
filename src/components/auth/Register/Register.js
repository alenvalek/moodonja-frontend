import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
	return (
		<div className='content__container'>
			<form>
				<h1 className='heading text-primary'>Registracija</h1>
				<p className='body-text'>
					<i className='fa-solid fa-user-plus' /> Kreirajte račun
				</p>

				<div className='form__group'>
					<input type='text' placeholder='Korisničko ime' name='username' />
					<small>Ovako će vas vidjeti korisnici koje odlučite dodati</small>
				</div>
				<div className='form__group'>
					<input type='email' placeholder='E-mail' name='email' />
				</div>
				<div className='form__group'>
					<input type='password' placeholder='Lozinka' name='password' />
				</div>
				<div className='form__group'>
					<input
						type='password'
						placeholder='Potvrdi lozinku'
						name='password2'
					/>
				</div>
				<button style={{ marginBottom: "1rem" }} className='btn btn-primary'>
					Registriraj me
				</button>
				<p>
					Već imate račun?{" "}
					<Link className=' text-primary' to='/login'>
						Prijava
					</Link>
				</p>
			</form>
		</div>
	);
};

export default Register;
