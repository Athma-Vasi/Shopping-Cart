import { useParams } from 'react-router'
import { womensData } from '../helpers/data/womensData'
import { Cashier } from '../pages/Cashier'
import { ButtonS } from '../styled-generics/ButtonS'
import { ContainerS } from '../styled-generics/ContainerS'
import { mensData } from '../helpers/data/mensData'
import { accessoriesData } from '../helpers/data/accessoriesData'
import { SelectS } from '../styled-generics/SelectS'
import React, { useState } from 'react'
import { Action, Dispatch, State } from '../helpers/types'
import { Route, Routes, Link } from 'react-router-dom'

function ProductDetails({
	state,
	dispatch,
	action,
}: {
	state: State
	dispatch: React.Dispatch<Dispatch>
	action: Action
}) {
	const [isItemInCart, setIsItemInCart] = React.useState(false)

	const { id } = useParams()
	const [category, idNum] = id?.split('-') ?? []
	const product =
		category === 'women'
			? Object.entries(
					Object.fromEntries(womensData.get(Number(idNum)) as Map<string, string>)
			  )
			: category === 'men'
			? Object.entries(
					Object.fromEntries(mensData.get(Number(idNum)) as Map<string, string>)
			  )
			: Object.entries(
					Object.fromEntries(accessoriesData.get(Number(idNum)) as Map<string, string>)
			  )

	const itemCategory = product[0][1]
	const src = product[1][1]
	const itemName = product[2][1]
	const itemPrice = product[3][1]
	const itemDescription = product[4][1]
	const author = product[5][1]
	const site = product[6][1]

	const randNum = (num: number): number => Math.floor(Math.random() * num)

	function handleAddToCartBttnClick(ev: React.FormEvent<HTMLFormElement>) {
		ev.preventDefault()

		const formData = new FormData(ev.currentTarget)
		const itemOptionAmount = formData.get('addCart')?.toString() ?? ''

		if (itemOptionAmount !== '') {
			// const cloneAmount = structuredClone(itemAmount)
			// setItemAmount(cloneAmount.set('amount', Number(itemOptionAmount)))

			const cloneState: State = structuredClone(state)

			if (itemCategory === 'women') {
				cloneState.women.set(
					idNum,
					new Map([
						['itemCategory', itemCategory],
						['src', src],
						['itemName', itemName],
						['itemPrice', itemPrice],
						['itemDescription', itemDescription],
						['itemAmount', itemOptionAmount],
						[
							'itemTotal',
							(Number(itemOptionAmount) * Number(itemPrice)).toFixed(2).toString(),
						],
						['itemId', idNum],
					])
				)
				const prevTotalCost = Number(cloneState.totalCost)
				const newTotalCost = prevTotalCost + Number(itemOptionAmount) * Number(itemPrice)
				cloneState.totalCost = (newTotalCost * 1.05).toFixed(2).toString()

				dispatch({
					type: action.addWomenItemsToCart,
					payload: {
						state: cloneState,
					},
				})

				dispatch({
					type: action.updateTotalCost,
					payload: {
						state: cloneState,
					},
				})
			} else if (itemCategory === 'men') {
				cloneState.men.set(
					idNum,
					new Map([
						['itemCategory', itemCategory],
						['src', src],
						['itemName', itemName],
						['itemPrice', itemPrice],
						['itemDescription', itemDescription],
						['itemAmount', itemOptionAmount],
						[
							'itemTotal',
							(Number(itemOptionAmount) * Number(itemPrice)).toFixed(2).toString(),
						],
						['itemId', idNum],
					])
				)
				const prevTotalCost = Number(cloneState.totalCost)
				const newTotalCost = prevTotalCost + Number(itemOptionAmount) * Number(itemPrice)
				cloneState.totalCost = (newTotalCost * 1.05).toFixed(2).toString()

				dispatch({
					type: action.addMenItemsToCart,
					payload: {
						state: cloneState,
					},
				})

				dispatch({
					type: action.updateTotalCost,
					payload: {
						state: cloneState,
					},
				})
			} else if (itemCategory === 'accessories') {
				cloneState.accessories.set(
					idNum,
					new Map([
						['itemCategory', itemCategory],
						['src', src],
						['itemName', itemName],
						['itemPrice', itemPrice],
						['itemDescription', itemDescription],
						['itemAmount', itemOptionAmount],
						[
							'itemTotal',
							(Number(itemOptionAmount) * Number(itemPrice)).toFixed(2).toString(),
						],
						['itemId', idNum],
					])
				)
				const prevTotalCost = Number(cloneState.totalCost)
				const newTotalCost = prevTotalCost + Number(itemOptionAmount) * Number(itemPrice)
				cloneState.totalCost = (newTotalCost * 1.05).toFixed(2).toString()

				dispatch({
					type: action.addAccessoriesItemsToCart,
					payload: {
						state: cloneState,
					},
				})

				dispatch({
					type: action.updateTotalCost,
					payload: {
						state: cloneState,
					},
				})
			}

			setIsItemInCart(true)
		} else {
			setIsItemInCart(false)
		}
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
				<div className="product-image">
					<img src={src} alt={itemDescription} width={320} height={480}></img>
					<figcaption>
						Photo by {author} at {site}
					</figcaption>
				</div>
				<div className="product-details">
					<h3>{itemName}</h3>
					<p>{itemDescription}</p>
					<h3>${itemPrice}</h3>

					<p>{`${randNum(13)} people bought this item last minute!`}</p>

					<form
						action="#"
						id="form-addCart"
						name="addCart"
						onSubmit={handleAddToCartBttnClick}
					>
						<label htmlFor="select-items"></label>
						<SelectS
							name="addCart"
							id="select-items"
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
							<option value="">--Please choose an amount--</option>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
						</SelectS>
						<ButtonS
							type="submit"
							name="addCart"
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
							Add to Cart
						</ButtonS>
					</form>

					{isItemInCart && (
						<>
							<h3>Item has been added to cart!</h3>
							<Link to="/cashier">
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
								>
									Complete order and checkout
								</ButtonS>
							</Link>
						</>
					)}
				</div>
			</ContainerS>
		</>
	)
}
export { ProductDetails }

{
	/* <div className="product-details">
				{category === 'women'
					? Object.entries(
							Object.fromEntries(womensData.get(Number(idNum)) as Map<string, string>)
					  ).map(([key, value]) => {
							return (
								<ContainerS key={key}>
									{key === 'src' ? (
										<img src={value} alt="" width={320} height={480} />
									) : key === 'category' ? null : (
										<h5>{value}</h5>
									)}
								</ContainerS>
							)
					  })
					: null}
				<ButtonS>Add to cart</ButtonS>
			</div> */
}
