import './App.css'
import React from 'react'
import { Views } from './components/pages/Views'
import { initialThemeState, Theme } from './components/style/Theme'

function App() {
	return (
		<React.Fragment>
			<Theme themeState={initialThemeState}>
				<Views></Views>
			</Theme>
		</React.Fragment>
	)
}

export default App
