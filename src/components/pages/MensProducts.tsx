import { ContainerS } from '../styled-generics/ContainerS'
import { CardS } from '../styled-generics/CardS'
import { mensData } from '../helpers/data/mensData'
import { Link } from 'react-router-dom'
import { State } from '../helpers/types'

function MensProducts({ state }: { state: State }) {
	return (
		<>
			<h3>mens products</h3>
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
export { MensProducts }
