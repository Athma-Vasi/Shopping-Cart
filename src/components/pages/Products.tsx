import React from 'react'
import { useParams } from 'react-router'
import { NavLink, Route, Routes } from 'react-router-dom'
import { ContainerS } from '../styled-generics/ContainerS'
import { AccessoriesProducts } from './AccessoriesProducts'
import { AllProducts } from './AllProducts'
import { MensProducts } from './MensProducts'
import { WomensProducts } from './WomensProducts'

function Products() {
	return (
		<React.Fragment>
			<ContainerS>
				<div className="sidebar">
					<h3>Categories</h3>
					<ul>
						<li>
							<NavLink
								style={({ isActive }) => {
									return {
										display: 'block',
										margin: '1rem 0px',
										color: isActive ? 'darkgrey' : '#000',
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
										color: isActive ? 'darkgrey' : '#000',
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
										color: isActive ? 'darkgrey' : '#000',
									}
								}}
								to="products/mens"
							>
								Mens fashion
							</NavLink>
						</li>
						<li>
							<NavLink
								style={({ isActive }) => {
									return {
										display: 'block',
										margin: '1rem 0px',
										color: isActive ? 'darkgrey' : '#000',
									}
								}}
								to="products/womens"
							>
								Womens fashion
							</NavLink>
						</li>
					</ul>
				</div>

				<div className="productListing">
					<Routes>
						<Route index element={<AllProducts />} />
						<Route path="products/all" element={<AllProducts />} />
						<Route path="products/accessories" element={<AccessoriesProducts />} />
						<Route path="products/mens" element={<MensProducts />} />
						<Route path="products/womens" element={<WomensProducts />}></Route>
					</Routes>
				</div>
			</ContainerS>
		</React.Fragment>
	)
}
export { Products }
