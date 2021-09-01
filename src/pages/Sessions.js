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
				<Date>
					Quarta
				</Date>
				<SessionHour>
					<Schedules>
								18:00
					</Schedules>
					<Schedules>
								18:00
					</Schedules>
					<Schedules>
								18:00
					</Schedules>
					<Schedules>
								18:00
					</Schedules>
				</SessionHour>
				<Date>
					Quarta
				</Date>
				<SessionHour>
					<Schedules>
								18:00
					</Schedules>
					<Schedules>
								18:00
					</Schedules>
					<Schedules>
								18:00
					</Schedules>
					<Schedules>
								18:00
					</Schedules>
				</SessionHour>
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