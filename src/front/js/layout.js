import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import React, { useContext } from "react";
import { Context } from "./store/appContext";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Private } from "./pages/private";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	const { store } = useContext(Context);
	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					{store.activUser ? <Navbar /> : ""}
					<Switch>
						<Route exact path="/">
							{store.activUser ? <Redirect from="/" to="/private" /> : <Home />}
						</Route>
						<Route exact path="/private">
							{store.activUser ? <Private /> : <Redirect from="/private" to="/" />}
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
