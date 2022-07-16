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
}): JSX.Element {
	return (
		<React.Fragment>
			<h3 className="products-title" data-cy="title-accessories-product">
				Accessories
			</h3>
			<ContainerS themeState={themeState}>
				{Object.entries(Object.fromEntries(accessoriesData)).map(([key_, value_]) => {
					return (
						<Link
							to={`accessories-${key_}`}
							key={key_}
							data-cy="accessoriesProducts-accessoriesCard"
						>
							<CardS themeState={themeState}>
								{Object.entries(Object.fromEntries(value_)).map(([key, value]) => {
									return key === 'src' ? (
										<img
											key={key}
											src={value}
											alt=""
											width={150}
											height={225}
											data-cy="accessoriesProducts-accessoriesCard-img"
										></img>
									) : key === 'category' ? null : key === 'author' ? null : key ===
									  'site' ? null : key === 'itemDescription' ? null : key ===
									  'itemPrice' ? (
										<h4
											className="product-text"
											key={key}
											data-cy="accessoriesProducts-accessoriesCard-name"
										>
											${value}
										</h4>
									) : (
										<h4
											className="product-text"
											key={key}
											data-cy="accessoriesProducts-accessoriesCard-price"
										>
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
