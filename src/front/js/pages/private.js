import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const Private = () => {
	const { store, actions } = useContext(Context);
	const [myemail, setMyemail] = useState("");

	fetch(process.env.BACKEND_URL + "/protected", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: "Bearer " + store.token
		}
	})
		.then(res => res.json())
		.then(response => {
			setMyemail(response.email);
		})
		.catch(error => console.error("Error:", error));

	return (
		<div className="container mt-5">
			<h1>{myemail}</h1>
		</div>
	);
};
