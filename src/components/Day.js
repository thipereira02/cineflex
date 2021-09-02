/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Day({ day }) {
	return (
		<>
			<Date>
				{day.weekday} - {day.date}
			</Date>
			<SessionHour>
				{day.showtimes.map(d => (
					<Link to={`/seats/${d.id}`} key={d.id}>
						<Schedules >
							{d.name}
						</Schedules>
					</Link>
				))}
			</SessionHour>
		</>
	);
}

const Date = styled.div`
    font-size: 20px;
    color: #293845;
    margin: 22px 0;
`;

const SessionHour = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Schedules = styled.div`
    width: 83px;
    height: 43px;
    background: #E8833A;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 8px;
    margin-bottom: 5px;
    color: #FFF;
    font-size: 18px;
`;