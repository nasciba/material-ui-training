import React, { useRef } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Component2 from 'pages/Page1/component2'
import Component1 from 'pages/Page1/component1'
import { useThemeContext } from '../../components/core/ThemeSwitcher/hooks/ThemeContext'

const Page1 = () => {
	const { isDark, toggleTheme } = useThemeContext()
	const [name, setName] = React.useState<string>('')
	const [count, setCount] = React.useState<number>(1)

	const handleChangeName2 = React.useCallback(() => {
		setCount(count + 1)
	}, [name])

	const ref = useRef(null)

	return (
		<Grid ref={ref.current} container justify="center" alignItems="center" alignContent="center" direction="column">
			<Typography variant="h1" color="textPrimary">
				{`Name: ${name}`}
			</Typography>
			{/* <Component1 /> */}
			<Component2 handleChangeName2={handleChangeName2} />
		</Grid>
	)
}

export default Page1
