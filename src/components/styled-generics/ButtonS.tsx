import styled from 'styled-components'

type PropsButton = {
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

const ButtonS = styled.button<PropsButton>`
	color: ${({ themeState: { isDefaultMode, colours } }) =>
		isDefaultMode ? colours?.default?.textColour : colours?.dark?.textColour};
	background-color: ${({ themeState: { isDefaultMode, colours } }) =>
		isDefaultMode ? colours?.default?.backgroundColour : colours?.dark?.backgroundColour};

	font-family: inherit;
	cursor: pointer;

	padding: 0.25em 0.75em;
	min-width: 10ch;
	min-height: 3em;
	line-height: 1.1;

	border: 1px solid
		${({ themeState: { isDefaultMode, colours } }) =>
			isDefaultMode ? colours?.default?.textColour : colours?.dark?.textColour};
	border-radius: 8px;

	// box-shadow: 2px 4px 4px hsl(0, 0%, 0%, 0.8),

	display: inline-flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	align-self: start;

	transition: 146ms all ease-in-out;

	&:hover,
	&:active {
		color: ${({ themeState: { isDefaultMode, colours } }) =>
			isDefaultMode
				? colours?.default?.backgroundColour
				: colours?.dark?.backgroundColour};

		background-color: ${({ themeState: { isDefaultMode, colours } }) =>
			isDefaultMode ? colours?.default?.textColour : colours?.dark?.textColour};

		box-shadow: 2px 4px 4px hsl(0, 0%, 0%, 0.4), 3px 6px 6px hsl(0, 0%, 0%, 0.3),
			4px 8px 8px hsl(0, 0%, 0%, 0.2), 5px 10px 10px hsl(0, 0%, 0%, 0.1);

		transform: scale(1.0382);
	}

	&:focus {
		outline-style: solid;
		outline-color: transparent;
		box-shadow: 1px 2px 2px
			${({ themeState: { isDefaultMode, colours } }) =>
				isDefaultMode ? colours?.default?.textColour : colours?.dark?.textColour};
	}

	@media screen and (-ms-high-contrast: active) {
		border: 2px solid currentColor;
	}
`

export { ButtonS }
