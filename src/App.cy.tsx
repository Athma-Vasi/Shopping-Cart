import { mount } from 'cypress/react'
import App from './App'

//checks every possible user interaction from home page to checkout page

describe('<App>', () => {
	it('mounts', () => {
		mount(<App />)
	})

	//Navbar
	it('displays title, navbar links: home, about, products, ☀️ (as default)', () => {
		mount(<App />)
		cy.get('[data-cy="nav-title"]').should('contain', 'THE FASHION EMPORIUM')
		cy.get('[data-cy="nav-home"]').should('contain', 'Home')
		cy.get('[data-cy="nav-about"]').should('contain', 'About')
		cy.get('[data-cy="nav-products"]').should('contain', 'Products')
	})

	it('displays ☀️ icon (as default) and 🌑 icon when theme is clicked', () => {
		mount(<App />)
		cy.get('[data-cy="nav-theme-toggle"]').should('contain', '☀️')
		cy.get('[data-cy="nav-theme-toggle"]').click()
		cy.get('[data-cy="nav-theme-toggle"]').should('contain', '🌑')
	})

	//Home
	it('displays women marketing text when home link is clicked, then displays link to women product page', () => {
		mount(<App />)
		cy.get('[data-cy="nav-home"]').click()
		cy.get('[data-cy="home-women-text"]').should('contain', 'Comfy. Chic. Loungewear.')

		cy.get('[data-cy="home-women-link').click()
		cy.get('[data-cy="title-women-product"]').should('contain', "Women's fashion")
	})

	it('displays accessories marketing text when home link is clicked, then displays link to accessories product page', () => {
		mount(<App />)
		cy.get('[data-cy="nav-home"]').click()
		cy.get('[data-cy="home-accessories-text"]').should(
			'contain',
			'Creative. Technology. Professional.'
		)

		cy.get('[data-cy="home-accessories-link').click()
		cy.get('[data-cy="title-accessories-product"]').should('contain', 'Accessories')
	})

	it('displays men marketing text when home link is clicked, then displays link to men product page', () => {
		mount(<App />)
		cy.get('[data-cy="nav-home"]').click()
		cy.get('[data-cy="home-men-text"]').should('contain', 'Crypto. Blockchain. Web 3.0')

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
	it('displays women Product Details: img, caption, name, description, price, <select> and `Add to cart` button when product is clicked', () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="all-products-link"]').click()
		cy.get('[data-cy="allProducts-womenCard"]').first().click()

		cy.get('[data-cy="productDetails-img"]').should('have.attr', 'src')
		cy.get('[data-cy="productDetails-caption"]').should('contain', 'Photo by')
		cy.get('[data-cy="productDetails-name"]').should('contain', 'Shirt')
		cy.get('[data-cy="productDetails-description"]').should(
			'contain',
			'Dark grey, short sleeved, classic long fit'
		)
		cy.get('[data-cy="productDetails-price"]').should('contain', '$29.99')
		cy.get('[data-cy="productDetails-select"]').should(
			'contain',
			'--Please choose an amount--'
		)
		cy.get('[data-cy="productDetails-bttn-addCart"]').should('contain', 'Add to Cart')
	})

	it('displays women Product Details - `Item has been added to cart` and `Complete order and checkout` button when product is clicked', () => {
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
		cy.get('[data-cy="productDetails-cashier-bttn"]').should(
			'contain',
			'Complete order and checkout'
		)
	})

	//Products - All products - women
	it('displays a women product card: img, name & price when sidebar `All` link is clicked', () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="all-products-link"]').click()

		cy.get('[data-cy="allProducts-womenCard-img"]').should('have.attr', 'src')
		cy.get('[data-cy="allProducts-womenCard-name"]').should('contain', 'Shirt')
		cy.get('[data-cy="allProducts-womenCard-price"]').should('contain', '$29.99')
	})

	//Products - All products - men
	it('displays a men product card: img, name & price when sidebar `All` link is clicked', () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="all-products-link"]').click()

		cy.get('[data-cy="allProducts-menCard-img"]').should('have.attr', 'src')
		cy.get('[data-cy="allProducts-menCard-name"]').should('contain', 'Shirt')
		cy.get('[data-cy="allProducts-menCard-price"]').should('contain', '$19.99')
	})

	//Products - All products - accessories
	it('displays an accessories product card: img, name & price when sidebar `All` link is clicked', () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="all-products-link"]').click()

		cy.get('[data-cy="allProducts-accessoriesCard-img"]').should('have.attr', 'src')
		cy.get('[data-cy="allProducts-accessoriesCard-name"]').should('contain', 'Shoes')
		cy.get('[data-cy="allProducts-accessoriesCard-price"]').should('contain', '$49.99')
	})

	//Products - Accessories
	it('displays Accessories: title, card: img, name, price when sidebar `Accessories` link is clicked', () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="accessories-link"]').click()

		cy.get('[data-cy="title-accessories-product"]').should('contain', 'Accessories')
		cy.get('[data-cy="accessoriesProducts-accessoriesCard-img"]').should(
			'have.attr',
			'src'
		)
		cy.get('[data-cy="accessoriesProducts-accessoriesCard-name"]').should(
			'have.class',
			'product-text'
		)
		cy.get('[data-cy="accessoriesProducts-accessoriesCard-price"]').should(
			'have.class',
			'product-text'
		)
	})

	//Products - Accessories - Product Details
	it('displays an accessories product: image, caption, name, price, description, <select> and `Add to cart` button when an accessories product card is clicked', () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="accessories-link"]').click()
		cy.get('[data-cy="accessoriesProducts-accessoriesCard-img"]').last().click()

		cy.get('[data-cy="productDetails-img"]').should('have.attr', 'src')
		cy.get('[data-cy="productDetails-caption"]').should('contain', 'Photo by')
		cy.get('[data-cy="productDetails-name"]').should('contain', 'Bracelet')
		cy.get('[data-cy="productDetails-price"]').should('contain', '$99.99')
		cy.get('[data-cy="productDetails-description"]').should(
			'contain',
			'Sailor anchor bracelet'
		)
		cy.get('[data-cy="productDetails-select"]').should(
			'contain',
			'--Please choose an amount--'
		)
		cy.get('[data-cy="productDetails-bttn-addCart"]').should('contain', 'Add to Cart')
	})

	it('displays an accessories product message `Item has been added to cart!` and `Complete order and checkout` button when an accessories product card is clicked then item amount is selected then `Add to Cart` button is clicked', () => {
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
		cy.get('[data-cy="productDetails-cashier-bttn"]').should(
			'contain',
			'Complete order and checkout'
		)
	})

	//Products - Men
	it("displays `Men's fashion`, men product card: img, name & price when sidebar `Men's fashion` link is clicked", () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="mens-link"]').click()

		cy.get('[data-cy="title-men-product"]').should('contain', "Men's fashion")
		cy.get('[data-cy="mensProducts-menCard-img"]').should('have.attr', 'src')
		cy.get('[data-cy="mensProducts-menCard-name"]').should('have.class', 'product-text')
		cy.get('[data-cy="mensProducts-menCard-price"]').should('have.class', 'product-text')
	})

	//Products - Men - Product Details
	it('displays a mens product: image, caption, name, price, description, <select>, `Add to cart` button when a mens product card is clicked', () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="mens-link"]').click()
		cy.get('[data-cy="mensProducts-menCard-img"]').last().click()

		cy.get('[data-cy="productDetails-img"]').should('have.attr', 'src')
		cy.get('[data-cy="productDetails-caption"]').should('contain', 'Photo by')
		cy.get('[data-cy="productDetails-name"]').should('contain', 'Sweater')
		cy.get('[data-cy="productDetails-price"]').should('contain', '$79.99')
		cy.get('[data-cy="productDetails-description"]').should(
			'contain',
			'A cream sweater that is perfect for the winter.'
		)
		cy.get('[data-cy="productDetails-select"]').should(
			'contain',
			'--Please choose an amount--'
		)
		cy.get('[data-cy="productDetails-bttn-addCart"]').should('contain', 'Add to Cart')
	})

	it('displays a mens product message `Item has been added to cart!` and `Complete order and checkout` button when a mens product card is clicked then item amount is selected then `Add to Cart` button is clicked', () => {
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
		cy.get('[data-cy="productDetails-cashier-bttn"]').should(
			'contain',
			'Complete order and checkout'
		)
	})

	//Products - Women
	it("displays `Women's fashion`, product card: img, name, price when sidebar `Women's fashion` link is clicked", () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="womens-link"]').click()

		cy.get('[data-cy="title-women-product"]').should('contain', "Women's fashion")
		cy.get('[data-cy="womensProducts-womenCard-img"]').should('have.attr', 'src')
		cy.get('[data-cy="womensProducts-womenCard-name"]').should(
			'have.class',
			'product-text'
		)
		cy.get('[data-cy="womensProducts-womenCard-price"]').should(
			'have.class',
			'product-text'
		)
	})

	//All Products - Womens - Product Details
	it('displays a womens product: image, caption, name, price, description, <select> and `Add to cart` button when a womens product card is clicked', () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="womens-link"]').click()
		cy.get('[data-cy="womensProducts-womenCard-img"]').last().click()

		cy.get('[data-cy="productDetails-img"]').should('have.attr', 'src')
		cy.get('[data-cy="productDetails-caption"]').should('contain', 'Photo by')
		cy.get('[data-cy="productDetails-name"]').should('contain', 'Sweater')
		cy.get('[data-cy="productDetails-price"]').should('contain', '$89.99')
		cy.get('[data-cy="productDetails-description"]').should(
			'contain',
			'Genuine merino wool dark yellow sweater, authentically sourced.'
		)
		cy.get('[data-cy="productDetails-select"]').should(
			'contain',
			'--Please choose an amount--'
		)
		cy.get('[data-cy="productDetails-bttn-addCart"]').should('contain', 'Add to Cart')
	})

	it('displays a womens product message `Item has been added to cart!` and `Complete order and checkout` button when a womens product card is clicked then item amount is selected then `Add to Cart` button is clicked', () => {
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
		cy.get('[data-cy="productDetails-cashier-bttn"]').should(
			'contain',
			'Complete order and checkout'
		)
	})

	//All Products - Womens - Product Details - Cashier
	it('displays womens product card with item added to cart in the Cashier page', () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="womens-link"]').click()
		cy.get('[data-cy="womensProducts-womenCard-img"]').last().click()
		cy.get('[data-cy="productDetails-select"]').select('2')
		cy.get('[data-cy="productDetails-bttn-addCart"]').click()
		cy.get('[data-cy="productDetails-cashier-bttn"]').click()

		cy.get('[data-cy="cashier-womenProduct-img"]').should('have.attr', 'src')
		cy.get('[data-cy="cashier-womenProduct-name"]').should('contain', 'Sweater')
		cy.get('[data-cy="cashier-womenProduct-amount"]').should('contain', '2')
		cy.get('[data-cy="cashier-womenProduct-price"]').should('contain', '$89.99')
		cy.get('[data-cy="cashier-womenProduct-total"]').should('contain', '$179.98')
		cy.get('[data-cy="cashier-womenProduct-bttn-removeItem"]').should(
			'contain',
			'Remove item'
		)
	})

	it('displays order summary section in Cashier when a womens product card is clicked then item amount is selected then `Add to Cart` button is clicked then `Complete order and checkout` button is clicked', () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="womens-link"]').click()
		cy.get('[data-cy="womensProducts-womenCard-img"]').last().click()
		cy.get('[data-cy="productDetails-select"]').select('2')
		cy.get('[data-cy="productDetails-bttn-addCart"]').click()
		cy.get('[data-cy="productDetails-cashier-bttn"]').click()

		cy.get('[data-cy="cashier-orderSummary"]').should('contain', 'Order Summary')
		cy.get('[data-cy="cashier-totalPrice"]').should('contain', '$188.98')
		cy.get('[data-cy="cashier-bttn-completeOrder"]').should('contain', 'Complete order')
	})

	//All Products - Mens - Product Details - Cashier
	it('displays mens product card with item added to cart in the Cashier page', () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="mens-link"]').click()
		cy.get('[data-cy="mensProducts-menCard-img"]').last().click()
		cy.get('[data-cy="productDetails-select"]').select('2')
		cy.get('[data-cy="productDetails-bttn-addCart"]').click()
		cy.get('[data-cy="productDetails-cashier-bttn"]').click()

		cy.get('[data-cy="cashier-menProduct-img"]').should('have.attr', 'src')
		cy.get('[data-cy="cashier-menProduct-name"]').should('contain', 'Sweater')
		cy.get('[data-cy="cashier-menProduct-amount"]').should('contain', '2')
		cy.get('[data-cy="cashier-menProduct-price"]').should('contain', '$79.99')
		cy.get('[data-cy="cashier-menProduct-total"]').should('contain', '$159.98')
		cy.get('[data-cy="cashier-menProduct-bttn-removeItem"]').should(
			'contain',
			'Remove item'
		)
	})

	it('displays order summary section in Cashier when a mens product card is clicked then item amount is selected then `Add to Cart` button is clicked then `Complete order and checkout` button is clicked', () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="mens-link"]').click()
		cy.get('[data-cy="mensProducts-menCard-img"]').last().click()
		cy.get('[data-cy="productDetails-select"]').select('2')
		cy.get('[data-cy="productDetails-bttn-addCart"]').click()
		cy.get('[data-cy="productDetails-cashier-bttn"]').click()

		cy.get('[data-cy="cashier-orderSummary"]').should('contain', 'Order Summary')
		cy.get('[data-cy="cashier-totalPrice"]').should('contain', '$167.98')
		cy.get('[data-cy="cashier-bttn-completeOrder"]').should('contain', 'Complete order')
	})

	//All Products - Accessories - Product Details - Cashier
	it('displays accessories product card with item added to cart in the Cashier page', () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="accessories-link"]').click()
		cy.get('[data-cy="accessoriesProducts-accessoriesCard-img"]').last().click()
		cy.get('[data-cy="productDetails-select"]').select('2')
		cy.get('[data-cy="productDetails-bttn-addCart"]').click()
		cy.get('[data-cy="productDetails-cashier-bttn"]').click()

		cy.get('[data-cy="cashier-accessoriesProduct-img"]').should('have.attr', 'src')
		cy.get('[data-cy="cashier-accessoriesProduct-name"]').should('contain', 'Bracelet')
		cy.get('[data-cy="cashier-accessoriesProduct-amount"]').should('contain', '2')
		cy.get('[data-cy="cashier-accessoriesProduct-price"]').should('contain', '$99.99')
		cy.get('[data-cy="cashier-accessoriesProduct-total"]').should('contain', '$199.98')
		cy.get('[data-cy="cashier-accessoriesProduct-bttn-removeItem"]').should(
			'contain',
			'Remove item'
		)
	})

	it('displays order summary section in Cashier when a mens product card is clicked then item amount is selected then `Add to Cart` button is clicked then `Complete order and checkout` button is clicked', () => {
		mount(<App />)
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="mens-link"]').click()
		cy.get('[data-cy="mensProducts-menCard-img"]').last().click()
		cy.get('[data-cy="productDetails-select"]').select('2')
		cy.get('[data-cy="productDetails-bttn-addCart"]').click()
		cy.get('[data-cy="productDetails-cashier-bttn"]').click()

		cy.get('[data-cy="cashier-orderSummary"]').should('contain', 'Order Summary')
		cy.get('[data-cy="cashier-totalPrice"]').should('contain', '$167.98')
		cy.get('[data-cy="cashier-bttn-completeOrder"]').should('contain', 'Complete order')
	})

	//All Products - Womens - Product Details - Cashier
	it('displays multiple categories of product cards with item added to cart in the Cashier page then removes correct card when `Remove item` button is clicked and then updates the total price accordingly', () => {
		mount(<App />)
		//puts an accessories product into cart
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="accessories-link"]').click()
		cy.get('[data-cy="accessoriesProducts-accessoriesCard-img"]').last().click()
		cy.get('[data-cy="productDetails-select"]').select('2')
		cy.get('[data-cy="productDetails-bttn-addCart"]').click()
		cy.get('[data-cy="productDetails-cashier-bttn"]').click()

		cy.get('[data-cy="cashier-accessoriesProduct-img"]').should('have.attr', 'src')
		cy.get('[data-cy="cashier-accessoriesProduct-name"]').should('contain', 'Bracelet')
		cy.get('[data-cy="cashier-accessoriesProduct-amount"]').should('contain', '2')
		cy.get('[data-cy="cashier-accessoriesProduct-price"]').should('contain', '$99.99')
		cy.get('[data-cy="cashier-accessoriesProduct-total"]').should('contain', '$199.98')
		cy.get('[data-cy="cashier-accessoriesProduct-bttn-removeItem"]').should(
			'contain',
			'Remove item'
		)

		//puts a mens product into cart
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="mens-link"]').click()
		cy.get('[data-cy="mensProducts-menCard-img"]').last().click()
		cy.get('[data-cy="productDetails-select"]').select('2')
		cy.get('[data-cy="productDetails-bttn-addCart"]').click()
		cy.get('[data-cy="productDetails-cashier-bttn"]').click()

		cy.get('[data-cy="cashier-menProduct-img"]').should('have.attr', 'src')
		cy.get('[data-cy="cashier-menProduct-name"]').should('contain', 'Sweater')
		cy.get('[data-cy="cashier-menProduct-amount"]').should('contain', '2')
		cy.get('[data-cy="cashier-menProduct-price"]').should('contain', '$79.99')
		cy.get('[data-cy="cashier-menProduct-total"]').should('contain', '$159.98')
		cy.get('[data-cy="cashier-menProduct-bttn-removeItem"]').should(
			'contain',
			'Remove item'
		)

		//puts a womens product into cart
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="womens-link"]').click()
		cy.get('[data-cy="womensProducts-womenCard-img"]').last().click()
		cy.get('[data-cy="productDetails-select"]').select('2')
		cy.get('[data-cy="productDetails-bttn-addCart"]').click()
		cy.get('[data-cy="productDetails-cashier-bttn"]').click()

		cy.get('[data-cy="cashier-womenProduct-img"]').should('have.attr', 'src')
		cy.get('[data-cy="cashier-womenProduct-name"]').should('contain', 'Sweater')
		cy.get('[data-cy="cashier-womenProduct-amount"]').should('contain', '2')
		cy.get('[data-cy="cashier-womenProduct-price"]').should('contain', '$89.99')
		cy.get('[data-cy="cashier-womenProduct-total"]').should('contain', '$179.98')
		cy.get('[data-cy="cashier-womenProduct-bttn-removeItem"]').should(
			'contain',
			'Remove item'
		)

		//checks that the order summary section is present and displays the correct total price
		cy.get('[data-cy="cashier-orderSummary"]').should('contain', 'Order Summary')
		cy.get('[data-cy="cashier-totalPrice"]').should('contain', '$566.94')
		cy.get('[data-cy="cashier-bttn-completeOrder"]').should('contain', 'Complete order')

		//removes the accessories product from the cart and checks that it is removed and not displayed
		cy.get('[data-cy="cashier-accessoriesProduct-bttn-removeItem"]').click()
		cy.get('[data-cy="cashier-accessoriesProduct-img"]').should('not.exist')
		cy.get('[data-cy="cashier-accessoriesProduct-name"]').should('not.exist')
		cy.get('[data-cy="cashier-accessoriesProduct-amount"]').should('not.exist')
		cy.get('[data-cy="cashier-accessoriesProduct-price"]').should('not.exist')
		cy.get('[data-cy="cashier-accessoriesProduct-total"]').should('not.exist')
		cy.get('[data-cy="cashier-accessoriesProduct-bttn-removeItem"]').should('not.exist')

		//checks that the order summary section displays the correct total price and `Complete order` button
		cy.get('[data-cy="cashier-totalPrice"]').should('contain', '$356.96')
		cy.get('[data-cy="cashier-bttn-completeOrder"]').should('contain', 'Complete order')

		//removes the mens product from the cart and checks that it is removed and not displayed
		cy.get('[data-cy="cashier-menProduct-bttn-removeItem"]').click()
		cy.get('[data-cy="cashier-menProduct-img"]').should('not.exist')
		cy.get('[data-cy="cashier-menProduct-name"]').should('not.exist')
		cy.get('[data-cy="cashier-menProduct-amount"]').should('not.exist')
		cy.get('[data-cy="cashier-menProduct-price"]').should('not.exist')
		cy.get('[data-cy="cashier-menProduct-total"]').should('not.exist')
		cy.get('[data-cy="cashier-menProduct-bttn-removeItem"]').should('not.exist')

		//checks that the order summary section displays the correct total price and `Complete order` button
		cy.get('[data-cy="cashier-totalPrice"]').should('contain', '$188.98')
		cy.get('[data-cy="cashier-bttn-completeOrder"]').should('contain', 'Complete order')

		//removes the womens product from the cart and checks that it is removed and not displayed
		cy.get('[data-cy="cashier-womenProduct-bttn-removeItem"]').click()
		cy.get('[data-cy="cashier-womenProduct-img"]').should('not.exist')
		cy.get('[data-cy="cashier-womenProduct-name"]').should('not.exist')
		cy.get('[data-cy="cashier-womenProduct-amount"]').should('not.exist')
		cy.get('[data-cy="cashier-womenProduct-price"]').should('not.exist')
		cy.get('[data-cy="cashier-womenProduct-total"]').should('not.exist')
		cy.get('[data-cy="cashier-womenProduct-bttn-removeItem"]').should('not.exist')

		//checks that the order summary section displays the correct total price and not `Complete order` button
		cy.get('[data-cy="cashier-totalPrice"]').should('contain', '$0.00')
		cy.get('[data-cy="cashier-bttn-completeOrder"]').should('not.exist')
	})

	it('should be able to complete an order with multiple items in cart and display Checkout page', () => {
		mount(<App />)
		//puts an accessories product into cart
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="accessories-link"]').click()
		cy.get('[data-cy="accessoriesProducts-accessoriesCard-img"]').last().click()
		cy.get('[data-cy="productDetails-select"]').select('2')
		cy.get('[data-cy="productDetails-bttn-addCart"]').click()
		cy.get('[data-cy="productDetails-cashier-bttn"]').click()

		cy.get('[data-cy="cashier-accessoriesProduct-img"]').should('have.attr', 'src')
		cy.get('[data-cy="cashier-accessoriesProduct-name"]').should('contain', 'Bracelet')
		cy.get('[data-cy="cashier-accessoriesProduct-amount"]').should('contain', '2')
		cy.get('[data-cy="cashier-accessoriesProduct-price"]').should('contain', '$99.99')
		cy.get('[data-cy="cashier-accessoriesProduct-total"]').should('contain', '$199.98')
		cy.get('[data-cy="cashier-accessoriesProduct-bttn-removeItem"]').should(
			'contain',
			'Remove item'
		)

		//puts a mens product into cart
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="mens-link"]').click()
		cy.get('[data-cy="mensProducts-menCard-img"]').last().click()
		cy.get('[data-cy="productDetails-select"]').select('2')
		cy.get('[data-cy="productDetails-bttn-addCart"]').click()
		cy.get('[data-cy="productDetails-cashier-bttn"]').click()

		cy.get('[data-cy="cashier-menProduct-img"]').should('have.attr', 'src')
		cy.get('[data-cy="cashier-menProduct-name"]').should('contain', 'Sweater')
		cy.get('[data-cy="cashier-menProduct-amount"]').should('contain', '2')
		cy.get('[data-cy="cashier-menProduct-price"]').should('contain', '$79.99')
		cy.get('[data-cy="cashier-menProduct-total"]').should('contain', '$159.98')
		cy.get('[data-cy="cashier-menProduct-bttn-removeItem"]').should(
			'contain',
			'Remove item'
		)

		//puts a womens product into cart
		cy.get('[data-cy="nav-products"]').click()
		cy.get('[data-cy="womens-link"]').click()
		cy.get('[data-cy="womensProducts-womenCard-img"]').last().click()
		cy.get('[data-cy="productDetails-select"]').select('2')
		cy.get('[data-cy="productDetails-bttn-addCart"]').click()
		cy.get('[data-cy="productDetails-cashier-bttn"]').click()

		cy.get('[data-cy="cashier-womenProduct-img"]').should('have.attr', 'src')
		cy.get('[data-cy="cashier-womenProduct-name"]').should('contain', 'Sweater')
		cy.get('[data-cy="cashier-womenProduct-amount"]').should('contain', '2')
		cy.get('[data-cy="cashier-womenProduct-price"]').should('contain', '$89.99')
		cy.get('[data-cy="cashier-womenProduct-total"]').should('contain', '$179.98')
		cy.get('[data-cy="cashier-womenProduct-bttn-removeItem"]').should(
			'contain',
			'Remove item'
		)

		//checks that the order summary section is present and displays the correct total price
		cy.get('[data-cy="cashier-orderSummary"]').should('contain', 'Order Summary')
		cy.get('[data-cy="cashier-totalPrice"]').should('contain', '$566.94')
		cy.get('[data-cy="cashier-bttn-completeOrder"]').should('contain', 'Complete order')

		//checks that the Checkout page is present and displays order confirmation message and `Back to store` button
		cy.get('[data-cy="cashier-bttn-completeOrder"]').click()
		cy.get('[data-cy="checkout-title"]').should('contain', 'Checkout')
		cy.get('[data-cy="checkout-confirmation"]').should(
			'contain',
			'Your order has been placed!'
		)
		cy.get('[data-cy="checkout-bttn-backToStore"]').should('contain', 'Back to store')

		//checks that clicking the `Back to store` button redirects to the `All products` store page
		cy.get('[data-cy="checkout-bttn-backToStore"]').click()
		cy.get('[data-cy="all-products-link"]').should('contain', 'All')
		cy.get('[data-cy="title-allProducts"]').should('contain', 'All products')
	})
})
