import styled from 'styled-components'

type CardProps = {
	themeState: {
		isDefaultMode: boolean
		isDarkMode: boolean

		colours: {
			default?: {
				primary?: string
				textColour?: string
				backgroundColour?: string
			}
			dark?: {
				primary?: string
				textColour?: string
				backgroundColour?: string
			}
		}
		fonts: {
			serif?: string[]
			sansSerif?: string[]
			monospace?: string[]
		}
		fontSizes: {
			small?: string
			medium?: string
			large?: string
			xlarge?: string
		}
	}
}

const CardS = styled.div<CardProps>`
	margin: 0;
	padding: 0;
	outline: 0;
	box-sizing: border-box;

	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;

	padding-left: 1rem;
	padding-right: 1rem;
	padding-top: 1rem;
	padding-bottom: 1rem;

	transition: 146ms all ease-in-out;

	color: ${({ themeState: { isDefaultMode, colours } }) =>
		isDefaultMode ? colours?.default?.textColour : colours?.dark?.textColour};
	background-color: ${({ themeState: { isDefaultMode, colours } }) =>
		isDefaultMode ? colours?.default?.backgroundColour : colours?.dark?.backgroundColour};

	// width: min(40ch, 100% - 2rem);
	// width: clamp(150px, 30vw, 300px);
	width: 170px;
	height: 35rem;

	&:hover {
		cursor: pointer;
		box-shadow: 2px 4px 4px hsl(0, 0%, 0%, 0.4), 3px 6px 6px hsl(0, 0%, 0%, 0.3),
			4px 8px 8px hsl(0, 0%, 0%, 0.2), 5px 10px 10px hsl(0, 0%, 0%, 0.1);
		transform: scale(1.0382);
	}

	// border: 1px solid ${({ themeState: { isDefaultMode, colours } }) =>
		isDefaultMode ? colours?.default?.textColour : colours?.dark?.textColour};
	border-radius: 4px;
`

export { CardS }
