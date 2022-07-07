import { Link, Route, Routes } from 'react-router-dom'

import { State } from '../helpers/types'

import { ContainerS } from '../styled-generics/ContainerS'

import { AccessoriesProducts } from './AccessoriesProducts'
import { MensProducts } from './MensProducts'
import { WomensProducts } from './WomensProducts'

function Home({ state }: { state: State }) {
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
				<div className="homepage-photo">
					<img
						src="https://images.pexels.com/photos/6975251/pexels-photo-6975251.jpeg"
						alt="trendy-fit-young-female-athlete-standing-in-studio-with-hand-on-waist"
						width={480}
						height={720}
					/>
					<figcaption>Photo by SHVETS production at pexels.com</figcaption>
					<h4>Comfy. Chic. Loungewear.</h4>
					<Link to="products/products/womens">Shop Collection</Link>
				</div>

				<div className="homepage-photo">
					<img
						src="https://images.pexels.com/photos/5112344/pexels-photo-5112344.jpeg"
						alt="stylish-woman-in-hat-in-studio"
						width={480}
						height={720}
					/>
					<figcaption>Photo by Julia Volk at pexels.com</figcaption>
					<h4>Creative. Technology. Professional.</h4>
					<Link to="products/products/accessories">Shop Collection</Link>
				</div>

				<div className="homepage-photo">
					<img
						src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg"
						alt="man-in-white-v-neck-t-shirt-and-black-pants"
						width={480}
						height={720}
					/>
					<figcaption>Photo by Spencer Selover at pexels.com</figcaption>
					<h4>Crypto. Blockchain. Web 3.0</h4>
					<Link to="products/products/mens">Shop Collection</Link>
				</div>
			</ContainerS>

			{/*  */}
			{/*  */}
			<Routes>
				<Route
					path="products/products/womens"
					element={<WomensProducts state={state} />}
				></Route>
				<Route
					path="products/products/mens"
					element={<MensProducts state={state} />}
				></Route>
				<Route
					path="products/products/accessories"
					element={<AccessoriesProducts state={state} />}
				></Route>
			</Routes>
		</>
	)
}
export { Home }
