import { TypographyOptions } from '@material-ui/core/styles/createTypography'

const typography: TypographyOptions = {
	fontFamily: ['Poppins'].join(','),
	htmlFontSize: 16,
	h1: {
		fontSize: '2.625rem',
		lineHeight: '3.25rem',
		fontWeight: 'normal',
		letterSpacing: '0.01rem',
	},
	h2: {
		fontSize: '2rem',
		lineHeight: '2.5rem',
		fontWeight: 'normal',
		letterSpacing: '0.01rem',
	},
}

export default typography
