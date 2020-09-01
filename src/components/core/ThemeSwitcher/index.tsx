import React from 'react'
import useTheme from './hooks/useTheme'
import { ThemeProvider } from './hooks/ThemeContext'

type ThemeSwitcherProps = {
	children: ((props: { isDark: boolean }) => JSX.Element) | React.ReactNode
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ children }: ThemeSwitcherProps) => {
	const theme = useTheme()

	return <ThemeProvider value={theme}>{children}</ThemeProvider>
}

export default ThemeSwitcher
