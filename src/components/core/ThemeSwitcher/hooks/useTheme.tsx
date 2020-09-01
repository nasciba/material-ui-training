import { useReducer, useCallback } from 'react'

/**
 * Types
 */
type Action = {
	type: string
	fieldName?: string
	payload?: string
}

export interface ThemeState {
	isDark: boolean
}

export interface ContextThemeType extends ThemeState {
	toggleTheme?: () => void
}

/**
 * Hook
 */
export const initialThemeState: ThemeState = { isDark: false }

const reducer = (state: ThemeState, action: Action): ThemeState => {
	switch (action.type) {
		case 'TOGGLE_DARK_MODE':
			return { isDark: !state.isDark }
		default:
			return state
	}
}

const useTheme = (): ContextThemeType => {
	const [state, dispatch] = useReducer(reducer, initialThemeState)

	const toggleTheme = useCallback(() => dispatch({ type: 'TOGGLE_DARK_MODE' }), [])

	return { ...state, toggleTheme }
}

export default useTheme
