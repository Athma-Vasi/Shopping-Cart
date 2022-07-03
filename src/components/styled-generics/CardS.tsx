import styled from 'styled-components'

type CardProps = {
	colour?: string
	backgroundColour?: string
}

const CardS = styled.div<CardProps>`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;

	// padding-left: 1rem;
	// padding-right: 1rem;

	height: 30rem;

	transition: 146ms all ease-in-out;

	color: ${({ colour }) => (colour ? colour : 'hsl(180, 100%, 25%)')};
	background-color: ${({ backgroundColour }) =>
		backgroundColour ? backgroundColour : 'white'};

	// width: min(40ch, 100% - 2rem);

	width: clamp(15ch, 35ch, 60ch);

	&:hover {
		cursor: pointer;
		box-shadow: 2px 4px 4px hsl(0, 0%, 0%, 0.4), 3px 6px 6px hsl(0, 0%, 0%, 0.3),
			4px 8px 8px hsl(0, 0%, 0%, 0.2), 5px 10px 10px hsl(0, 0%, 0%, 0.1);
		transform: scale(1.0382);
	}

	border: 1px solid ${({ colour }) => (colour ? colour : 'hsl(180, 100%, 25%)')};
	border-radius: 4px;
`

export { CardS }
