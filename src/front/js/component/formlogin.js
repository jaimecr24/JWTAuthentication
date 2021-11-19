import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { FormSignUp } from "./formsignup";

export const FormLogin = () => {
	const { actions } = useContext(Context);
	const [data, setData] = useState({ email: "", password: "" });

	const handleChange = e => {
		setData({
			...data,
			[e.target.name]: e.target.value
		});
	};

	// Submit form login
	const handleSubmit = e => {
		e.preventDefault();
		actions.login(data.email, data.password);
	};

	return (
		<>
			<form className="w-100" onSubmit={handleSubmit}>
				<div className="form-group mb-3">
					<input
						type="email"
						className="form-control rounded fs-4"
						id="InputEmail"
						name="email"
						placeholder="Email adress"
						onChange={handleChange}
						value={data.email}
					/>
				</div>
				<div className="form-group mb-3">
					<input
						type="password"
						name="password"
						className="form-control rounded fs-4"
						id="InputPassword"
						placeholder="Password"
						onChange={handleChange}
						value={data.password}
					/>
				</div>
				<button className="btn btn-primary rounded w-100 fs-5 fw-bold">Login</button>
			</form>
			<div className="w-75 my-4 bg-danger border-1 border-top border-gray" />
			<button
				className="btn btn-success rounded w-50 fs-5 fw-bold"
				data-bs-toggle="modal"
				data-bs-target="#mymodal" //Param pased to FormSignUp
			>
				Sign Up
			</button>

			<FormSignUp idmodal="mymodal" />
		</>
	);
};
