import { NavLink, Link, Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import { State, Dispatch, Action, ThemeState } from '../helpers/types'
import { WrapperS } from '../styled-generics/WrapperS'
import { ButtonS } from '../styled-generics/ButtonS'
import { About } from './About'
import { Cashier } from './Cashier'
import { Home } from './Home'
import { ProductDetails } from './ProductDetails'
import { Products } from './Products'
import React from 'react'

const themeState: ThemeState = {
	colour: {
		light: 'hsl(0, 0%, 25%)',
		dark: 'hsl(0, 0%, 75%)',
	},
	backgroundColour: {
		light: 'hsl(0, 0%, 97%)',
		dark: 'hsl(0, 0%, 11%)',
	},
}

const initialState: State = {
	women: new Map(),
	men: new Map(),
	accessories: new Map(),
	totalCost: '0.00',
	themeState: themeState,
	isDarkMode: false,
}

const action: Action = {
	addWomenItemsToCart: 'addWomenItemsToCart',
	removeWomenItemsFromCart: 'removeWomenItemsFromCart',

	addMenItemsToCart: 'addMenItemsToCart',
	removeMenItemsFromCart: 'removeMenItemsFromCart',

	addAccessoriesItemsToCart: 'addAccessoriesItemsToCart',
	removeAccessoriesItemsFromCart: 'removeAccessoriesItemsFromCart',

	updateTotalCost: 'updateTotalCost',

	toggleTheme: 'toggleTheme',
}

const reducer = function (state: State, action: Dispatch): State {
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

		case 'toggleTheme': {
			clone.isDarkMode = action.payload.state.isDarkMode
			return clone
		}

		default: {
			return clone
		}
	}
}

function Views() {
	const [state, dispatch] = React.useReducer(reducer, initialState)

	function handleToggleThemeClick(ev: React.MouseEvent<HTMLLIElement, MouseEvent>) {
		ev.preventDefault()
		const cloneState: State = structuredClone(state)
		ev.currentTarget.textContent = ev.currentTarget.textContent === '🌑' ? '☀️' : '🌑'
		cloneState.isDarkMode = ev.currentTarget.textContent === '🌑' ? true : false

		dispatch({
			type: action.toggleTheme,
			payload: {
				state: cloneState,
			},
		})
	}

	return (
		<Router>
			<WrapperS
				colour={
					state.isDarkMode ? state.themeState.colour.dark : state.themeState.colour.light
				}
				backgroundColour={
					state.isDarkMode
						? state.themeState.backgroundColour.dark
						: state.themeState.backgroundColour.light
				}
			>
				<nav className="navbar">
					<NavLink to="/">
						<h1>THE FASHION EMPORIUM</h1>
					</NavLink>
					<ul className="links-ul">
						<li>
							<NavLink
								style={({ isActive }) => {
									return {
										display: 'block',
										margin: '1rem 0px',
										color: isActive ? 'darkorange' : 'inherit',
									}
								}}
								to="/"
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								style={({ isActive }) => {
									return {
										display: 'block',
										margin: '1rem 0px',
										color: isActive ? 'darkorange' : 'inherit',
									}
								}}
								to="about"
							>
								About
							</NavLink>
						</li>
						<li>
							<NavLink
								style={({ isActive }) => {
									return {
										display: 'block',
										margin: '1rem 0px',
										color: isActive ? 'darkorange' : 'inherit',
									}
								}}
								to="products"
							>
								Products
							</NavLink>
						</li>
						<li>
							<NavLink
								style={({ isActive }) => {
									return {
										display: 'block',
										margin: '1rem 0px',
										color: isActive ? 'darkorange' : 'inherit',
									}
								}}
								to="cashier"
							>
								<svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
									<path
										fill="currentColor"
										d="M19 20C19 21.11 18.11 22 17 22C15.89 22 15 21.1 15 20C15 18.89 15.89 18 17 18C18.11 18 19 18.9 19 20M7 18C5.89 18 5 18.89 5 20C5 21.1 5.89 22 7 22C8.11 22 9 21.11 9 20S8.11 18 7 18M7.2 14.63L7.17 14.75C7.17 14.89 7.28 15 7.42 15H19V17H7C5.89 17 5 16.1 5 15C5 14.65 5.09 14.32 5.24 14.04L6.6 11.59L3 4H1V2H4.27L5.21 4H20C20.55 4 21 4.45 21 5C21 5.17 20.95 5.34 20.88 5.5L17.3 11.97C16.96 12.58 16.3 13 15.55 13H8.1L7.2 14.63M8.5 11H10V9H7.56L8.5 11M11 9V11H14V9H11M14 8V6H11V8H14M17.11 9H15V11H16L17.11 9M18.78 6H15V8H17.67L18.78 6M6.14 6L7.08 8H10V6H6.14Z"
									/>
								</svg>
							</NavLink>
						</li>

						<li className="themeIcon" onClick={handleToggleThemeClick}>
							☀️
						</li>
					</ul>
				</nav>

				<Routes>
					<Route path="/" element={<Home state={state} />} />
					<Route path="about" element={<About state={state} />} />
					<Route path="products/*" element={<Products state={state} />} />
					<Route
						path="/products/:id"
						element={<ProductDetails state={state} dispatch={dispatch} action={action} />}
					/>
					<Route
						path="cashier"
						element={<Cashier state={state} dispatch={dispatch} action={action} />}
					/>
				</Routes>

				<footer>
					<h2>footer</h2>
				</footer>
			</WrapperS>
		</Router>
	)
}
export { Views }
