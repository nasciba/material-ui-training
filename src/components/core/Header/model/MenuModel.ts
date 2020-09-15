import { SvgIconProps } from '@material-ui/core'

export interface MenuItemModel {
	id: string
	value: string
	to: string
	icon?: React.FC<SvgIconProps>
}

export interface MenuModel {
	items: Array<MenuItemModel>
}
