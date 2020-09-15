import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import { CircularProgress } from '@material-ui/core'
import Home from 'pages/Board'
import ApplicationTemplate from 'components/templates/ApplicationTemplate'

const ApplicationRoutes = () => {
	return (
		<ApplicationTemplate>
			<Switch>
				<Suspense fallback={<CircularProgress />}>
					<Route exact path="/" component={Home} />
				</Suspense>
			</Switch>
		</ApplicationTemplate>
	)
}

export default ApplicationRoutes
