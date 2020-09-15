import React, { Suspense } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { CircularProgress } from '@material-ui/core'
import Home from 'pages/Board'

const ApplicationRoute = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Suspense fallback={<CircularProgress />}>
					<Route exact path="/" component={Home} />
				</Suspense>
			</Switch>
		</BrowserRouter>
	)
}

export default ApplicationRoute
