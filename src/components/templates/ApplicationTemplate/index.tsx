import React from 'react'
import Header from 'components/core/Header'
import { MenuModel } from 'components/core/Header/model/MenuModel'
import DashboardIcon from '@material-ui/icons/Dashboard'

const menu = {
	items: [
		{
			id: 'backlog',
			value: 'Backlog',
			to: '/backlog',
			icon: DashboardIcon,
		},
		{
			id: 'board',
			value: 'Board',
			to: '/board',
			icon: DashboardIcon,
		},
		{
			id: 'feed',
			value: 'Feed',
			to: '/feed',
			icon: DashboardIcon,
		},
		{
			id: 'reports',
			value: 'Reports',
			to: '/reports',
			icon: DashboardIcon,
		},
	],
} as MenuModel

type ApplicationTemplateProps = {
	children: React.ReactNode
}

const ApplicationTemplate: React.FC<ApplicationTemplateProps> = ({ children }: ApplicationTemplateProps) => {
	return (
		<>
			<Header menu={menu} />
			{children}
		</>
	)
}

export default ApplicationTemplate
