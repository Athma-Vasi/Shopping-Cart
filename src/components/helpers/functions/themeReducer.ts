import { ThemeState, ThemeDispatch } from '../types.d'

function themeReducer(state: ThemeState, action: ThemeDispatch): ThemeState {
	const cloneTheme = structuredClone(state)

	switch (action.type) {
		case 'setDefault': {
			cloneTheme.isDefaultMode = action.payload.themeState.isDefaultMode
			cloneTheme.isDarkMode = action.payload.themeState.isDarkMode
			return cloneTheme
		}

		case 'setDark': {
			cloneTheme.isDefaultMode = action.payload.themeState.isDefaultMode
			cloneTheme.isDarkMode = action.payload.themeState.isDarkMode
			return cloneTheme
		}

		default: {
			console.error('default branch reached in themeReducer')
			return cloneTheme
		}
	}
}

export { themeReducer }
