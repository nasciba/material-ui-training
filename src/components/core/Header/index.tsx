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
		const { icon: Icon } = menuItem

		return (
			<Grid container key={`menu-item-${menuItem.id}`}>
				<Grid item>{Icon && <Icon />}</Grid>
				<Grid item>
					<NavLink className={classes.menuLink} to={menuItem.to}>
						{menuItem.value}
					</NavLink>
				</Grid>
			</Grid>
		)
	})

	return (
		<div className={classes.root}>
			<AppBar position="static" color="primary">
				<Toolbar>
					<Grid container justify="center" alignItems="center" alignContent="center">
						{items}
					</Grid>
				</Toolbar>
			</AppBar>
		</div>
	)
}

export default React.memo(Header)
