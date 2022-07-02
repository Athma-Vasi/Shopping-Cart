import './App.css'

function App() {
	const pexels = (async function () {
		const response = await fetch(
			'https://api.pexels.com/v1/search?query=shoes&size=small&orientation=square&per_page=16&page=1',
			{
				headers: {
					Authorization: '563492ad6f9170000100000133155030ab404675883db9f894b00013',
				},
			}
		)
		const data = await response.json()
		console.log(data)
	})()

	return (
		<div className="App">
			<h5>563492ad6f9170000100000133155030ab404675883db9f894b00013</h5>
		</div>
	)
}

export default App
