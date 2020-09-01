import React from 'react'
import { ThemeProvider, createMuiTheme, CssBaseline } from '@material-ui/core'
import lightPalette from './themes/light/palette'
import darkPalette from './themes/dark/palette'
import typography from './themes/typography'
import Home from './pages/Home'
import ThemeSwitcher from './components/core/ThemeSwitcher'
import { useThemeContext } from './components/core/ThemeSwitcher/hooks/ThemeContext'
import 'typeface-poppins'

const MaterialUITheme: React.FC = () => {
	const { isDark } = useThemeContext()

	const theme = React.useMemo(
		() =>
			createMuiTheme({
				palette: isDark ? darkPalette : lightPalette,
				typography,
			}),
		[isDark]
	)

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Home />
		</ThemeProvider>
	)
}

const App: React.FC = () => {
	return (
		<ThemeSwitcher>
			<MaterialUITheme />
		</ThemeSwitcher>
	)
}

export default App
