import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				{store.token !== "" ? (
					<button
						onClick={() => {
							actions.setToken("");
							actions.setActivUser(null);
						}}>
						Logout
					</button>
				) : (
					""
				)}
			</div>
		</nav>
	);
};
