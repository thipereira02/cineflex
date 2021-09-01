import React, { useEffect } from "react";
import axios from "axios";

import PageTitle from "../components/common/PageTitle";
import Body from "../components/common/Body";
import { useParams } from "react-router";

export default function Sessions() {
	const { movieId } = useParams();
	console.log(movieId);

	useEffect(() => {
		const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies/${movieId}/showtimes`);
		request.then(res => {
			console.log(res.data);
		});
	},[]);

	return (
		<>
			<PageTitle text={"Selecione o horário"} />
			<Body>
				
			</Body>
		</>
	);
}