import styled from "styled-components";

export const HeaderOne = styled.h1`
	font-size: 2.5rem;
	color: #333;

	@media (max-width: 768px) {
		font-size: 2rem;
	}

	&:hover {
		color: #BF4F74;
		transform: scale(1.05);
		transition: all 0.2s ease-in-out;
	}

	&:focus {
		outline: none;
	}
`;