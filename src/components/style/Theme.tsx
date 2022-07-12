import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ThemeAction, ThemeState } from '../helpers/types'

const initialThemeState: ThemeState = {
	isDefaultMode: true,
	isDarkMode: false,

	colours: {
		default: {
			primary: 'hsl(0, 79%, 72%)',
			textColour: 'hsl(0, 0%, 24.6%)',
			backgroundColour: 'hsl(0, 0%, 97%)',
		},
		dark: {
			primary: 'hsl(180, 79%, 72%)',
			textColour: 'hsl(0, 0%, 80.9%)',
			backgroundColour: 'hsl(0, 0%, 7.3%)',
		},
	},
	fonts: {
		serif: ['Source Serif Pro', 'serif'],
		sansSerif: ['Work Sans', 'sans-serif'],
		monospace: ['Iosevka Slab', 'monospace'],
	},
	fontSizes: {
		small: '0.75rem',
		medium: '1rem',
		large: '1.5rem',
		xlarge: '2rem',
	},
}

const themeAction: ThemeAction = {
	setDefault: 'setDefault',
	setDark: 'setDark',
}

function Theme({
	themeState,
	children,
}: {
	themeState: ThemeState
	children: JSX.Element
}): JSX.Element {
	return (
		<React.Fragment>
			<ThemeProvider theme={themeState}>{children}</ThemeProvider>
		</React.Fragment>
	)
}

export { Theme, initialThemeState, themeAction }
