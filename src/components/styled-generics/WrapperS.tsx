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

	width: 95vw;

	transition: 146ms all ease-in-out;
`

export { WrapperS }
