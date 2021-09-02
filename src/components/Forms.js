/* eslint-disable react/prop-types */
import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

export default function Forms({ selectedSeats }) {
	const [name, setName] = useState("");
	const [cpf, setCpf] = useState("");
	const ids = selectedSeats.map(s => s.id);

	function sendOrder(e) {
		e.preventDefault();

		const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/seats/book-many", {ids, name, cpf});
		request.then(res => {
			console.log(res.data);
		});
		request.catch(() => alert("Ocorreu um erro. Reserva não realizada."));
	}

	return (
		<Container>
			<form onSubmit={sendOrder}>
				<Label>Nome do comprador:</Label>
				<Input required type="text" placeholder="Digite seu nome..." value={name} onChange={e => setName(e.target.value)} />
				<Label>CPF do comprador:</Label>
				<Input required type="text" placeholder="Digite seu CPF..." value={cpf} onChange={e => setCpf(e.target.value)} />
				<Button type="submit">
                    Reservar assento(s)
				</Button>
			</form>
		</Container>
	);
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const Label = styled.h2`
    font-size: 18px;
    line-height: 21px;
    color: #293845;
`;
const Input = styled.input`
    width: 100%;
    height: 51px;
    margin: 0 auto 7px auto;
    border: 1px solid #D5D5D5;
    border-radius: 3px;
    color: #000;
    font-size: 18px;
    padding-left: 10px; 
    ::placeholder{
        color: #AFAFAF;
        font-style: italic;
    }
    
    :focus{
        outline: 0;
        color: #000;
    }
`;

const Button = styled.button`
    color: #FFF;
    font-size: 18px;
    background: #E8833A;
    height: 42px;
    width: 60%;
    border: none;
    border-radius: 3px;
    margin: 50px 20% 0 20%;
`;