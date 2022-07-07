import { ContainerS } from '../styled-generics/ContainerS'
import { CardS } from '../styled-generics/CardS'
import { accessoriesData } from '../helpers/data/accessoriesData'
import { Link } from 'react-router-dom'
import { State } from '../helpers/types'

function AccessoriesProducts({ state }: { state: State }) {
	return (
		<>
			<h3>accessories products</h3>
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
								key={key}
							>
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
export { AccessoriesProducts }
