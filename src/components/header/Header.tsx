import { Link } from 'react-router-dom'
import { NavBar } from '../navbar/NavBar'
import { HeaderS } from '../styled-generics/HeaderS'

function Header() {
	return (
		<HeaderS>
			<Link to="/">
				<h1>NFT Market</h1>
			</Link>
			<NavBar></NavBar>
		</HeaderS>
	)
}

export { Header }
