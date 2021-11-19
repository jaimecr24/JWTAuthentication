import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

export const FormUser = () => {
	const { store, actions } = useContext(Context);
	const [data, setData] = useState({ email: "", password: "", newemail: "", password1: "", password2: "" });

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

	// To active accept button in signup
	let validation = data.newemail !== "" && data.password1 !== "" && data.password1 == data.password2;

	const handleSignUp = e => {
		e.preventDefault();

		actions.addUser(data.newemail, data.password1);
		setData({ ...data, ["newemail"]: "", ["password1"]: "", ["password2"]: "" });
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
				data-bs-target="#mymodal">
				Sign Up
			</button>

			<div
				className="modal fade"
				id="mymodal"
				tabIndex="-1"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h3 className="modal-title" id="exampleModalLabel">
								Sign Up
							</h3>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
						</div>
						<div className="modal-body">
							<form className="w-100" onSubmit={handleSignUp}>
								<div className="form-group mb-3">
									<input
										type="email"
										className="form-control rounded fs-4"
										id="InputNewEmail"
										name="newemail"
										placeholder="Email adress"
										onChange={handleChange}
										value={data.newemail}
									/>
								</div>
								<div className="form-group mb-3">
									<input
										type="password"
										name="password1"
										className="form-control rounded fs-4"
										id="InputPassword1"
										placeholder="New password"
										onChange={handleChange}
										value={data.password1}
									/>
								</div>
								<div className="form-group mb-3">
									<input
										type="password"
										name="password2"
										className="form-control rounded fs-4"
										id="InputPassword2"
										placeholder="Confirm password"
										onChange={handleChange}
										value={data.password2}
									/>
								</div>
								<button
									type="button"
									className={`btn btn-success rounded w-100 fs-5 fw-bold ${
										validation ? "active" : "disabled"
									}`}
									data-bs-dismiss="modal"
									onClick={handleSignUp}>
									Sign Up
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
