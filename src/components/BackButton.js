import React from "react";
import styled from "styled-components";
import { IoArrowUndoCircleSharp } from "react-icons/io5";

export default function BackButton() {
	return (
		<StyledIcon />
	);
}

const StyledIcon = styled(IoArrowUndoCircleSharp)`
  color: #000;
  transform: scale(2);
`;

