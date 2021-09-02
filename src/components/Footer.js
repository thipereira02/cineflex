/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";

export default function Footer({ url, title, day, hour }) {
	return (
		<Container>
			<Frame>
				<img src={url} alt={title} />
			</Frame>
			<Infos>
				<Text>
					{title}
				</Text>				
				<Text>
					{day} - {hour}
				</Text>	
			</Infos>
		</Container>
	);
}

const Container = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    height: 117px;
    background-color: #DFE6ED;
    border-top: 1px solid #9EADBA;
    display: flex;
    align-items: center;
`;

const Frame = styled.div`
    width: 64px;
    height: 89px;
    background-color: #FFF;
    margin-left: 10px;
    margin-right: 22px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        width: 48px;
        height: 72px;
    }
`;

const Infos = styled.div`
    display: flex;
    flex-direction: column;
`;

const Text = styled.h2`
    color: #293845;
    font-size: 26px;
    line-height: 30px;
    margin-right: 10px;
`;