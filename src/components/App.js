import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import GlobalStyle from "./common/GlobalStyle";
import Header from "./common/Header";
import MovieSelection from "../pages/MovieSelection";
import Sessions from "../pages/Sessions";
import Seats from "../pages/Seats";
import Confirmation from "../pages/Confirmation";

export default function App() {
	const [finalOrder, setFinalOrder] = useState([]);
	const [selectedSeats, setSelectedSeats] = useState([]);
	const [buyer, setBuyer] = useState([]);

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
						<Seats 
							finalOrder={finalOrder}
							setFinalOrder={setFinalOrder} 
							selectedSeats={selectedSeats} 
							setSelectedSeats={setSelectedSeats}
							setBuyer={setBuyer} 
						/>
					</Route>
					<Route path="/confirmation" exact>
						<Confirmation 
							finalOrder={finalOrder}
							setFinalOrder={setFinalOrder}
							selectedSeats={selectedSeats}
							setSelectedSeats={setSelectedSeats}
							buyer={buyer}
							setBuyer={setBuyer}
						/>
					</Route>
				</Switch>
			</BrowserRouter>
		</>
	);
}