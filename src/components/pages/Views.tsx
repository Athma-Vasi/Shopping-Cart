import { NavLink, Link, Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import React from 'react'

import { State, Dispatch, Action, ThemeState } from '../helpers/types'

import { WrapperS } from '../styled-generics/WrapperS'
import { ContainerS } from '../styled-generics/ContainerS'

import { About } from './About'
import { Cashier } from './Cashier'
import { Home } from './Home'
import { ProductDetails } from './ProductDetails'
import { Products } from './Products'
import { Checkout } from './Checkout'

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
	totalCost: '0',
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

	resetState: 'resetState',
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
										color: isActive ? 'lightcoral' : 'inherit',
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
										color: isActive ? 'lightcoral' : 'inherit',
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
										color: isActive ? 'lightcoral' : 'inherit',
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
										color: isActive ? 'lightcoral' : 'inherit',
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
				<div className="navbar-line"></div>

				<Routes>
					<Route index element={<Home state={state} />} />
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
					<Route
						path="checkout"
						element={<Checkout state={state} dispatch={dispatch} action={action} />}
					></Route>
				</Routes>

				<footer>
					<ContainerS
						colour={
							state.isDarkMode
								? state.themeState.colour.dark
								: state.themeState.colour.light
						}
						backgroundColour={
							state.isDarkMode
								? state.themeState.backgroundColour.dark
								: state.themeState.backgroundColour.light
						}
					>
						<div className="footer-line"></div>
						<div className="footer-section">
							<h2>Who we are</h2>
							<Link to="about">
								<h3>Our story</h3>
							</Link>
							<a href="https://github.com/Athma-Vasi">
								<h3>Author</h3>
							</a>
							<a href="https://github.com/Athma-Vasi/Shopping-Cart">
								<h3>Github repo</h3>
							</a>
						</div>

						<div className="footer-section">
							<h2 className="footer-followUs">Follow us</h2>

							<div className="footer-svg">
								<svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
									<path
										fill="currentColor"
										d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"
									/>
								</svg>
								<svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
									<path
										fill="currentColor"
										d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"
									/>
								</svg>
								<svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
									<path
										fill="currentColor"
										d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"
									/>
								</svg>
								<svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
									<path
										fill="currentColor"
										d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z"
									/>
								</svg>
								<svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
									<path
										fill="currentColor"
										d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.5 11.15 9.61 11 9.73 10.89C9.84 10.78 10 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77 8.26 9.56 7.77C9.36 7.29 9.16 7.35 9 7.34C8.86 7.34 8.7 7.33 8.53 7.33Z"
									/>
								</svg>
								<svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
									<path
										fill="currentColor"
										d="M9.04,21.54C10,21.83 10.97,22 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2A10,10 0 0,0 2,12C2,16.25 4.67,19.9 8.44,21.34C8.35,20.56 8.26,19.27 8.44,18.38L9.59,13.44C9.59,13.44 9.3,12.86 9.3,11.94C9.3,10.56 10.16,9.53 11.14,9.53C12,9.53 12.4,10.16 12.4,10.97C12.4,11.83 11.83,13.06 11.54,14.24C11.37,15.22 12.06,16.08 13.06,16.08C14.84,16.08 16.22,14.18 16.22,11.5C16.22,9.1 14.5,7.46 12.03,7.46C9.21,7.46 7.55,9.56 7.55,11.77C7.55,12.63 7.83,13.5 8.29,14.07C8.38,14.13 8.38,14.21 8.35,14.36L8.06,15.45C8.06,15.62 7.95,15.68 7.78,15.56C6.5,15 5.76,13.18 5.76,11.71C5.76,8.55 8,5.68 12.32,5.68C15.76,5.68 18.44,8.15 18.44,11.43C18.44,14.87 16.31,17.63 13.26,17.63C12.29,17.63 11.34,17.11 11,16.5L10.33,18.87C10.1,19.73 9.47,20.88 9.04,21.57V21.54Z"
									/>
								</svg>
							</div>
						</div>
					</ContainerS>
				</footer>
			</WrapperS>
		</Router>
	)
}
export { Views }
