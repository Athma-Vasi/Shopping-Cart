import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
	it('renders without crashing', () => {
		render(<App />)
		expect(
			screen.getByText('563492ad6f9170000100000133155030ab404675883db9f894b00013')
		).toBeInTheDocument()
	})
})

describe('Header', () => {
	it('renders document title', () => {
		render(<App />)
		expect(screen.getByRole('heading', { name: 'NFT Market' })).toBeInTheDocument()
	})
})

describe('NavBar', () => {
	it('renders navbar', () => {
		render(<App />)
		expect(screen.getByRole('navigation')).toBeInTheDocument()
	})
})
