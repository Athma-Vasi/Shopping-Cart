import { useEffect, useState } from 'react'
import { PhotosResponse } from '../../helpers/types'

function Store() {
	const [apiResult, setAPIResult] = useState<null | PhotosResponse>(null)

	useEffect(() => {
		try {
			const fetchData = (async () => {
				const response = await fetch(
					'https://api.pexels.com/v1/search?query=shoes&size=small&orientation=square&per_page=16&page=1',
					{
						headers: {
							Authorization: '563492ad6f9170000100000133155030ab404675883db9f894b00013',
						},
					}
				)
				const data: PhotosResponse = await response.json()

				setAPIResult(data)
			})()
		} catch (err: any) {
			throw new Error('data fetching failed', { cause: err })
		}
	}, [])

	return (
		<>
			<h3>Store</h3>
		</>
	)
}
export { Store }
