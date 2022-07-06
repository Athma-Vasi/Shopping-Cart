import { useParams } from 'react-router'
import { womensData } from '../helpers/data/womensData'
import { ButtonS } from '../styled-generics/ButtonS'
import { ContainerS } from '../styled-generics/ContainerS'
import { mensData } from '../helpers/data/mensData'
import { accessoriesData } from '../helpers/data/accessoriesData'
import { SelectS } from '../styled-generics/SelectS'
import { useState } from 'react'

function ProductDetails() {
	const [cart, setCart] = useState<Set<string>>(new Set())

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

	function handleAddToCartBttnClick(ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		ev.preventDefault()
		console.log('add to cart button clicked')
	}

	return (
		<>
			{/* <h2>Product Details</h2>
			<p>category: {category}</p>
			<p>idNum: {idNum}</p> */}

			<ContainerS>
				<div className="product-image">
					<img src={src} alt={itemDescription} width={320} height={480}></img>
					<figcaption>
						Photo by {author} at {site}
					</figcaption>
				</div>
				<div className="product-details">
					<h3>{itemName}</h3>
					<p>{itemDescription}</p>
					<h3>{itemPrice}</h3>

					<p>{`${randNum(150)} people bought this item today!`}</p>

					<label htmlFor="select-items"></label>
					<SelectS name="items" id="select-items">
						<option value="">--Please choose an amount--</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
					</SelectS>
					<ButtonS type="button" onClick={handleAddToCartBttnClick}>
						Add to Cart
					</ButtonS>
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
