import React from 'react'
import Link from '../Link'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import ButtonArrow from './ButtonArrow'

const useStyles = makeStyles((theme) => ({
	background: {
		backgroundImage: `url('/assets/background.jpg')`,
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundAttachment: 'fixed',
		height: '60em',
		width: '100%',
		[theme.breakpoints.down('md')]: {
			backgroundImage: `url('/assets/mobileBackground.jpg')`,
			backgroundAttachment: 'inherit',
		},
	},
	learnButton: {
		...theme.typography.learnButton,
		fontSize: '0.7rem',
		height: 35,
		padding: 5,
		[theme.breakpoints.down('sm')]: {
			marginBottom: '2em',
		},
	},
	estimateButton: {
		...theme.typography.estimate,
		borderRadius: 50,
		heihgt: 80,
		width: 205,
		backgroundColor: theme.palette.common.orange,
		fontSize: '1.5rem',
		marginRight: '5em',
		marginLeft: '2em',
		'&:hover': {
			backgroundColor: theme.palette.secondary.light,
		},
		[theme.breakpoints.down('sm')]: {
			marginRight: 0,
			marginLeft: 0,
		},
	},
}))

const CallToAction = (props) => {
	const classes = useStyles()
	const theme = useTheme()
	const { setValue } = props

	const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))

	return (
		<Grid
			container
			className={classes.background}
			alignItems='center'
			justify={matchesSM ? 'center' : 'space-between'}
			direction={matchesSM ? 'column' : 'row'}
		>
			<Grid
				item
				style={{
					marginLeft: matchesSM ? 0 : '5em',
					textAlign: matchesSM ? 'center' : 'inherit',
				}}
			>
				<Grid container direction='column'>
					<Grid item>
						<Typography variant='h2'>
							Simple Software.
							<br />
							Revolutionary Results.
						</Typography>
						<Typography
							variant='subtitle2'
							style={{ fontSize: '1.5rem' }}
						>
							Take advantege of the 21st Century.
						</Typography>
					</Grid>
					<Grid
						container
						item
						justify={matchesSM ? 'center' : undefined}
					>
						<Button
							component={Link}
							href='/revolution'
							onClick={() => setValue(2)}
							variant='outlined'
							className={classes.learnButton}
						>
							<span style={{ marginRight: 5 }}>Learn More</span>
							<ButtonArrow
								width={10}
								height={10}
								fill={theme.palette.common.blue}
							/>
						</Button>
					</Grid>
				</Grid>
			</Grid>
			<Grid item>
				<Button
					component={Link}
					href='/estimate'
					onClick={() => setValue(false)}
					variant='contained'
					className={classes.estimateButton}
				>
					Free Estimate
				</Button>
			</Grid>
		</Grid>
	)
}

export default CallToAction
