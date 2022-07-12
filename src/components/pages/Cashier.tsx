import { Link } from 'react-router-dom'
import React from 'react'

import { Action, Dispatch, State, ThemeState } from '../helpers/types'

import { ButtonS } from '../styled-generics/ButtonS'
import { ContainerS } from '../styled-generics/ContainerS'

function Cashier({
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
	function handleRemoveCartItemBttnClick(ev: React.MouseEvent<HTMLButtonElement>): void {
		ev.preventDefault()
		const { name, value } = ev.currentTarget
		const cloneState = structuredClone(state)

		if (name === 'accessories') {
			//remove the itemTotal plus tax from cartTotal and update the state
			const itemTotal = Number(cloneState.accessories.get(value).get('itemTotal')) * 1.05
			const cartTotal = Number(cloneState.totalCost)
			const newCartTotal = cartTotal - itemTotal
			cloneState.totalCost = newCartTotal.toFixed(2).toString()

			//delete the item from the accessories state
			cloneState.accessories.delete(value)
			//update the accessories state
			dispatch({
				type: action.removeAccessoriesItemsFromCart,
				payload: { state: cloneState },
			})

			//update the totalCost state
			dispatch({
				type: action.updateTotalCost,
				payload: { state: cloneState },
			})
		}
		//same logic as above for women and men
		else if (name === 'women') {
			const itemTotal = Number(cloneState.women.get(value).get('itemTotal')) * 1.05
			const cartTotal = Number(cloneState.totalCost)
			const newCartTotal = cartTotal - itemTotal
			cloneState.totalCost = newCartTotal.toFixed(2).toString()

			cloneState.women.delete(value)
			dispatch({
				type: action.removeWomenItemsFromCart,
				payload: { state: cloneState },
			})

			dispatch({
				type: action.updateTotalCost,
				payload: { state: cloneState },
			})
		} else if (name === 'men') {
			const itemTotal = Number(cloneState.men.get(value).get('itemTotal')) * 1.05
			const cartTotal = Number(cloneState.totalCost)
			const newCartTotal = cartTotal - itemTotal
			cloneState.totalCost = newCartTotal.toFixed(2).toString()

			cloneState.men.delete(value)
			dispatch({
				type: action.removeMenItemsFromCart,
				payload: { state: cloneState },
			})

			dispatch({
				type: action.updateTotalCost,
				payload: { state: cloneState },
			})
		}
	}

	async function handleCompleteOrderBttnClick(
		ev: React.MouseEvent<HTMLButtonElement, MouseEvent>
	): Promise<void> {
		//deep copy the state and reset state to values used in initialState
		const cloneState: State = structuredClone(state)
		cloneState.women = new Map()
		cloneState.men = new Map()
		cloneState.accessories = new Map()
		cloneState.totalCost = '0'

		//update state
		dispatch({
			type: action.resetState,
			payload: {
				state: cloneState,
			},
		})
	}

	return (
		<React.Fragment>
			<ContainerS themeState={themeState} key={crypto.randomUUID()}>
				<div className="cart-summary" key={crypto.randomUUID()}>
					{state.accessories.size > 0 &&
						Object.entries(Object.fromEntries(state.accessories)).map(
							([key_, value_]) => {
								return Object.entries(Object.fromEntries(value_)).map(([key, value]) => {
									return (
										<>
											<div className="cart-item" key={crypto.randomUUID()}>
												{key === 'src' ? (
													<img
														src={value}
														alt=""
														width={150}
														height={225}
														key={crypto.randomUUID()}
													/>
												) : null}
												{key === 'itemName' ? (
													<h3 key={crypto.randomUUID()}>{value}</h3>
												) : null}
												{key === 'itemAmount' ? (
													<p key={crypto.randomUUID()}>Quantity: {value}</p>
												) : null}
												{key === 'itemPrice' ? (
													<p key={crypto.randomUUID()}>Price: ${value}</p>
												) : null}
												{key === 'itemTotal' ? (
													<p key={crypto.randomUUID()}>Item total: ${value}</p>
												) : null}
												{key === 'itemId' ? (
													<div className="button-and-break" key={crypto.randomUUID()}>
														<ButtonS
															type="button"
															value={value}
															name="accessories"
															onClick={handleRemoveCartItemBttnClick}
															themeState={themeState}
															key={crypto.randomUUID()}
														>
															Remove item
														</ButtonS>
														<div className="line-break" key={crypto.randomUUID()}></div>
													</div>
												) : null}
											</div>
										</>
									)
								})
							}
						)}
				</div>

				<div className="cart-summary" key={crypto.randomUUID()}>
					{state.women.size > 0 &&
						Object.entries(Object.fromEntries(state.women)).map(([key_, value_]) => {
							return Object.entries(Object.fromEntries(value_)).map(([key, value]) => {
								return (
									<div className="cart-item" key={crypto.randomUUID()}>
										{key === 'src' ? (
											<img
												src={value}
												alt=""
												width={150}
												height={225}
												key={crypto.randomUUID()}
											/>
										) : null}
										{key === 'itemName' ? (
											<h3 key={crypto.randomUUID()}>{value}</h3>
										) : null}
										{key === 'itemAmount' ? (
											<p key={crypto.randomUUID()}>Quantity: {value}</p>
										) : null}
										{key === 'itemPrice' ? (
											<p key={crypto.randomUUID()}>Price: ${value}</p>
										) : null}
										{key === 'itemTotal' ? (
											<p key={crypto.randomUUID()}>Item total: ${value}</p>
										) : null}
										{key === 'itemId' ? (
											<div className="button-and-break" key={crypto.randomUUID()}>
												<ButtonS
													type="button"
													value={value}
													name="women"
													onClick={handleRemoveCartItemBttnClick}
													themeState={themeState}
													key={crypto.randomUUID()}
												>
													Remove item
												</ButtonS>
												<div className="line-break" key={crypto.randomUUID()}></div>
											</div>
										) : null}
									</div>
								)
							})
						})}
				</div>

				<div className="cart-summary" key={crypto.randomUUID()}>
					{state.men.size > 0 &&
						Object.entries(Object.fromEntries(state.men)).map(([key_, value_]) => {
							return Object.entries(Object.fromEntries(value_)).map(([key, value]) => {
								return (
									<div className="cart-item" key={crypto.randomUUID()}>
										{key === 'src' ? (
											<img
												src={value}
												alt=""
												width={150}
												height={225}
												key={crypto.randomUUID()}
											/>
										) : null}
										{key === 'itemName' ? (
											<h3 key={crypto.randomUUID()}>{value}</h3>
										) : null}
										{key === 'itemAmount' ? (
											<p key={crypto.randomUUID()}>Quantity: {value}</p>
										) : null}
										{key === 'itemPrice' ? (
											<p key={crypto.randomUUID()}>Price: ${value}</p>
										) : null}
										{key === 'itemTotal' ? (
											<p key={crypto.randomUUID()}>Item total: ${value}</p>
										) : null}
										{key === 'itemId' ? (
											<div className="button-and-break" key={crypto.randomUUID()}>
												<ButtonS
													type="button"
													value={value}
													name="men"
													onClick={handleRemoveCartItemBttnClick}
													themeState={themeState}
													key={crypto.randomUUID()}
												>
													Remove item
												</ButtonS>
												<div className="line-break" key={crypto.randomUUID()}></div>
											</div>
										) : null}
									</div>
								)
							})
						})}
				</div>

				<div className="order-summary">
					<h3>Order Summary</h3>
					<p>( includes G.S.T. )</p>
					<p>
						Total price: $
						{state.men.size === 0 &&
						state.women.size === 0 &&
						state.accessories.size === 0
							? '0.00'
							: state.totalCost}
					</p>

					{state.men.size === 0 &&
					state.women.size === 0 &&
					state.accessories.size === 0 ? null : (
						<Link to="checkout">
							<ButtonS
								type="button"
								themeState={themeState}
								onClick={handleCompleteOrderBttnClick}
							>
								Complete order
							</ButtonS>
						</Link>
					)}
				</div>
			</ContainerS>
		</React.Fragment>
	)
}
export { Cashier }
