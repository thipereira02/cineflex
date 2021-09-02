import React from "react";
import styled from "styled-components";

import PageTitle from "../components/common/PageTitle";
import Body from "../components/common/Body";
import Legend from "../components/Legend";
import Footer from "../components/Footer";

export default function Seats() {
	const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
		18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
		35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];

	return (
		<>
			<PageTitle text={"Selecione o(s) assento(s)"} />
			<Body>
				<RoomMap>
					{arr.map(a => (
						<Seat key={a}>
							{a}
						</Seat>
					))}
				</RoomMap>
				<Legend />
			</Body>
			<Footer />
		</>
	);
}

const RoomMap = styled.div`
    height: 202px;
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: space-between;
`;

const Seat = styled.div`
    font-size: 11px;
    height: 26px;
    width: 26px;
    margin: 0 1px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #C3CFD9;
    border: 1px solid #808F9D;
`;