import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
	return (
		<Title>
			<Link to="/">
				<h1>CINEFLEX</h1>
			</Link>
		</Title>
	);
}

const Title = styled.div`
    height: 67px;
    width: auto;
    background-color: #C3CFD9;
    box-shadow: 0px 4px 4px 0 rgba(0, 0, 0, .1);
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 2;

    h1{
        color: #E8833A;
        font-size: 32px;
    }
`;