import React from 'react'
import { Typography } from '@material-ui/core'

const Component1 = () => {
	console.log('Component 1')
	return (
		<div>
			<Typography>Renderizado Componente 1</Typography>
		</div>
	)
}

export default React.memo(Component1)
