import styled from "styled-components"

export const Button = styled.button`
	background: transparent;
  border-radius: 3px;
  border: 2px solid #BF4F74;
  color: #BF4F74;
  margin: 0 1em;
	width: 200px;
	height: 50px;
  padding: 0.25em 1em;
	font-size: 1.5rem;

	&:hover {
		background: #BF4F74;
		color: white;
	}

	&:focus {
		outline: none;
	}

	&:active {
		transform: scale(0.95);
	}

	&:disabled {
		background: #ccc;
		color: #666;
		border: 2px solid #ccc;
	}

	&:disabled:hover {
		background: #ccc;
		color: #666;
		border: 2px solid #ccc;
	}
`