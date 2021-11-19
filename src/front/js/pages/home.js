import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { FormLogin } from "../component/formlogin";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<div className="container my-5" style={{ height: "50vh" }}>
				<div className="row h-100 d-flex align-items-center">
					<div className="col-6 text-primary" style={{ fontSize: "70px" }}>
						Bla Bla Bla
					</div>
					<div className="col-5 h-75 p-3 d-flex flex-column align-items-center justify-content-center shadow rounded">
						<FormLogin />
					</div>
				</div>
			</div>

			<div className="alert alert-info">{store.message || "Loading message from the backend..."}</div>
			<p>
				This boilerplate comes with lots of documentation:{" "}
				<a href="https://github.com/4GeeksAcademy/react-flask-hello/tree/95e0540bd1422249c3004f149825285118594325/docs">
					Read documentation
				</a>
			</p>
		</div>
	);
};
