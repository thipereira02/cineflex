import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import GlobalStyle from "./common/GlobalStyle";
import Header from "./Header";
import MovieSelection from "../pages/MovieSelection";
import Sessions from "../pages/Sessions";
import Seats from "../pages/Seats";
import Confirmation from "../pages/Confirmation";

export default function App() {
	const finalOrder = [];

	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				<Header />
				<Switch>
					<Route path="/" exact>
						<MovieSelection />
					</Route>
					<Route path="/sessions/:movieId" exact>
						<Sessions />
					</Route>
					<Route path="/seats/:sessionId" exact>
						<Seats finalOrder={finalOrder} />
					</Route>
					<Route path="/confirmation" exact>
						<Confirmation finalOrder={finalOrder} />
					</Route>
				</Switch>
			</BrowserRouter>
		</>
	);
}