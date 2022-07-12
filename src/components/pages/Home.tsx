import { Link, Outlet } from 'react-router-dom'
import React from 'react'

import { State, ThemeState } from '../helpers/types'

import { ContainerS } from '../styled-generics/ContainerS'

function Home({
	state,
	themeState,
}: {
	state: State
	themeState: ThemeState
}): JSX.Element {
	return (
		<React.Fragment>
			<ContainerS themeState={themeState}>
				<div className="homepage-photo">
					<img
						src="https://images.pexels.com/photos/6975251/pexels-photo-6975251.jpeg"
						alt="trendy-fit-young-female-athlete-standing-in-studio-with-hand-on-waist"
						width={480}
						height={720}
					/>
					<figcaption>Photo by SHVETS production at pexels.com</figcaption>
					<h4>Comfy. Chic. Loungewear.</h4>
					<Link to="/products/womens">Shop Collection</Link>
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
					<Link to="/products/accessories">Shop Collection</Link>
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
					<Link to="/products/mens">Shop Collection</Link>
				</div>
			</ContainerS>

			<Outlet></Outlet>
		</React.Fragment>
	)
}
export { Home }
