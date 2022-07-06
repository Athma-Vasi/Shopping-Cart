import { Link, Routes, Route } from 'react-router-dom'
import { womensData } from '../helpers/data/womensData'
import { CardS } from '../styled-generics/CardS'
import { ContainerS } from '../styled-generics/ContainerS'
import { ProductDetails } from './ProductDetails'

function WomensProducts() {
	return (
		<>
			<h3>womens products</h3>
			<ContainerS>
				{Object.entries(Object.fromEntries(womensData)).map(([key, value]) => {
					return (
						<Link to={`/products/women-${key}`}>
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
export { WomensProducts }
