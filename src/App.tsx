import { Outlet } from 'react-router'
import './App.css'
import { Header } from './components/header/Header'
import { WrapperS } from './components/styled-generics/WrapperS'
import { ContainerS } from './components/styled-generics/ContainerS'
import { Footer } from './components/footer/Footer'
import { CardS } from './components/styled-generics/CardS'
import { Link } from 'react-router-dom'

function App() {
	return (
		<WrapperS>
			<ContainerS
			// style={{
			// 	background: `url('https://images.pexels.com/photos/7506661/pexels-photo-7506661.jpeg'), url("https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg") `,
			// 	backgroundSize: '50% 100%, 50% 100%',
			// 	backgroundPosition: '0% 100%, 100% 100%',
			// 	backgroundRepeat: 'no-repeat',
			// }}
			>
				<Header></Header>
				<h5>563492ad6f9170000100000133155030ab404675883db9f894b00013</h5>
				<ContainerS>
					<CardS>
						<div
							className="background"
							style={{
								background: `url('https://images.pexels.com/photos/3732664/pexels-photo-3732664.jpeg')`,
								backgroundSize: 'cover',
								backgroundPosition: 'center',
								backgroundRepeat: 'no-repeat',
								width: '100%',
								height: '100%',
							}}
						></div>
						<h4>Brand new alternative chic collection!</h4>
						<Link to="/store">Shop now</Link>
					</CardS>
					<CardS>
						<div
							className="background"
							style={{
								background: `url('https://images.pexels.com/photos/2741701/pexels-photo-2741701.jpeg')`,
								backgroundSize: 'cover',
								backgroundPosition: 'center',
								backgroundRepeat: 'no-repeat',
								width: '100%',
								height: '100%',
							}}
						></div>
						<h4>Fresh spring styles!</h4>
						<Link to="/store">Shop now</Link>
					</CardS>
				</ContainerS>
				<Outlet></Outlet>
				<Footer></Footer>
			</ContainerS>
		</WrapperS>
	)
}

export default App
