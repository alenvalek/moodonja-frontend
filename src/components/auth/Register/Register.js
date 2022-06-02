import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import Alert from "@mui/material/Alert";

const Register = () => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirm, setPasswordConfirm] = useState("");
	const [errors, setErrors] = useState([]);

	const clearForm = () => {
		setUsername("");
		setEmail("");
		setPassword("");
		setPasswordConfirm("");
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		errors.length = 0;
		if (!username || !password || !passwordConfirm || !email) {
			clearForm();
			return setErrors([...errors, "Sva polja moraju biti ispunjena"]);
		}
		if (password !== passwordConfirm) {
			clearForm();
			return setErrors([...errors, "Lozinke se ne podudaraju"]);
		}
		const newUser = {
			username,
			email,
			password,
		};

		console.log(newUser);
	};

	return (
		<div className='content__container'>
			<form type='POST' onSubmit={(e) => handleSubmit(e)}>
				<h1 className='heading text-primary'>Registracija</h1>
				<p className='body-text'>
					<i className='fa-solid fa-user-plus' /> Kreirajte račun
				</p>

				<div className='form__group'>
					<input
						type='text'
						placeholder='Korisničko ime'
						name='username'
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
					<small>Ovako će vas vidjeti korisnici koje odlučite dodati</small>
				</div>
				<div className='form__group'>
					<input
						type='email'
						placeholder='E-mail'
						name='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className='form__group'>
					<input
						type='password'
						placeholder='Lozinka'
						name='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div className='form__group'>
					<input
						type='password'
						placeholder='Potvrdi lozinku'
						name='password2'
						value={passwordConfirm}
						onChange={(e) => setPasswordConfirm(e.target.value)}
					/>
				</div>
				<button
					type='submit'
					style={{ marginBottom: "1rem" }}
					className='btn btn-primary'>
					Registriraj se
				</button>
				<p>
					Već imate račun?{" "}
					<Link className=' text-primary' to='/login'>
						Prijava
					</Link>
				</p>
				{errors.length > 0 &&
					errors.map((error, index) => (
						<Alert key={index} variant='filled' severity='error'>
							{error}
						</Alert>
					))}
			</form>
		</div>
	);
};

export default Register;