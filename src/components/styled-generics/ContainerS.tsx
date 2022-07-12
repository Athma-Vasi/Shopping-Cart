import styled from 'styled-components'

type ContainerProps = {
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

	color: ${({ themeState: { isDefaultMode, colours } }) =>
		isDefaultMode ? colours?.default?.textColour : colours?.dark?.textColour};
	background-color: ${({ themeState: { isDefaultMode, colours } }) =>
		isDefaultMode ? colours?.default?.backgroundColour : colours?.dark?.backgroundColour};

	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-items: center;
	gap: 3rem;

	transition: 146ms all ease-in-out;
`

export { ContainerS }
