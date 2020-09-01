import React from 'react'
import Header from 'components/core/Header'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Page1 from 'pages/Page1'
import Page2 from 'pages/Page2'

const Home: React.FC = () => {
	return (
		<BrowserRouter>
			<Header />

			<Switch>
				<Route exact path="/page1">
					<Page1 />
				</Route>
				<Route exact path="/page2">
					<Page2 />
				</Route>
			</Switch>
		</BrowserRouter>
	)
}

export default Home
