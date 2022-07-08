import { Link } from 'react-router-dom'
import React from 'react'

import { State } from '../helpers/types'
import { womensData } from '../helpers/data/womensData'

import { CardS } from '../styled-generics/CardS'
import { ContainerS } from '../styled-generics/ContainerS'

function WomensProducts({ state }: { state: State }) {
	return (
		<React.Fragment>
			<h3 className="products-title">Women's fashion</h3>
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
						<Link to={`/products/women-${key_}`} key={crypto.randomUUID()}>
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
export { WomensProducts }
