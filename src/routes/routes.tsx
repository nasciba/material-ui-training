import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import ApplicationRoutes from 'routes/Application.routes'

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<ApplicationRoutes />
			</Switch>
		</BrowserRouter>
	)
}

export default Routes
