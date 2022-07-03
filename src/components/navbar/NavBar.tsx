import { Link } from 'react-router-dom'
import { HeaderS } from '../styled-generics/HeaderS'

function NavBar() {
	return (
		<HeaderS>
			<Link to="/">
				<h2>Home</h2>
			</Link>
			<Link to="/about">
				<h2>About</h2>
			</Link>
			<Link to="/store">
				<h2>Store</h2>
			</Link>
			<Link to="/contact">
				<h2>Contact</h2>
			</Link>
		</HeaderS>
	)
}

export { NavBar }
