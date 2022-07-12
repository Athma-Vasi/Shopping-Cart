import styled from 'styled-components'

type WrapperProps = {
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

const WrapperS = styled.div<WrapperProps>`
	margin: 0;
	padding: 0;
	outline: 0;
	box-sizing: border-box;

	color: ${({ themeState: { isDefaultMode, colours } }) =>
		isDefaultMode ? colours?.default?.textColour : colours?.dark?.textColour};
	background-color: ${({ themeState: { isDefaultMode, colours } }) =>
		isDefaultMode ? colours?.default?.backgroundColour : colours?.dark?.backgroundColour};

	display: grid;
	place-content: center;

	width: 100vw;

	transition: 146ms all ease-in-out;
`

export { WrapperS }
