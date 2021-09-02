import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import styled from "styled-components";

import PageTitle from "../components/common/PageTitle";
import Body from "../components/common/Body";
import Footer from "../components/Footer";

export default function Sessions() {
	const { movieId } = useParams();
	const [sessions, setSessions] = useState([]);

	const days = [
		{
			id: 24062021,
			weekday: "Quinta-feira",
			date: "24/06/2021",
			showtimes: [
				{
					name: "15:00",
					id: 1
				},
				{
					name: "19:00",
					id: 2
				}
			]
		},
		{
			id: 25062021,
			weekday: "Sexta-feira",
			date: "25/06/2021",
			showtimes: [
				{
					name: "15:00",
					id: 3
				},
				{
					name: "19:00",
					id: 4
				}
			]
		},
		{
			id: 26062021,
			weekday: "Sábado",
			date: "26/06/2021",
			showtimes: [
				{
					name: "15:00",
					id: 5
				},
				{
					name: "19:00",
					id: 6
				}
			]
		},
		{
			id: 27062021,
			weekday: "Domingo",
			date: "27/06/2021",
			showtimes: [
				{
					name: "15:00",
					id: 7
				},
				{
					name: "19:00",
					id: 8
				}
			]
		},
		{
			id: 28062021,
			weekday: "Segunda-feira",
			date: "28/06/2021",
			showtimes: [
				{
					name: "15:00",
					id: 9
				},
				{
					name: "19:00",
					id: 10
				}
			]
		},
		{
			id: 29062021,
			weekday: "Terça-feira",
			date: "29/06/2021",
			showtimes: [
				{
					name: "15:00",
					id: 11
				},
				{
					name: "19:00",
					id: 12
				}
			]
		},
		{
			id: 30062021,
			weekday: "Quarta-feira",
			date: "30/06/2021",
			showtimes: [
				{
					name: "15:00",
					id: 13
				},
				{
					name: "19:00",
					id: 14
				}
			]
		},
		{
			id: 1072021,
			weekday: "Quinta-feira",
			date: "01/07/2021",
			showtimes: [
				{
					name: "15:00",
					id: 15
				},
				{
					name: "19:00",
					id: 16
				}
			]
		}
	];

	useEffect(() => {
		const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies/${movieId}/showtimes`);
		request.then(res => {
			setSessions(res.data);
		});
		request.catch(() => {
			alert("Ocorreu um erro. Tente novamente.");
		});
	},[]);

	return (
		<>
			<PageTitle text={"Selecione o horário"} />
			<Body>
				{days.map(a => (
					<>
						<Date key={a.id}>
							{a.weekday}	- {a.date}
						</Date>
						<SessionHour>
							{a.showtimes.map(s => (
								<Schedules key={s.id}>
									{s.name}
								</Schedules>
							))}
						</SessionHour>
					</>
				))}
			</Body>
			<Footer url={sessions.posterURL} title={sessions.title} />
		</>
	);
}

const Date = styled.div`
    font-size: 20px;
    color: #293845;
    margin: 22px 0;
`;

const SessionHour = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Schedules = styled.div`
    width: 83px;
    height: 43px;
    background: #E8833A;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 8px;
    margin-bottom: 5px;
    color: #FFF;
    font-size: 18px;
`;