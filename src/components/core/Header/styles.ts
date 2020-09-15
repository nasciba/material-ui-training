import { createStyles, makeStyles, Theme, fade } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		menuButton: {
			marginRight: theme.spacing(2),
		},
		title: {
			flexGrow: 1,
		},
		menuLink: {
			padding: '0 16px 0 16px',
			textDecoration: 'none',
			color: fade(theme.palette.getContrastText(theme.palette.primary.main), 0.6),
			'&:hover': {
				color: theme.palette.getContrastText(theme.palette.primary.main),
				transition: 'all 0.4s',
				fontWeight: theme.typography.fontWeightMedium,
			},
		},
	})
)

export default useStyles
