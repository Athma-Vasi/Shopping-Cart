import { Link } from 'react-router-dom'
import React from 'react'

import { Action, Dispatch, State, ThemeState } from '../helpers/types'
import { mensData } from '../helpers/data/mensData'

import { ContainerS } from '../styled-generics/ContainerS'
import { CardS } from '../styled-generics/CardS'

function MensProducts({
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
			<h3 className="products-title" data-cy="title-men-product">
				Men's fashion
			</h3>
			<ContainerS themeState={themeState}>
				{Object.entries(Object.fromEntries(mensData)).map(([key_, value_]) => {
					return (
						<Link to={`men-${key_}`} key={key_}>
							<CardS themeState={themeState}>
								{Object.entries(Object.fromEntries(value_)).map(([key, value]) => {
									return key === 'src' ? (
										<img key={key} src={value} alt="" width={150} height={225}></img>
									) : key === 'category' ? null : key === 'author' ? null : key ===
									  'site' ? null : key === 'itemDescription' ? null : key ===
									  'itemPrice' ? (
										<h4 className="product-text" key={key}>
											${value}
										</h4>
									) : (
										<h4 className="product-text" key={key}>
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
