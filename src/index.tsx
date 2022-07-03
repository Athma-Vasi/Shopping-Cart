import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { About } from './components/about/About'
import { Store } from './components/store/Store'
import { Contact } from './components/contact/Contact'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path="/" element={<App />}>
					<Route path="home" element={<App />} />
					<Route path="about" element={<About />} />
					<Route path="store" element={<Store />} />
					<Route path="contact" element={<Contact />} />
					<Route
						path="*"
						element={<div>👋 this is not the page you are looking for 👋</div>}
					/>
				</Route>
			</Routes>
		</Router>
	</React.StrictMode>
)
