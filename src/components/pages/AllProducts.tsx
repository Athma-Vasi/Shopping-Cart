import { ContainerS } from '../styled-generics/ContainerS'
import { CardS } from '../styled-generics/CardS'
import { womensData } from '../helpers/data/womensData'
import { mensData } from '../helpers/data/mensData'
import { accessoriesData } from '../helpers/data/accessoriesData'
import { Link } from 'react-router-dom'
import { State } from '../helpers/types'

function AllProducts({ state }: { state: State }) {
	return (
		<>
			<h3 className="products-title">All products</h3>
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
				{Object.entries(Object.fromEntries(womensData)).map(([key, value]) => {
					return (
						<Link to={`/products/women-${key}`}>
							<CardS
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
								{Object.entries(Object.fromEntries(value)).map(([key, value]) => {
									return key === 'src' ? (
										<img key={key} src={value} alt="" width={150} height={225}></img>
									) : key === 'category' ? null : key === 'author' ? null : key ===
									  'site' ? null : key === 'itemDescription' ? null : key ===
									  'itemName' ? (
										<h4 className="product-text" key={key}>
											{value}
										</h4>
									) : key === 'itemPrice' ? (
										<h4 className="product-text" key={key}>
											${value}
										</h4>
									) : null
								})}
							</CardS>
						</Link>
					)
				})}

				{Object.entries(Object.fromEntries(mensData)).map(([key, value]) => {
					return (
						<Link to={`/products/men-${key}`}>
							<CardS
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
								{Object.entries(Object.fromEntries(value)).map(([key, value]) => {
									return key === 'src' ? (
										<img key={key} src={value} alt="" width={150} height={225}></img>
									) : key === 'category' ? null : key === 'author' ? null : key ===
									  'site' ? null : key === 'itemDescription' ? null : key ===
									  'itemName' ? (
										<h4 className="product-text" key={key}>
											{value}
										</h4>
									) : key === 'itemPrice' ? (
										<h4 className="product-text" key={key}>
											${value}
										</h4>
									) : null
								})}
							</CardS>
						</Link>
					)
				})}

				{Object.entries(Object.fromEntries(accessoriesData)).map(([key, value]) => {
					return (
						<Link to={`/products/accessories-${key}`}>
							<CardS
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
								{Object.entries(Object.fromEntries(value)).map(([key, value]) => {
									return key === 'src' ? (
										<img key={key} src={value} alt="" width={150} height={225}></img>
									) : key === 'category' ? null : key === 'author' ? null : key ===
									  'site' ? null : key === 'itemDescription' ? null : key ===
									  'itemName' ? (
										<h4 className="product-text" key={key}>
											{value}
										</h4>
									) : key === 'itemPrice' ? (
										<h4 className="product-text" key={key}>
											${value}
										</h4>
									) : null
								})}
							</CardS>
						</Link>
					)
				})}
			</ContainerS>
		</>
	)
}
export { AllProducts }
