import React from 'react'
import { Link } from 'react-router-dom'

import { Action, Dispatch, State, ThemeState } from '../helpers/types'

import { ButtonS } from '../styled-generics/ButtonS'

import { ContainerS } from '../styled-generics/ContainerS'

function Checkout({
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
	const randNum = (num: number): number => Math.floor(Math.random() * num)

	return (
		<React.Fragment>
			<h2 className="products-title" data-cy="checkout-title">
				Checkout
			</h2>
			<ContainerS themeState={themeState}>
				<div className="checkout" data-cy="checkout-confirmation">
					<h3>Your order has been placed!</h3>
					<h4>Expect a notification in your email within the hour.</h4>
					<h4>Predicted delivery time: {randNum(48)} hrs</h4>
					<h4>Thank you for shopping with us!</h4>
					<Link to="/products/all">
						<ButtonS
							themeState={themeState}
							type="button"
							data-cy="checkout-bttn-backToStore"
						>
							Back to store
						</ButtonS>
					</Link>
				</div>
			</ContainerS>
		</React.Fragment>
	)
}
export { Checkout }
