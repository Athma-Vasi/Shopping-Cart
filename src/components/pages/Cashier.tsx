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
			<ContainerS themeState={themeState}>
				<div className="cart-summary">
					{state.accessories.size > 0 &&
						Object.entries(Object.fromEntries(state.accessories)).map(
							([key_, value_]) => {
								return Object.entries(Object.fromEntries(value_)).map(([key, value]) => {
									return (
										<div className="cart-item" key={JSON.stringify(value)}>
											{key === 'src' ? (
												<img src={value} alt="" width={150} height={225} key={key} />
											) : null}
											{key === 'itemName' ? <h3 key={key}>{value}</h3> : null}
											{key === 'itemAmount' ? <p key={key}>Quantity: {value}</p> : null}
											{key === 'itemPrice' ? <p key={key}>Price: ${value}</p> : null}
											{key === 'itemTotal' ? <p key={key}>Item total: ${value}</p> : null}
											{key === 'itemId' ? (
												<div className="button-and-break" key={key}>
													<ButtonS
														type="button"
														value={value}
														name="accessories"
														onClick={handleRemoveCartItemBttnClick}
														themeState={themeState}
														key={`${key}_${value}`}
													>
														Remove item
													</ButtonS>
													<div
														className="line-break"
														key={`${key_}_${key}_${value}`}
													></div>
												</div>
											) : null}
										</div>
									)
								})
							}
						)}
				</div>

				<div className="cart-summary">
					{state.women.size > 0 &&
						Object.entries(Object.fromEntries(state.women)).map(([key_, value_]) => {
							return Object.entries(Object.fromEntries(value_)).map(([key, value]) => {
								return (
									<div className="cart-item" key={JSON.stringify(value)}>
										{key === 'src' ? (
											<img
												src={value}
												alt=""
												width={150}
												height={225}
												key={key}
												data-cy="cashier-womenProduct-img"
											/>
										) : null}
										{key === 'itemName' ? (
											<h3 key={key} data-cy="cashier-womenProduct-name">
												{value}
											</h3>
										) : null}
										{key === 'itemAmount' ? (
											<p key={key} data-cy="cashier-womenProduct-amount">
												Quantity: {value}
											</p>
										) : null}
										{key === 'itemPrice' ? (
											<p key={key} data-cy="cashier-womenProduct-price">
												Price: ${value}
											</p>
										) : null}
										{key === 'itemTotal' ? (
											<p key={key} data-cy="cashier-womenProduct-total">
												Item total: ${value}
											</p>
										) : null}
										{key === 'itemId' ? (
											<div className="button-and-break" key={key}>
												<ButtonS
													type="button"
													value={value}
													name="women"
													onClick={handleRemoveCartItemBttnClick}
													themeState={themeState}
													key={`${key}_${JSON.stringify(value)}`}
													data-cy="cashier-womenProduct-bttn-removeItem"
												>
													Remove item
												</ButtonS>
												<div
													className="line-break"
													key={`${key_}_${key}_${JSON.stringify(value)}`}
												></div>
											</div>
										) : null}
									</div>
								)
							})
						})}
				</div>

				<div className="cart-summary">
					{state.men.size > 0 &&
						Object.entries(Object.fromEntries(state.men)).map(([key_, value_]) => {
							return Object.entries(Object.fromEntries(value_)).map(([key, value]) => {
								return (
									<div className="cart-item" key={JSON.stringify(value)}>
										{key === 'src' ? (
											<img src={value} alt="" width={150} height={225} key={key} />
										) : null}
										{key === 'itemName' ? <h3 key={key}>{value}</h3> : null}
										{key === 'itemAmount' ? <p key={key}>Quantity: {value}</p> : null}
										{key === 'itemPrice' ? <p key={key}>Price: ${value}</p> : null}
										{key === 'itemTotal' ? <p key={key}>Item total: ${value}</p> : null}
										{key === 'itemId' ? (
											<div className="button-and-break" key={`${key_}_${key}`}>
												<ButtonS
													type="button"
													value={value}
													name="men"
													onClick={handleRemoveCartItemBttnClick}
													themeState={themeState}
													key={`${key}_${value}`}
												>
													Remove item
												</ButtonS>
												<div className="line-break" key={`${key_}_${key}_${value}`}></div>
											</div>
										) : null}
									</div>
								)
							})
						})}
				</div>

				<div className="order-summary">
					<h3 data-cy="cashier-orderSummary">Order Summary</h3>
					<p>( includes G.S.T. )</p>
					<p data-cy="cashier-totalPrice">
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
								data-cy="cashier-bttn-completeOrder"
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
