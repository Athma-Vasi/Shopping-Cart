import { Link, Outlet, Route, Routes } from 'react-router-dom'
import React from 'react'

import { Action, Dispatch, State } from '../helpers/types'
import { womensData } from '../helpers/data/womensData'
import { mensData } from '../helpers/data/mensData'
import { accessoriesData } from '../helpers/data/accessoriesData'

import { ContainerS } from '../styled-generics/ContainerS'
import { CardS } from '../styled-generics/CardS'
import { ProductDetails } from './ProductDetails'

function AllProducts({
	state,
	dispatch,
	action,
}: {
	state: State
	dispatch: React.Dispatch<Dispatch>
	action: Action
}) {
	console.log('allproducts')
	return (
		<React.Fragment>
			<Outlet></Outlet>
			<h3 className="products-title">All products</h3>
			<ContainerS
				colour={
					state.isDarkMode ? state.themeState.colour.dark : state.themeState.colour.light
				}
				backgroundColour={
					state.isDarkMode
						? state.themeState.backgroundColour.dark
						: state.themeState.backgroundColour.light
				}
				key={crypto.randomUUID()}
			>
				{Object.entries(Object.fromEntries(womensData)).map(([key_, value_]) => {
					return (
						<Link to={`women-${key_}`} key={crypto.randomUUID()}>
							<CardS
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
								key={crypto.randomUUID()}
							>
								{Object.entries(Object.fromEntries(value_)).map(([key, value]) => {
									return key === 'src' ? (
										<img
											key={crypto.randomUUID()}
											src={value}
											alt=""
											width={150}
											height={225}
										></img>
									) : key === 'category' ? null : key === 'author' ? null : key ===
									  'site' ? null : key === 'itemDescription' ? null : key ===
									  'itemName' ? (
										<h4 className="product-text" key={crypto.randomUUID()}>
											{value}
										</h4>
									) : key === 'itemPrice' ? (
										<h4 className="product-text" key={crypto.randomUUID()}>
											${value}
										</h4>
									) : null
								})}
							</CardS>
						</Link>
					)
				})}

				{Object.entries(Object.fromEntries(mensData)).map(([key_, value_]) => {
					return (
						<Link to={`men-${key_}`} key={crypto.randomUUID()}>
							<CardS
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
								key={crypto.randomUUID()}
							>
								{Object.entries(Object.fromEntries(value_)).map(([key, value]) => {
									return key === 'src' ? (
										<img
											key={crypto.randomUUID()}
											src={value}
											alt=""
											width={150}
											height={225}
										></img>
									) : key === 'category' ? null : key === 'author' ? null : key ===
									  'site' ? null : key === 'itemDescription' ? null : key ===
									  'itemName' ? (
										<h4 className="product-text" key={crypto.randomUUID()}>
											{value}
										</h4>
									) : key === 'itemPrice' ? (
										<h4 className="product-text" key={crypto.randomUUID()}>
											${value}
										</h4>
									) : null
								})}
							</CardS>
						</Link>
					)
				})}

				{Object.entries(Object.fromEntries(accessoriesData)).map(([key_, value_]) => {
					return (
						<Link to={`accessories-${key_}`} key={crypto.randomUUID()}>
							<CardS
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
								key={crypto.randomUUID()}
							>
								{Object.entries(Object.fromEntries(value_)).map(([key, value]) => {
									return key === 'src' ? (
										<img
											key={crypto.randomUUID()}
											src={value}
											alt=""
											width={150}
											height={225}
										></img>
									) : key === 'category' ? null : key === 'author' ? null : key ===
									  'site' ? null : key === 'itemDescription' ? null : key ===
									  'itemName' ? (
										<h4 className="product-text" key={crypto.randomUUID()}>
											{value}
										</h4>
									) : key === 'itemPrice' ? (
										<h4 className="product-text" key={crypto.randomUUID()}>
											${value}
										</h4>
									) : null
								})}
							</CardS>
						</Link>
					)
				})}
			</ContainerS>

			{/* <Routes>
				<Route
					path=":id"
					element={<ProductDetails state={state} dispatch={dispatch} action={action} />}
				></Route>
			</Routes> */}
		</React.Fragment>
	)
}
export { AllProducts }