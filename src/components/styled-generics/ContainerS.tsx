import styled from 'styled-components'

type ContainerProps = {
	colour?: string
	backgroundColour?: string
}

const ContainerS = styled.div<ContainerProps>`
	margin: 0;
	padding: 0;
	outline: 0;
	box-sizing: border-box;

	padding-left: 2rem;
	padding-right: 2rem;
	padding-top: max(5vh, 2rem);
	padding-bottom: max(5vh, 2rem);

	width: 100%;
	height: auto;

	color: ${({ colour }) => (colour ? colour : 'hsl(180, 100%, 25%)')};
	background-color: ${({ backgroundColour }) =>
		backgroundColour ? backgroundColour : 'white'};

	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	align-items: center;
	gap: 2rem;

	transition: 146ms all ease-in-out;

	outline: 1px solid cyan;
`

export { ContainerS }
