/* eslint-disable react/prop-types */
import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { IoArrowUndoCircleSharp } from "react-icons/io5";

export default function BackButton({ page }) {
	const history = useHistory();

	function returnToLastPage(){
		history.push(`/${page}`);
	}

	return (
		<StyledIcon onClick={returnToLastPage}/>
	);
}

const StyledIcon = styled(IoArrowUndoCircleSharp)`
  color: #000;
  transform: scale(2);
  margin-top: 85px;
  margin-left: 15px;
`;

