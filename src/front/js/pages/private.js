import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const Private = () => {
	const { store } = useContext(Context);
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
			<h1>{`Welcome ${myemail}`}</h1>
			<h2>This is your private area</h2>
		</div>
	);
};
