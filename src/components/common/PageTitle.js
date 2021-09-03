/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";

export default function PageTitle({ text }) {
	return (
		<Title>
			{text}
		</Title>
	);
}

const Title = styled.h1`
    text-align: center;
    font-size: 24px;
    color: #293845;
`;