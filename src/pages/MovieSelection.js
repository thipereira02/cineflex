import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import PageTitle from "../components/common/PageTitle";
import { Link } from "react-router-dom";

export default function MovieSelection() {
	const [list, setList] = useState([]);

	useEffect(() => {
		const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies");
		request.then(res => {
			setList(res.data);
		});
		request.catch(() => alert("Ocorreu um erro na obtenção da lista de filmes. Tente novamente mais tarde."));
	},[]);

	return (
		<>
			<Space />
			<PageTitle text={"Selecione o filme"} />
			<MovieList>
				{list.map(l => (
					<Frame key={l.id}>
						<Link to={`/sessions/${l.id}`}>
							<img src={l.posterURL} alt={l.title} />
						</Link>
					</Frame>
				))}
			</MovieList>
		</>
	);
}

const Space = styled.div`
	margin-top: 100px;
`;

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

    img{
        width: 129px;
        height: 193px;
    }
`;
