import styled from 'styled-components'

type WrapperProps = {
	colour?: string
	backgroundColour?: string
}

const WrapperS = styled.div<WrapperProps>`
	margin: 0;
	padding: 0;
	outline: 0;
	box-sizing: border-box;

	color: ${({ colour }) => (colour ? colour : 'hsl(180, 100%, 25%)')};
	background-color: ${({ backgroundColour }) =>
		backgroundColour ? backgroundColour : 'white'};

	display: grid;
	place-content: center;

	@media only screen and (max-width: 600px) {
		width: calc(100% - 2rem);
	}

	@media only screen and (max-width: 960px) {
		width: 93ch - 2rem;
	}

	@media only screen and (min-width: 1200px) {
		width: 190ch - 2rem;
	}

	transition: 146ms all ease-in-out;

	outline: 1px solid wheat;
`

export { WrapperS }
