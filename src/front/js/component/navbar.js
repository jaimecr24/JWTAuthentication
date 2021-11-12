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
				{store.token == "" ? (
					<>
						<Link to="/login">
							<span className="navbar-brand mb-0 h1">Login</span>
						</Link>
						<Link to="/signup">
							<span className="navbar-brand mb-0 h1">Sign Up</span>
						</Link>
					</>
				) : (
					<>
						<button
							onClick={() => {
								actions.setToken("");
								actions.setActivUser(null);
								actions.setSignedUp(false);
							}}>
							Logout
						</button>
						<Link to="/private">
							<span className="navbar-brand mb-0 h1">Private</span>
						</Link>
					</>
				)}
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Check the Context in action</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
