import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import PageTitle from "../components/common/PageTitle";

export default function MovieSelection() {
	const [list, setList] = useState([]);

	useEffect(() => {
		const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies");
		request.then(res => {
			setList(res.data);
			console.log(res.data);
		});
		request.catch(() => alert("Ocorreu um erro na obtenção da lista de filmes. Tente novamente mais tarde."));
	},[]);

	return (
		<>
			<PageTitle text={"Selecione o filme"} />
			<MovieList>
				{list.map(l => (
					<Frame key={l.id}>
						
					</Frame>
				))}
			</MovieList>
		</>
	);
}

const MovieList = styled.div`
    margin: 35px auto 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 85%;
`;

const Frame = styled.div`
    width: 145px;
    height: 209px;
    margin-bottom: 11px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
