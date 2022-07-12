import { Link } from 'react-router-dom'
import React from 'react'

import { Action, Dispatch, State, ThemeState } from '../helpers/types'
import { accessoriesData } from '../helpers/data/accessoriesData'

import { ContainerS } from '../styled-generics/ContainerS'
import { CardS } from '../styled-generics/CardS'

function AccessoriesProducts({
	state,
	dispatch,
	action,
	themeState,
}: {
	state: State
	dispatch: React.Dispatch<Dispatch>
	action: Action
	themeState: ThemeState
}) {
	return (
		<React.Fragment>
			<h3 className="products-title">Accessories</h3>
			<ContainerS themeState={themeState} key={crypto.randomUUID()}>
				{Object.entries(Object.fromEntries(accessoriesData)).map(([key_, value_]) => {
					return (
						<Link to={`accessories-${key_}`} key={crypto.randomUUID()}>
							<CardS themeState={themeState} key={crypto.randomUUID()}>
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
