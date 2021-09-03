import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

import PageTitle from "../components/common/PageTitle";
import Body from "../components/common/Body";
import Footer from "../components/Footer";
import Day from "../components/Day";
import BackButton from "../components/BackButton";

export default function Sessions() {
	const { movieId } = useParams();
	const [sessions, setSessions] = useState(false);

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
			<BackButton page={""}/>
			<PageTitle text={"Selecione o horário"} />
			<Body>
				{sessions!==false && sessions.days.map(s => (
					<Day key={s.id} day={s} movieId={movieId} />
				))}
			</Body>
			<Footer url={sessions.posterURL} title={sessions.title} />
		</>
	);
}
