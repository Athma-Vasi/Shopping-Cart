import { ContainerS } from '../styled-generics/ContainerS'
import { CardS } from '../styled-generics/CardS'
import { accessoriesData } from '../helpers/data/accessoriesData'
import { Link } from 'react-router-dom'

function AccessoriesProducts() {
	return (
		<>
			<h3>accessories products</h3>
			<ContainerS>
				{Object.entries(Object.fromEntries(accessoriesData)).map(([key, value]) => {
					return (
						<Link to={`/products/accessories-${key}`}>
							<CardS>
								{Object.entries(Object.fromEntries(value)).map(([key, value]) => {
									return key === 'src' ? (
										<img key={key} src={value} alt="" width={150} height={225}></img>
									) : key === 'category' ? null : key === 'author' ? null : key ===
									  'site' ? null : key === 'itemDescription' ? null : (
										<h4 key={key}>{value}</h4>
									)
								})}
							</CardS>
						</Link>
					)
				})}
			</ContainerS>
		</>
	)
}
export { AccessoriesProducts }
