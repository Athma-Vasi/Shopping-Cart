import { accessoriesData } from '../../helpers/data/accessoriesData'

function Store() {
	return (
		<>
			<h3>Store</h3>
			{Object.entries(Object.fromEntries(accessoriesData)).map(([idNum, mapObj]) =>
				Object.entries(Object.fromEntries(mapObj)).map(([descr, item]) => {
					return descr === 'src' ? (
						<img key={idNum} src={item} alt={descr} width={480} height={640} />
					) : (
						<div key={idNum}>
							<h5>key: {descr}</h5>
							<h5>value: {item}</h5>
						</div>
					)
				})
			)}
		</>
	)
}
export { Store }

// useEffect(() => {
// 	try {
// 		const fetchData = (async () => {
// 			const response = await fetch(
// 				'https://api.pexels.com/v1/search?query=shoes&size=small&orientation=square&per_page=16&page=1',
// 				{
// 					headers: {
// 						Authorization: '563492ad6f9170000100000133155030ab404675883db9f894b00013',
// 					},
// 				}
// 			)
// 			const data: PhotosResponse = await response.json()

// 			setAPIResult(data)
// 		})()
// 	} catch (err: any) {
// 		throw new Error('data fetching failed', { cause: err })
// 	}
// }, [])
