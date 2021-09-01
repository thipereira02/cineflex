import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import GlobalStyle from "./GlobalStyle";
import MovieSelection from "../pages/MovieSelection";

export default function App() {
	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				<Switch>
					<Route path="/" exact>
						<MovieSelection />
					</Route>
				</Switch>
			</BrowserRouter>
		</>
	);
}