import { Link } from 'react-router-dom'

import { Action, Dispatch, State } from '../helpers/types'

import { ButtonS } from '../styled-generics/ButtonS'
import { ContainerS } from '../styled-generics/ContainerS'

function Cashier({
	state,
	dispatch,
	action,
}: {
	state: State
	dispatch: React.Dispatch<Dispatch>
	action: Action
}) {
	function handleRemoveCartItemBttnClick(ev: React.MouseEvent<HTMLButtonElement>) {
		ev.preventDefault()
		const { name, value } = ev.currentTarget
		const cloneState = structuredClone(state)

		if (name === 'accessories') {
			const itemTotal = Number(cloneState.accessories.get(value).get('itemTotal')) * 1.05
			const cartTotal = Number(cloneState.totalCost)
			const newCartTotal = cartTotal - itemTotal
			cloneState.totalCost = newCartTotal.toFixed(2).toString()

			cloneState.accessories.delete(value)
			dispatch({
				type: action.removeAccessoriesItemsFromCart,
				payload: { state: cloneState },
			})

			dispatch({
				type: action.updateTotalCost,
				payload: { state: cloneState },
			})
		} else if (name === 'women') {
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
	) {
		const cloneState: State = structuredClone(state)
		cloneState.women = new Map()
		cloneState.men = new Map()
		cloneState.accessories = new Map()
		cloneState.totalCost = '0'

		dispatch({
			type: action.resetState,
			payload: {
				state: cloneState,
			},
		})
	}

	return (
		<>
			<ContainerS
				colour={
					state.isDarkMode ? state.themeState.colour.dark : state.themeState.colour.light
				}
				backgroundColour={
					state.isDarkMode
						? state.themeState.backgroundColour.dark
						: state.themeState.backgroundColour.light
				}
			>
				<div className="cart-summary">
					{state.accessories.size > 0 &&
						Object.entries(Object.fromEntries(state.accessories)).map(
							([key_, value_]) => {
								return Object.entries(Object.fromEntries(value_)).map(([key, value]) => {
									return (
										<>
											<div className="cart-item">
												{key === 'src' ? (
													<img src={value} alt="" width={150} height={225} />
												) : null}
												{key === 'itemName' ? <h3>{value}</h3> : null}
												{key === 'itemAmount' ? <p>Quantity: {value}</p> : null}
												{key === 'itemPrice' ? <p>Price: ${value}</p> : null}
												{key === 'itemTotal' ? <p>Item total: ${value}</p> : null}
												{key === 'itemId' ? (
													<div className="button-and-break" key={key}>
														<ButtonS
															type="button"
															value={value}
															name="accessories"
															onClick={handleRemoveCartItemBttnClick}
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
														>
															Remove item
														</ButtonS>
														<div className="line-break"></div>
													</div>
												) : null}
											</div>
										</>

										// <div className="cart-item">
										// 	<img src={img} alt="" width={150} height={225} />
										// 	<h3>{name}</h3>
										// 	<p>Quantity: {amount}</p>
										// 	<p>Price: ${price}</p>
										// 	<p>Item total: ${total}</p>
										// </div>
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
									<div className="cart-item">
										{key === 'src' ? (
											<img src={value} alt="" width={150} height={225} />
										) : null}
										{key === 'itemName' ? <h3>{value}</h3> : null}
										{key === 'itemAmount' ? <p>Quantity: {value}</p> : null}
										{key === 'itemPrice' ? <p>Price: ${value}</p> : null}
										{key === 'itemTotal' ? <p>Item total: ${value}</p> : null}
										{key === 'itemId' ? (
											<div className="button-and-break">
												<ButtonS
													type="button"
													value={value}
													name="women"
													onClick={handleRemoveCartItemBttnClick}
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
												>
													Remove item
												</ButtonS>
												<div className="line-break"></div>
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
									<div className="cart-item">
										{key === 'src' ? (
											<img src={value} alt="" width={150} height={225} />
										) : null}
										{key === 'itemName' ? <h3>{value}</h3> : null}
										{key === 'itemAmount' ? <p>Quantity: {value}</p> : null}
										{key === 'itemPrice' ? <p>Price: ${value}</p> : null}
										{key === 'itemTotal' ? <p>Item total: ${value}</p> : null}
										{key === 'itemId' ? (
											<div className="button-and-break">
												<ButtonS
													type="button"
													value={value}
													name="men"
													onClick={handleRemoveCartItemBttnClick}
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
												>
													Remove item
												</ButtonS>
												<div className="line-break"></div>
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
						<Link to="/checkout">
							<ButtonS
								type="button"
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
								onClick={handleCompleteOrderBttnClick}
							>
								Complete order
							</ButtonS>
						</Link>
					)}
				</div>
			</ContainerS>
		</>
	)
}
export { Cashier }
