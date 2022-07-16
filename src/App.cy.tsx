import { mount } from 'cypress/react'
import App from './App'

describe('<App>', () => {
	it('mounts', () => {
		mount(<App />)
	})

	//Navbar
	it('displays title', () => {
		mount(<App />)
		cy.get('[data-cy="nav-title"]').should('contain', 'THE FASHION EMPORIUM')
	})

	it('displays nav home link', () => {
		mount(<App />)
		cy.get('[data-cy="nav-home"]').should('contain', 'Home')
	})

	it('displays nav about link', () => {
		mount(<App />)
		cy.get('[data-cy="nav-about"]').should('contain', 'About')
	})

	it('displays nav products link', () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').should('contain', 'Products')
	})

	it('displays ☀️ icon as default', () => {
		mount(<App />)
		cy.get('[data-cy="nav-theme-toggle"]').should('contain', '☀️')
	})

	it('displays 🌑 icon when theme is clicked', () => {
		mount(<App />)
		cy.get('[data-cy="nav-theme-toggle"]').click()
		cy.get('[data-cy="nav-theme-toggle"]').should('contain', '🌑')
	})

	//Home
	it('displays women marketing text when home link is clicked', () => {
		mount(<App />)
		cy.get('[data-cy="nav-home"]').click()
		cy.get('[data-cy="home-women-text"]').should('contain', 'Comfy. Chic. Loungewear.')
	})

	it('displays link to women product page when home link is clicked', () => {
		mount(<App />)
		cy.get('[data-cy="home-women-link').click()
		cy.get('[data-cy="title-women-product"]').should('contain', "Women's fashion")
	})

	it('displays accessories marketing text when home link is clicked', () => {
		mount(<App />)
		cy.get('[data-cy="nav-home"]').click()
		cy.get('[data-cy="home-accessories-text"]').should(
			'contain',
			'Creative. Technology. Professional.'
		)
	})

	it('displays link to accessories product page when home link is clicked', () => {
		mount(<App />)
		cy.get('[data-cy="home-accessories-link').click()
		cy.get('[data-cy="title-accessories-product"]').should('contain', 'Accessories')
	})

	it('displays men marketing text when home link is clicked', () => {
		mount(<App />)
		cy.get('[data-cy="nav-home"]').click()
		cy.get('[data-cy="home-men-text"]').should('contain', 'Crypto. Blockchain. Web 3.0')
	})

	it('displays link to men product page when home link is clicked', () => {
		mount(<App />)
		cy.get('[data-cy="home-men-link').click()
		cy.get('[data-cy="title-men-product"]').should('contain', "Men's fashion")
	})

	//Products
	it('displays All Products when navbar products link is clicked', () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="title-allProducts"]').should('contain', 'All products')
	})

	it('displays All Products when sidebar `All` link is clicked', () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="all-products-link"]').click()
		cy.get('[data-cy="title-allProducts"]').should('contain', 'All products')
	})

	it('displays Accessories when sidebar `Accessories` link is clicked', () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="accessories-link"]').click()
		cy.get('[data-cy="title-accessories-product"]').should('contain', 'Accessories')
	})

	it("displays Men's fashion when sidebar `Men's fashion` link is clicked", () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="mens-link"]').click()
		cy.get('[data-cy="title-men-product"]').should('contain', "Men's fashion")
	})

	it("displays Women's fashion when sidebar `Women's fashion` link is clicked", () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="womens-link"]').click()
		cy.get('[data-cy="title-women-product"]').should('contain', "Women's fashion")
	})
})
