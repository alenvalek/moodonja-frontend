import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState([]);

	const clearForm = () => {
		setEmail("");
		setPassword("");
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		errors.length = 0;
		if (!password || !email) {
			clearForm();
			return setErrors([...errors, "Sva polja moraju biti ispunjena"]);
		}

		const formData = {
			email,
			password,
		};

		console.log(formData);
	};

	return (
		<div className='content__container'>
			<form onSubmit={(e) => handleSubmit(e)}>
				<h1 className='heading text-primary'>Prijava</h1>
				<p className='body-text'>
					<i className='fa-solid fa-user' /> Prijavite se u korisnički račun
				</p>
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
				<button type='submit' className='btn btn-primary'>
					Prijavi se
				</button>
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
