import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import { State } from '../helpers/types'
import { ContainerS } from '../styled-generics/ContainerS'
import { AccessoriesProducts } from './AccessoriesProducts'
import { AllProducts } from './AllProducts'
import { MensProducts } from './MensProducts'
import { WomensProducts } from './WomensProducts'

function Products({ state }: { state: State }) {
	return (
		<React.Fragment>
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
				<div className="sidebar">
					<h3>Categories</h3>
					<ul>
						<li>
							<NavLink
								style={({ isActive }) => {
									return {
										display: 'block',
										margin: '1rem 0px',
										color: isActive ? 'lightcoral' : 'inherit',
									}
								}}
								to="products/all"
							>
								All
							</NavLink>
						</li>
						<li>
							<NavLink
								style={({ isActive }) => {
									return {
										display: 'block',
										margin: '1rem 0px',
										color: isActive ? 'lightcoral' : 'inherit',
									}
								}}
								to="products/accessories"
							>
								Accessories
							</NavLink>
						</li>
						<li>
							<NavLink
								style={({ isActive }) => {
									return {
										display: 'block',
										margin: '1rem 0px',
										color: isActive ? 'lightcoral' : 'inherit',
									}
								}}
								to="products/mens"
							>
								Men's fashion
							</NavLink>
						</li>
						<li>
							<NavLink
								style={({ isActive }) => {
									return {
										display: 'block',
										margin: '1rem 0px',
										color: isActive ? 'lightcoral' : 'inherit',
									}
								}}
								to="products/womens"
							>
								Women's fashion
							</NavLink>
						</li>
					</ul>
				</div>

				<div className="productListing">
					<Routes>
						<Route index element={<AllProducts state={state} />} />
						<Route path="products/all" element={<AllProducts state={state} />} />
						<Route
							path="products/accessories"
							element={<AccessoriesProducts state={state} />}
						/>
						<Route path="products/mens" element={<MensProducts state={state} />} />
						<Route
							path="products/womens"
							element={<WomensProducts state={state} />}
						></Route>
					</Routes>
				</div>
			</ContainerS>
		</React.Fragment>
	)
}
export { Products }
