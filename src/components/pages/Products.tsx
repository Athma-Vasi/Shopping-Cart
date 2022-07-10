import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

import { Action, Dispatch, State } from '../helpers/types'

import { ContainerS } from '../styled-generics/ContainerS'

function Products({
	state,
	dispatch,
	action,
}: {
	state: State
	dispatch: React.Dispatch<Dispatch>
	action: Action
}) {
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
				<div className="products">
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
									to="all"
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
									to="accessories"
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
									to="mens"
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
									to="womens"
								>
									Women's fashion
								</NavLink>
							</li>
						</ul>
					</div>

					<div className="productListing">
						<Outlet></Outlet>
					</div>
				</div>
			</ContainerS>
		</React.Fragment>
	)
}
export { Products }
