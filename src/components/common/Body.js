/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";

export default function Body( {children} ){
	return (
		<Container>
			{ children }
		</Container>
	);
}

const Container = styled.div`
    width: 85%;
    margin: 35px auto 130px auto;
`;