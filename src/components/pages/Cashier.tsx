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
			const itemTotal = Number(cloneState.accessories.get(value).get('itemTotal'))
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
			const itemTotal = Number(cloneState.accessories.get(value).get('itemTotal'))
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
			const itemTotal = Number(cloneState.accessories.get(value).get('itemTotal'))
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
	return (
		<>
			<ContainerS>
				<div className="cart-summary">
					{state.accessories.size > 0 &&
						Object.entries(Object.fromEntries(state.accessories)).map(
							([key_, value_]) => {
								return Object.entries(Object.fromEntries(value_)).map(([key, value]) => {
									// let img
									// let name
									// let amount
									// let price
									// let total
									// if (key === 'src') img = value
									// if (key === 'itemName') name = value
									// if (key === 'itemAmount') amount = value
									// if (key === 'itemPrice') price = value
									// if (key === 'itemTotal') total = value

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
													<ButtonS
														type="button"
														value={value}
														name="accessories"
														onClick={handleRemoveCartItemBttnClick}
													>
														Remove item
													</ButtonS>
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
											<ButtonS
												type="button"
												value={value}
												name="women"
												onClick={handleRemoveCartItemBttnClick}
											>
												Remove item
											</ButtonS>
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
											<ButtonS
												type="button"
												value={value}
												name="men"
												onClick={handleRemoveCartItemBttnClick}
											>
												Remove item
											</ButtonS>
										) : null}
									</div>
								)
							})
						})}
				</div>

				<div className="order-summary">
					<h3>Order Summary</h3>
					<p>Total price: ${`${state.totalCost}`}</p>
				</div>
			</ContainerS>
		</>
	)
}
export { Cashier }
