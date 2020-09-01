import React from 'react'
import { Typography, Button } from '@material-ui/core'

type Component2Props = {
	handleChangeName2: () => void
}
const Component2: React.FC<Component2Props> = ({ handleChangeName2 }: Component2Props) => {
	console.log('Component 2')
	return (
		<div>
			<Typography>Renderizado Name</Typography>
			<Button onClick={handleChangeName2} variant="contained" color="primary">
				Set Name to Carlos
			</Button>
		</div>
	)
}

export default React.memo(Component2)
