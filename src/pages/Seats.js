/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router";
import axios from "axios";

import PageTitle from "../components/common/PageTitle";
import Body from "../components/common/Body";
import Legend from "../components/Legend";
import Forms from "../components/Forms";
import Footer from "../components/Footer";

export default function Seats({ finalOrder, setFinalOrder, selectedSeats, setSelectedSeats }) {
	const { sessionId } = useParams();
	const [session, setSession] = useState(false);

	useEffect(() => {
		const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes/${sessionId}/seats`);
		request.then(res => {
			setSession(res.data);
			setFinalOrder(res.data);
		});
	},[]);

	if (session === false){
		return "Carregando";
	}

	function selectSeat(seat) {
		if (seat.isAvailable===false){
			alert("Este assento está indisponível");
			return; 
		} 

		if (!selectedSeats.includes(seat)) {
			setSelectedSeats([...selectedSeats, seat]);
		} else {
			setSelectedSeats(selectedSeats.filter(s => s!==seat));
		}
	}

	return (
		<>
			<PageTitle text={"Selecione o(s) assento(s)"} />
			<Body>
				<RoomMap>
					{session.seats.map(s => (
						<Seat key={s.id} name={s.isAvailable ? "true" : "false"} select={selectedSeats.includes(s)} onClick={() => selectSeat(s)} >
							{s.name}
						</Seat>
					))}
				</RoomMap>
				<Legend />
				<Forms selectedSeats={selectedSeats} finalOrder={finalOrder} />
			</Body>
			<Footer 
				url={session.movie.posterURL}
				title={session.movie.title}
				day={session.day.weekday}
				hour={session.name}
			/>
		</>
	);
}

const RoomMap = styled.div`
    height: 202px;
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: space-between;
`;

const Seat = styled.div`
    font-size: 11px;
    height: 26px;
    width: 26px;
    margin: 0 1px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.select === true ? "#8DD7CF" : props.name === "true" ? "#C3CFD9" : "#FBE192"};
    border: 1px solid ${props => props.select === true ? "#1AAE9E" : props.name === "true" ? "#7B8B99" : "#F7C52B"};
`;