import { mount } from 'cypress/react'
import { first } from 'cypress/types/lodash'
import App from './App'

describe('1. <App>', () => {
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

	//Products - All products
	it('displays All Products when sidebar `All` link is clicked', () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="all-products-link"]').click()
		cy.get('[data-cy="title-allProducts"]').should('contain', 'All products')
	})

	//Products - All products - Product Details
	it('displays women Product Details img when product is clicked', () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="all-products-link"]').click()
		cy.get('[data-cy="allProducts-womenCard"]').first().click()
		cy.get('[data-cy="productDetails-img"]').should('have.attr', 'src')
	})

	it('displays women Product Details caption when product is clicked', () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="all-products-link"]').click()
		cy.get('[data-cy="allProducts-womenCard"]').first().click()
		cy.get('[data-cy="productDetails-caption"]').should('contain', 'Photo by')
	})

	it('displays women Product Details name when product is clicked', () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="all-products-link"]').click()
		cy.get('[data-cy="allProducts-womenCard"]').first().click()
		cy.get('[data-cy="productDetails-name"]').should('contain', 'Shirt')
	})

	it('displays women Product Details description when product is clicked', () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="all-products-link"]').click()
		cy.get('[data-cy="allProducts-womenCard"]').first().click()
		cy.get('[data-cy="productDetails-description"]').should(
			'contain',
			'Dark grey, short sleeved, classic long fit'
		)
	})

	it('displays women Product Details price when product is clicked', () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="all-products-link"]').click()
		cy.get('[data-cy="allProducts-womenCard"]').first().click()
		cy.get('[data-cy="productDetails-price"]').should('contain', '$29.99')
	})

	it('displays women Product Details <select> input when product is clicked', () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="all-products-link"]').click()
		cy.get('[data-cy="allProducts-womenCard"]').first().click()
		cy.get('[data-cy="productDetails-select"]').should(
			'contain',
			'--Please choose an amount--'
		)
	})

	it('displays women Product Details - Add to Cart button when product is clicked', () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="all-products-link"]').click()
		cy.get('[data-cy="allProducts-womenCard"]').first().click()
		cy.get('[data-cy="productDetails-bttn-addCart"]').should('contain', 'Add to Cart')
	})

	it('displays women Product Details - `Item has been added to cart` when product is clicked', () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="all-products-link"]').click()
		cy.get('[data-cy="allProducts-womenCard"]').first().click()
		cy.get('[data-cy="productDetails-select"]').select('2')
		cy.get('[data-cy="productDetails-bttn-addCart"]').click()
		cy.get('[data-cy="productDetails-cashier-mssg"]').should(
			'contain',
			'Item has been added to cart!'
		)
	})

	it('displays women Product Details - `Complete order and checkout` button when product is clicked', () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="all-products-link"]').click()
		cy.get('[data-cy="allProducts-womenCard"]').first().click()
		cy.get('[data-cy="productDetails-select"]').select('2')
		cy.get('[data-cy="productDetails-bttn-addCart"]').click()
		cy.get('[data-cy="productDetails-cashier-bttn"]').should(
			'contain',
			'Complete order and checkout'
		)
	})

	//Products - All products - women
	it('displays a women product card img when sidebar `All` link is clicked', () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="all-products-link"]').click()
		cy.get('[data-cy="allProducts-womenCard-img"]').should('have.attr', 'src')
	})

	it('displays a women product card name when sidebar `All` link is clicked', () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="all-products-link"]').click()
		cy.get('[data-cy="allProducts-womenCard-name"]').should('contain', 'Shirt')
	})

	it('displays a women product card price when sidebar `All` link is clicked', () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="all-products-link"]').click()
		cy.get('[data-cy="allProducts-womenCard-price"]').should('contain', '$29.99')
	})

	//Products - All products - men
	it('displays a men product card img when sidebar `All` link is clicked', () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="all-products-link"]').click()
		cy.get('[data-cy="allProducts-menCard-img"]').should('have.attr', 'src')
	})

	it('displays a men product card name when sidebar `All` link is clicked', () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="all-products-link"]').click()
		cy.get('[data-cy="allProducts-menCard-name"]').should('contain', 'Shirt')
	})

	it('displays a men product card price when sidebar `All` link is clicked', () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="all-products-link"]').click()
		cy.get('[data-cy="allProducts-menCard-price"]').should('contain', '$19.99')
	})

	//Products - All products - accessories
	it('displays an accessories product card img when sidebar `All` link is clicked', () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="all-products-link"]').click()
		cy.get('[data-cy="allProducts-accessoriesCard-img"]').should('have.attr', 'src')
	})

	it('displays an accessories product card name when sidebar `All` link is clicked', () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="all-products-link"]').click()
		cy.get('[data-cy="allProducts-accessoriesCard-name"]').should('contain', 'Shoes')
	})

	it('displays an accessories product card price when sidebar `All` link is clicked', () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="all-products-link"]').click()
		cy.get('[data-cy="allProducts-accessoriesCard-price"]').should('contain', '$49.99')
	})

	//Products - Accessories
	it('displays Accessories when sidebar `Accessories` link is clicked', () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="accessories-link"]').click()
		cy.get('[data-cy="title-accessories-product"]').should('contain', 'Accessories')
	})

	it('displays an accessories product card img when sidebar `Accessories` link is clicked', () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="accessories-link"]').click()
		cy.get('[data-cy="accessoriesProducts-accessoriesCard-img"]').should(
			'have.attr',
			'src'
		)
	})

	it('displays an accessories product card name when sidebar `Accessories` link is clicked', () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="accessories-link"]').click()
		cy.get('[data-cy="accessoriesProducts-accessoriesCard-name"]').should(
			'have.class',
			'product-text'
		)
	})

	it('displays an accessories product card price when sidebar `Accessories` link is clicked', () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="accessories-link"]').click()
		cy.get('[data-cy="accessoriesProducts-accessoriesCard-price"]').should(
			'have.class',
			'product-text'
		)
	})
	//Products - Accessories - Product Details
	it('displays an accessories product image when an accessories product card is clicked', () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="accessories-link"]').click()
		cy.get('[data-cy="accessoriesProducts-accessoriesCard-img"]').last().click()
		cy.get('[data-cy="productDetails-img"]').should('have.attr', 'src')
	})

	it('displays an accessories product caption when an accessories product card is clicked', () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="accessories-link"]').click()
		cy.get('[data-cy="accessoriesProducts-accessoriesCard-img"]').last().click()
		cy.get('[data-cy="productDetails-caption"]').should('contain', 'Photo by')
	})

	it('displays an accessories product name when an accessories product card is clicked', () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="accessories-link"]').click()
		cy.get('[data-cy="accessoriesProducts-accessoriesCard-img"]').last().click()
		cy.get('[data-cy="productDetails-name"]').should('contain', 'Bracelet')
	})

	it('displays an accessories product price when an accessories product card is clicked', () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="accessories-link"]').click()
		cy.get('[data-cy="accessoriesProducts-accessoriesCard-img"]').last().click()
		cy.get('[data-cy="productDetails-price"]').should('contain', '$99.99')
	})

	it('displays an accessories product description when an accessories product card is clicked', () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="accessories-link"]').click()
		cy.get('[data-cy="accessoriesProducts-accessoriesCard-img"]').last().click()
		cy.get('[data-cy="productDetails-description"]').should(
			'contain',
			'Sailor anchor bracelet'
		)
	})

	it('displays an accessories product <select> input when an accessories product card is clicked', () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="accessories-link"]').click()
		cy.get('[data-cy="accessoriesProducts-accessoriesCard-img"]').last().click()
		cy.get('[data-cy="productDetails-select"]').should(
			'contain',
			'--Please choose an amount--'
		)
	})

	it('displays an accessories product `Add to cart` button when an accessories product card is clicked then item amount is selected', () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="accessories-link"]').click()
		cy.get('[data-cy="accessoriesProducts-accessoriesCard-img"]').last().click()
		cy.get('[data-cy="productDetails-bttn-addCart"]').should('contain', 'Add to Cart')
	})

	it('displays an accessories product message `Item has been added to cart!` when an accessories product card is clicked then item amount is selected then `Add to Cart` button is clicked', () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="accessories-link"]').click()
		cy.get('[data-cy="accessoriesProducts-accessoriesCard-img"]').last().click()
		cy.get('[data-cy="productDetails-select"]').select('2')
		cy.get('[data-cy="productDetails-bttn-addCart"]').click()
		cy.get('[data-cy="productDetails-cashier-mssg"]').should(
			'contain',
			'Item has been added to cart!'
		)
	})

	it('displays an accessories product button `Complete order and checkout` when an accessories product card is clicked then item amount is selected then `Add to Cart` button is clicked', () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="accessories-link"]').click()
		cy.get('[data-cy="accessoriesProducts-accessoriesCard-img"]').last().click()
		cy.get('[data-cy="productDetails-select"]').select('2')
		cy.get('[data-cy="productDetails-bttn-addCart"]').click()
		cy.get('[data-cy="productDetails-cashier-bttn"]').should(
			'contain',
			'Complete order and checkout'
		)
	})

	//Products - Men
	it("displays Men's fashion when sidebar `Men's fashion` link is clicked", () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="mens-link"]').click()
		cy.get('[data-cy="title-men-product"]').should('contain', "Men's fashion")
	})

	it("displays a men product card img when sidebar `Men's fashion` link is clicked", () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="mens-link"]').click()
		cy.get('[data-cy="mensProducts-menCard-img"]').should('have.attr', 'src')
	})

	it("displays a men product card name when sidebar `Men's fashion` link is clicked", () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="mens-link"]').click()
		cy.get('[data-cy="mensProducts-menCard-name"]').should('have.class', 'product-text')
	})

	it("displays a men product card price when sidebar `Men's fashion` link is clicked", () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="mens-link"]').click()
		cy.get('[data-cy="mensProducts-menCard-price"]').should('have.class', 'product-text')
	})

	//Products - Men - Product Details
	it('displays a mens product image when a mens product card is clicked', () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="mens-link"]').click()
		cy.get('[data-cy="mensProducts-menCard-img"]').last().click()
		cy.get('[data-cy="productDetails-img"]').should('have.attr', 'src')
	})

	it('displays a mens product caption when a mens product card is clicked', () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="mens-link"]').click()
		cy.get('[data-cy="mensProducts-menCard-img"]').last().click()
		cy.get('[data-cy="productDetails-caption"]').should('contain', 'Photo by')
	})

	it('displays a mens product name when a mens product card is clicked', () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="mens-link"]').click()
		cy.get('[data-cy="mensProducts-menCard-img"]').last().click()
		cy.get('[data-cy="productDetails-name"]').should('contain', 'Sweater')
	})

	it('displays a mens product price when a mens product card is clicked', () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="mens-link"]').click()
		cy.get('[data-cy="mensProducts-menCard-img"]').last().click()
		cy.get('[data-cy="productDetails-price"]').should('contain', '$79.99')
	})

	it('displays a mens product description when a mens product card is clicked', () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="mens-link"]').click()
		cy.get('[data-cy="mensProducts-menCard-img"]').last().click()
		cy.get('[data-cy="productDetails-description"]').should(
			'contain',
			'A cream sweater that is perfect for the winter.'
		)
	})

	it('displays a mens product <select> input when a mens product card is clicked', () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="mens-link"]').click()
		cy.get('[data-cy="mensProducts-menCard-img"]').last().click()
		cy.get('[data-cy="productDetails-select"]').should(
			'contain',
			'--Please choose an amount--'
		)
	})

	it('displays a mens product `Add to cart` button when a mens product card is clicked then item amount is selected', () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="mens-link"]').click()
		cy.get('[data-cy="mensProducts-menCard-img"]').last().click()
		cy.get('[data-cy="productDetails-bttn-addCart"]').should('contain', 'Add to Cart')
	})

	it('displays a mens product message `Item has been added to cart!` when a mens product card is clicked then item amount is selected then `Add to Cart` button is clicked', () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="mens-link"]').click()
		cy.get('[data-cy="mensProducts-menCard-img"]').last().click()
		cy.get('[data-cy="productDetails-select"]').select('2')
		cy.get('[data-cy="productDetails-bttn-addCart"]').click()
		cy.get('[data-cy="productDetails-cashier-mssg"]').should(
			'contain',
			'Item has been added to cart!'
		)
	})

	it('displays a mens product button `Complete order and checkout` when a mens product card is clicked then item amount is selected then `Add to Cart` button is clicked', () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="mens-link"]').click()
		cy.get('[data-cy="mensProducts-menCard-img"]').last().click()
		cy.get('[data-cy="productDetails-select"]').select('2')
		cy.get('[data-cy="productDetails-bttn-addCart"]').click()
		cy.get('[data-cy="productDetails-cashier-bttn"]').should(
			'contain',
			'Complete order and checkout'
		)
	})

	//Products - Women
	it("displays Women's fashion when sidebar `Women's fashion` link is clicked", () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="womens-link"]').click()
		cy.get('[data-cy="title-women-product"]').should('contain', "Women's fashion")
	})

	it("displays a women product card img when sidebar `Women's fashion` link is clicked", () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="womens-link"]').click()
		cy.get('[data-cy="womensProducts-womenCard-img"]').should('have.attr', 'src')
	})

	it("displays a women product card img when sidebar `Women's fashion` link is clicked", () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="womens-link"]').click()
		cy.get('[data-cy="womensProducts-womenCard-name"]').should(
			'have.class',
			'product-text'
		)
	})

	it("displays a women product card img when sidebar `Women's fashion` link is clicked", () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="womens-link"]').click()
		cy.get('[data-cy="womensProducts-womenCard-price"]').should(
			'have.class',
			'product-text'
		)
	})

	//All Products - Womens - Product Details
	it('displays a womens product image when a womens product card is clicked', () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="womens-link"]').click()
		cy.get('[data-cy="womensProducts-womenCard-img"]').last().click()
		cy.get('[data-cy="productDetails-img"]').should('have.attr', 'src')
	})

	it('displays a womens product caption when a womens product card is clicked', () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="womens-link"]').click()
		cy.get('[data-cy="womensProducts-womenCard-img"]').last().click()
		cy.get('[data-cy="productDetails-caption"]').should('contain', 'Photo by')
	})

	it('displays a womens product name when a womens product card is clicked', () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="womens-link"]').click()
		cy.get('[data-cy="womensProducts-womenCard-img"]').last().click()
		cy.get('[data-cy="productDetails-name"]').should('contain', 'Sweater')
	})

	it('displays a womens product price when a womens product card is clicked', () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="womens-link"]').click()
		cy.get('[data-cy="womensProducts-womenCard-img"]').last().click()
		cy.get('[data-cy="productDetails-price"]').should('contain', '$89.99')
	})

	it('displays a womens product description when a womens product card is clicked', () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="womens-link"]').click()
		cy.get('[data-cy="womensProducts-womenCard-img"]').last().click()
		cy.get('[data-cy="productDetails-description"]').should(
			'contain',
			'Genuine merino wool dark yellow sweater, authentically sourced.'
		)
	})

	it('displays a womens product <select> input when a womens product card is clicked', () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="womens-link"]').click()
		cy.get('[data-cy="womensProducts-womenCard-img"]').last().click()
		cy.get('[data-cy="productDetails-select"]').should(
			'contain',
			'--Please choose an amount--'
		)
	})

	it('displays a womens product `Add to cart` button when a womens product card is clicked then item amount is selected', () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="womens-link"]').click()
		cy.get('[data-cy="womensProducts-womenCard-img"]').last().click()
		cy.get('[data-cy="productDetails-bttn-addCart"]').should('contain', 'Add to Cart')
	})

	it('displays a womens product message `Item has been added to cart!` when a womens product card is clicked then item amount is selected then `Add to Cart` button is clicked', () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="womens-link"]').click()
		cy.get('[data-cy="womensProducts-womenCard-img"]').last().click()
		cy.get('[data-cy="productDetails-select"]').select('2')
		cy.get('[data-cy="productDetails-bttn-addCart"]').click()
		cy.get('[data-cy="productDetails-cashier-mssg"]').should(
			'contain',
			'Item has been added to cart!'
		)
	})

	it('displays a womens product button `Complete order and checkout` when a womens product card is clicked then item amount is selected then `Add to Cart` button is clicked', () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="womens-link"]').click()
		cy.get('[data-cy="womensProducts-womenCard-img"]').last().click()
		cy.get('[data-cy="productDetails-select"]').select('2')
		cy.get('[data-cy="productDetails-bttn-addCart"]').click()
		cy.get('[data-cy="productDetails-cashier-bttn"]').should(
			'contain',
			'Complete order and checkout'
		)
	})
})
