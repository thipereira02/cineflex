import React from "react";
import styled from "styled-components";

import Body from "../components/common/Body";

export default function Confirmation() {
	return (
		<>
			<Title>
            Pedido feito<br/>com sucesso!
			</Title>
			<Body>
				<Subtitle>
                    Filme e sessão
				</Subtitle>
				<Content>

				</Content>
				<Subtitle>
                    Ingressos
				</Subtitle>
				<Content >
                    Assento: 
				</Content>
				<Subtitle>
                    Comprador
				</Subtitle>
				<Content>
                    Nome: <br/>CPF: 
				</Content>
			</Body>
			<Button >
            Voltar pra Home
			</Button>
		</>
	);
}

const Title = styled.div`
margin-top: 100px;
display: flex;
justify-content: center;
color: #247A6B;
font-size: 24px;
text-align: center;
font-weight: bold;
`;

const Subtitle = styled.div`
font-weight: bold;
color: #293845;
font-size: 24px;
margin-bottom: 5px;
margin-top: 20px;
`;

const Content = styled.div`
color: #293845;
font-size: 22px;
line-height: 30px;
`;

const Button = styled.button`
color: #FFF;
font-size: 18px;
background: #E8833A;
height: 42px;
width: 60%;
border: none;
border-radius: 3px;
margin: -300px 20% 0 20%;
`;
