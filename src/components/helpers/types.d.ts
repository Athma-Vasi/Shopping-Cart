type ItemData = Map<number, Map<string, string>>

type ThemeState = {
	colour: {
		light: string
		dark: string
	}
	backgroundColour: {
		light: string
		dark: string
	}
}

type State = {
	women: Map<string, Map<string, string>>
	men: Map<string, Map<string, string>>
	accessories: Map<string, Map<string, string>>
	totalCost: string
	themeState: ThemeState
	isDarkMode: boolean
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
	toggleTheme: 'toggleTheme'
}

export { ItemData, State, Dispatch, Action, ThemeState }
