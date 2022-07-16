import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

import { Action, Dispatch, State, ThemeState } from '../helpers/types'

import { ContainerS } from '../styled-generics/ContainerS'

function Products({
	state,
	dispatch,
	action,
	themeState,
}: {
	state: State
	dispatch: React.Dispatch<Dispatch>
	action: Action
	themeState: ThemeState
}): JSX.Element {
	return (
		<React.Fragment>
			<ContainerS themeState={themeState}>
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
											color: isActive
												? `${
														themeState.isDefaultMode
															? themeState.colours.default?.primary
															: themeState.colours.dark?.primary
												  }`
												: 'inherit',
										}
									}}
									to="all"
									data-cy="all-products-link"
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
											color: isActive
												? `${
														themeState.isDefaultMode
															? themeState.colours.default?.primary
															: themeState.colours.dark?.primary
												  }`
												: 'inherit',
										}
									}}
									to="accessories"
									data-cy="accessories-link"
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
											color: isActive
												? `${
														themeState.isDefaultMode
															? themeState.colours.default?.primary
															: themeState.colours.dark?.primary
												  }`
												: 'inherit',
										}
									}}
									to="mens"
									data-cy="mens-link"
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
											color: isActive
												? `${
														themeState.isDefaultMode
															? themeState.colours.default?.primary
															: themeState.colours.dark?.primary
												  }`
												: 'inherit',
										}
									}}
									to="womens"
									data-cy="womens-link"
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
