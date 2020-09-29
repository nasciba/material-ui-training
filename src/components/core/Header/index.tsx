import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { NavLink } from 'react-router-dom'
import { Grid } from '@material-ui/core'
import { MenuModel } from 'components/core/Header/model/MenuModel'
import useStyles from './styles'

type HeaderProps = {
	menu: MenuModel
}

const Header: React.FC<HeaderProps> = ({ menu }: HeaderProps) => {
	const classes = useStyles()

	const items = menu.items.map((menuItem) => {
		const { icon: Icon, value, to, id } = menuItem

		return (
			<Grid item key={`menu-item-${id}`} className={classes.itemContainer}>
				<NavLink className={classes.menuLink} to={to}>
					<Grid container alignItems="center">
						{Icon && <Icon />}
						<Grid item className={classes.menuLinkContainer}>
							{value}
						</Grid>
					</Grid>
				</NavLink>
			</Grid>
		)
	})

	return (
		<>
			<div className={classes.root}>
				<AppBar position="static" color="primary">
					<Toolbar>
						<Grid container justify="center">
							{items}
						</Grid>
					</Toolbar>
				</AppBar>
			</div>
			<div>Oi</div>
		</>
	)
}

export default React.memo(Header)
