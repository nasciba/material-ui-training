import React, { useState, useCallback } from 'react'
import { Typography, Button } from '@material-ui/core';
import * as _ from 'lodash'

const Debounce = () => {
	const [error, setError] = useState('');

	const handleError = useCallback(_.debounce((description: string) => {
		alert(description)
	}, 3000), [])

	return (
		<div>
			<Typography>{error}</Typography>
			<Button onClick={() => {
				handleError('Erro tipo 1')
				setError('Erro tipo 1')
			}} variant="contained" color="primary">
				Erro tipo 1
			</Button>
			<Button onClick={() => {
				handleError('Erro tipo 2')
				setError('Erro tipo 2')
			}} variant="contained" color="primary">
				Erro tipo 2
			</Button>
		</div>
	)
}

export default Debounce;