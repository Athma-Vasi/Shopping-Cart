interface PhotosResponse {
	page: number
	per_page: number
	photos: Photo[]
	total_results: number
	next_page: string
}

interface Photo {
	id: number
	width: number
	height: number
	url: string
	photographer: string
	photographer_url: string
	photographer_id: number
	avg_color: string
	src: Src
	liked: boolean
	alt: string
}

interface Src {
	original: string
	large2x: string
	large: string
	medium: string
	small: string
	portrait: string
	landscape: string
	tiny: string
}

type ItemData = Map<number, Map<string, string>>

// type State = {
// 	itemCategory: string
// 	itemId: string
// 	itemName: string
// 	itemPrice: string
// 	itemDescription: string
// 	itemAmount: string
// }[]
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

export { PhotosResponse, Photo, Src, ItemData, State, Dispatch, Action, ThemeState }
