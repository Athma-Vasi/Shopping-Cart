import { State, ThemeState } from '../helpers/types'

import { ContainerS } from '../styled-generics/ContainerS'

function About({ state, themeState }: { state: State; themeState: ThemeState }) {
	return (
		<div className="about-page">
			<ContainerS themeState={themeState}>
				<h2
					style={{
						color: themeState.isDefaultMode
							? themeState.colours.default?.primary
							: themeState.colours.dark?.primary,
					}}
				>
					THE FASHION EMPORIUM
				</h2>
				<ContainerS themeState={themeState}>
					<p>Bringing you the hottest trends since 2022.</p>
					<div className="about-img">
						<img
							src="https://images.pexels.com/photos/6939138/pexels-photo-6939138.jpeg"
							alt="women-wearing-black-leather-coat"
							width={320}
							height={480}
						/>
						<figcaption>Photo by Polina Tankilevitch at pexels.com</figcaption>
					</div>
				</ContainerS>
				<ContainerS themeState={themeState}>
					<div className="about-img">
						<img
							src="https://images.pexels.com/photos/6737681/pexels-photo-6737681.jpeg"
							alt="happy-girls-standing-on-brown-grass-field"
							width={320}
							height={480}
						/>
						<figcaption>Photo by Gaspar Zaldo at pexels.com</figcaption>
					</div>
					<p>The latest fashion and trends are just one click away!</p>
				</ContainerS>
				<ContainerS themeState={themeState}>
					<p>Carefully selected by a panel of experienced fashionistas.</p>
					<div className="about-img">
						<img
							src="https://images.pexels.com/photos/5325561/pexels-photo-5325561.jpeg"
							alt="stylish-youngsters-in-casual-denim-clothes"
							width={320}
							height={480}
						/>
						<figcaption>Photo by Anna Shvets at pexels.com</figcaption>
					</div>
				</ContainerS>
				<ContainerS themeState={themeState}>
					<div className="about-img">
						<img
							src="https://images.pexels.com/photos/10725486/pexels-photo-10725486.jpeg"
							alt="white-ceramic-vase-on-glass-table"
							width={320}
							height={480}
						/>
						<figcaption>Photo by WeStarMoney at pexels.com</figcaption>
					</div>
					<p>Located in the style capital of the world - Edmonton, AB.</p>
				</ContainerS>
			</ContainerS>
		</div>
	)
}
export { About }
