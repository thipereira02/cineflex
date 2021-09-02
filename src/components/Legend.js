
import React from "react";
import styled from "styled-components";

export default function Legend() {
	return(
		<Container>
			<Label>
				<Seat name="selected"/>
				<p>Selecionado</p>
			</Label>
			<Label>
				<Seat name="available"/>
				<p>Disponível</p>
			</Label>
			<Label>
				<Seat name="unavailable" />
				<p>Indisponível</p>
			</Label>
		</Container>
	);
}

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    width: 323px;
    margin: 30px auto 42px auto;
`; 

const Label = styled.h2`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 13px;
    color: #4E5A65;
`;

const Seat = styled.div`
    width: 26px;
    height: 26px;
    border-radius: 13px;
    background-color: ${props => props.name === "selected" ? "#8DD7CF" : props.name === "available" ? "#C3CFD9" : "#FBE192"};
    border: 1px solid ${props => props.name === "selected" ? "#1AAE9E" : props.name === "available" ? "#7B8B99" : "#F7C52B"}; 
    border-radius: 13px;
    margin-bottom: 8px;
`;