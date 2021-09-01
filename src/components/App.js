import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import GlobalStyle from "./GlobalStyle";
import Header from "./common/Header";
import MovieSelection from "../pages/MovieSelection";

export default function App() {
	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				<Header />
				<Switch>
					<Route path="/" exact>
						<MovieSelection />
					</Route>
				</Switch>
			</BrowserRouter>
		</>
	);
}