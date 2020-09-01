import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { useThemeContext } from '../../components/core/ThemeSwitcher/hooks/ThemeContext'

const Page2 = () => {
	const { isDark, toggleTheme } = useThemeContext()

	return (
		<Grid container justify="center" alignItems="center" alignContent="center" direction="column">
			{`Dark Theme: ${isDark}`}
			<Typography variant="h1" color="textPrimary">
				Page 2
			</Typography>
			<Typography variant="h2" color="textSecondary">
				Render h2 Test
			</Typography>
			<Button onClick={toggleTheme} variant="contained" color="primary">
				Change Theme
			</Button>
		</Grid>
	)
}

export default Page2
