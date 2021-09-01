import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

import PageTitle from "../components/common/PageTitle";
import Body from "../components/common/Body";
import Footer from "../components/common/Footer";

export default function Sessions() {
	const { movieId } = useParams();
	const [sessions, setSessions] = useState([]);

	useEffect(() => {
		const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies/${movieId}/showtimes`);
		request.then(res => {
			setSessions(res.data);
		});
	},[]);

	return (
		<>
			<PageTitle text={"Selecione o horário"} />
			<Body>
				
			</Body>
			<Footer url={sessions.posterURL} title={sessions.title} />
		</>
	);
}