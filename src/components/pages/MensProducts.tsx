import { ContainerS } from '../styled-generics/ContainerS'
import { CardS } from '../styled-generics/CardS'
import { mensData } from '../helpers/data/mensData'
import { Link } from 'react-router-dom'

function MensProducts() {
	return (
		<>
			<h3>mens products</h3>
			<ContainerS>
				{Object.entries(Object.fromEntries(mensData)).map(([key, value]) => {
					return (
						<Link to={`/products/men-${key}`}>
							<CardS key={key}>
								{Object.entries(Object.fromEntries(value)).map(([key, value]) => {
									return key === 'src' ? (
										<img key={key} src={value} alt="" width={150} height={225}></img>
									) : key === 'category' ? null : key === 'author' ? null : key ===
									  'site' ? null : key === 'itemDescription' ? null : key ===
									  'itemPrice' ? (
										<h4 key={key}>${value}</h4>
									) : (
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
export { MensProducts }
