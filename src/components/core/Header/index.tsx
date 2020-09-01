import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { NavLink } from 'react-router-dom'
import { Grid } from '@material-ui/core'
import useStyles from './styles'

const Header = () => {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<AppBar position="static" color="primary">
				<Toolbar>
					<Grid container justify="center" alignItems="center" alignContent="center">
						<NavLink className={classes.menuLink} to="/page1">
							Page 1
						</NavLink>
						<NavLink className={classes.menuLink} to="/page2">
							Page 2
						</NavLink>
						<NavLink className={classes.menuLink} to="/debounce">
							Debouce exemple
						</NavLink>
					</Grid>
				</Toolbar>
			</AppBar>
		</div>
	)
}

export default Header
