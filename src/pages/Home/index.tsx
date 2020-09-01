import React, { lazy, Suspense } from 'react'
import Header from 'components/core/Header'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Page1 = lazy(() => import('pages/Page1'))
const Page2 = lazy(() => import('pages/Page2'))
const Debounce = lazy(() => import('pages/Debounce'))

const Home: React.FC = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<BrowserRouter>
				<Header />
				<Switch>
					<Route exact path="/page1" component={Page1} />
					<Route exact path="/page2" component={Page2} />
					<Route exact path="/debounce" component={Debounce} />
				</Switch>
			</BrowserRouter>
		</ Suspense>
	)
}

export default Home
