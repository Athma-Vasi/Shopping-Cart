type ItemData = Map<number, Map<string, string>>

type State = {
	women: Map<string, Map<string, string>>
	men: Map<string, Map<string, string>>
	accessories: Map<string, Map<string, string>>
	totalCost: string
}

type Dispatch = {
	type: string
	payload: {
		state: State
	}
}

type Action = {
	addWomenItemsToCart: 'addWomenItemsToCart'
	removeWomenItemsFromCart: 'removeWomenItemsFromCart'

	addMenItemsToCart: 'addMenItemsToCart'
	removeMenItemsFromCart: 'removeMenItemsFromCart'

	addAccessoriesItemsToCart: 'addAccessoriesItemsToCart'
	removeAccessoriesItemsFromCart: 'removeAccessoriesItemsFromCart'

	updateTotalCost: 'updateTotalCost'

	resetState: 'resetState'
}

type ThemeState = {
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

type ThemeAction = {
	setDefault: 'setDefault'
	setDark: 'setDark'
}

type ThemeDispatch = {
	type: string
	payload: {
		themeState: ThemeState
	}
}

export { ItemData, State, Dispatch, Action, ThemeState, ThemeAction, ThemeDispatch }
