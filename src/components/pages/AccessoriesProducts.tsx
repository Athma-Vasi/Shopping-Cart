import { Link, Outlet } from 'react-router-dom'
import React from 'react'

import { Action, Dispatch, State } from '../helpers/types'
import { accessoriesData } from '../helpers/data/accessoriesData'

import { ContainerS } from '../styled-generics/ContainerS'
import { CardS } from '../styled-generics/CardS'

function AccessoriesProducts({
	state,
	dispatch,
	action,
}: {
	state: State
	dispatch: React.Dispatch<Dispatch>
	action: Action
}) {
	return (
		<React.Fragment>
			<h3 className="products-title">Accessories</h3>
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
									  'itemPrice' ? (
										<h4 className="product-text" key={crypto.randomUUID()}>
											${value}
										</h4>
									) : (
										<h4 className="product-text" key={crypto.randomUUID()}>
											{value}
										</h4>
									)
								})}
							</CardS>
						</Link>
					)
				})}
			</ContainerS>
		</React.Fragment>
	)
}
export { AccessoriesProducts }
