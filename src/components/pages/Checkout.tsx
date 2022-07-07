import { State } from '../helpers/types'
import { ButtonS } from '../styled-generics/ButtonS'
import { ContainerS } from '../styled-generics/ContainerS'
import { Link } from 'react-router-dom'

function Checkout({ state }: { state: State }) {
	const randNum = (num: number): number => Math.floor(Math.random() * num)

	return (
		<>
			<h2 className="products-title">Checkout</h2>
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
				<div className="checkout">
					<h3>Your order has been placed!</h3>
					<h4>Expect a notification in your email within the hour.</h4>
					<h4>Predicted delivery time: {randNum(48)} hrs</h4>
					<h4>Thank you for shopping with us!</h4>
					<Link to="/products/products/all">
						<ButtonS
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
							type="button"
						>
							Back to store
						</ButtonS>
					</Link>
				</div>
			</ContainerS>
		</>
	)
}
export { Checkout }
