import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

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
			color: theme.palette.text.secondary,
		},
	})
)

export default useStyles
