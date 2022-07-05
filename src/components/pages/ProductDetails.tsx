import { useParams } from 'react-router'
import { womensData } from '../helpers/data/womensData'
import { ButtonS } from '../styled-generics/ButtonS'
import { ContainerS } from '../styled-generics/ContainerS'
import { mensData } from '../helpers/data/mensData'
import { accessoriesData } from '../helpers/data/accessoriesData'

function ProductDetails() {
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

	console.log(
		product,
		itemCategory,
		src,
		itemName,
		itemPrice,
		itemDescription,
		author,
		site
	)
	console.log(itemCategory)

	return (
		<>
			<h2>Product Details</h2>
			<p>category: {category}</p>
			<p>idNum: {idNum}</p>
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
