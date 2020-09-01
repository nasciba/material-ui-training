import React from 'react'
import { ContextThemeType, initialThemeState } from './useTheme'

export const ThemeContext = React.createContext<ContextThemeType>(initialThemeState)
export const ThemeProvider = ThemeContext.Provider

export function useThemeContext(): ContextThemeType {
	return React.useContext(ThemeContext)
}
