import { Link } from 'react-router-dom'
import React from 'react'

import { Action, Dispatch, State } from '../helpers/types'
import { mensData } from '../helpers/data/mensData'

import { ContainerS } from '../styled-generics/ContainerS'
import { CardS } from '../styled-generics/CardS'

function MensProducts({
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
			<h3 className="products-title">Men's fashion</h3>
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
export { MensProducts }
