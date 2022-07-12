import { State, Dispatch } from '../types'

const appReducer = function (state: State, action: Dispatch): State {
	const clone: State = structuredClone(state)

	switch (action.type) {
		case 'addWomenItemsToCart': {
			clone.women = action.payload.state.women
			return clone
		}
		case 'removeWomenItemsFromCart': {
			clone.women = action.payload.state.women
			return clone
		}

		case 'addMenItemsToCart': {
			clone.men = action.payload.state.men
			return clone
		}
		case 'removeMenItemsFromCart': {
			clone.men = action.payload.state.men
			return clone
		}

		case 'addAccessoriesItemsToCart': {
			clone.accessories = action.payload.state.accessories
			return clone
		}
		case 'removeAccessoriesItemsFromCart': {
			clone.accessories = action.payload.state.accessories
			return clone
		}

		case 'updateTotalCost': {
			clone.totalCost = action.payload.state.totalCost
			return clone
		}

		case 'resetState': {
			clone.accessories = action.payload.state.accessories
			clone.women = action.payload.state.women
			clone.men = action.payload.state.men
			clone.totalCost = action.payload.state.totalCost
			return clone
		}

		default: {
			return clone
		}
	}
}

export { appReducer }
