import './App.css'
import { accessoriesData } from './helpers/data/accessoriesData'

function App() {
	return (
		<div className="App">
			<h5>28405745-afba05afaff6b2d73c3e52d3d</h5>
			{Object.entries(Object.fromEntries(accessoriesData)).map(([key, value]) => {
				return (
					<div key={key}>
						{Object.entries(Object.fromEntries(value)).map(([key_, value_]) => {
							return key_ === 'src' ? (
								<img key={key_} src={value_} alt="" />
							) : (
								<p key={key_}>{value_}</p>
							)
						})}
					</div>
				)
			})}
		</div>
	)
}

export default App
