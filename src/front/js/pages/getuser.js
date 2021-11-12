import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const GetUser = props => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = () => {
		if (props.newUser && !store.signedUp) {
			// Llamada a la API con POST para registrar al usuario
			fetch(process.env.BACKEND_URL + "/signup", {
				method: "POST", // or 'POST'
				body: JSON.stringify({ email: email, password: password }),
				headers: {
					"Content-Type": "application/json"
				}
			})
				.then(res => res.json())
				.then(response => {
					actions.setSignedUp(true);
					setEmail("");
					setPassword("");
				})
				.catch(error => console.error("Error:", error));
		} else {
			// Llamada a /login para obtener el token
			fetch(process.env.BACKEND_URL + "/login", {
				method: "POST", // or 'POST'
				body: JSON.stringify({ email: email, password: password }),
				headers: {
					"Content-Type": "application/json"
				}
			})
				.then(res => res.json())
				.then(response => {
					actions.setToken(response.token);
					actions.setActivUser(response.user_id);
				})
				.catch(error => console.error("Error:", error));
		}
	};

	return (
		<div className="container mt-5">
			<div className="mb-3">
				<label>Email address</label>
				<input
					type="email"
					className="form-control"
					id="exampleInputEmail1"
					aria-describedby="emailHelp"
					onChange={e => setEmail(e.target.value)}
					value={email}
				/>
			</div>
			<div className="mb-3">
				<label>Password</label>
				<input
					type="password"
					className="form-control"
					id="exampleInputPassword1"
					onChange={e => setPassword(e.target.value)}
					value={password}
				/>
			</div>
			<button type="submit" className="btn btn-primary" onClick={handleSubmit}>
				{store.signedUp ? "Login" : "Sign Up"}
			</button>
		</div>
	);
};

GetUser.propTypes = {
	newUser: PropTypes.bool
};
