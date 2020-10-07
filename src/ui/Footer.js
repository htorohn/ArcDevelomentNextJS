import React from 'react'
import Link from '../Link'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'

const useStyles = makeStyles((theme) => ({
	footer: {
		backgroundColor: theme.palette.common.blue,
		width: '100%',
		zIndex: 1302,
		position: 'relative',
	},
	adornment: {
		width: '25em',
		verticalAlign: 'bottom',
		[theme.breakpoints.down('md')]: {
			width: '21em',
		},
		[theme.breakpoints.down('xs')]: {
			width: '15em',
		},
	},
	mainContainer: {
		position: 'absolute',
	},
	link: {
		color: 'white',
		fontFamily: 'Arial',
		fontSize: '0.75rem',
		fontWeight: 'bold',
		textDecoration: 'none',
	},
	gridItem: {
		margin: '3em',
	},
	icon: {
		height: '4em',
		width: '4em',
		[theme.breakpoints.down('md')]: {
			height: '3em',
			width: '3em',
		},
		[theme.breakpoints.down('xs')]: {
			height: '2.5em',
			width: '2.5em',
		},
	},
	socialContainer: {
		position: 'absolute',
		marginTop: '-6em',
		right: '1.5em',
		[theme.breakpoints.down('xs')]: {
			right: '0.6em',
		},
	},
}))

const Footer = (props) => {
	const classes = useStyles()
	const { setValue, setSelectedIndex } = props
	return (
		<footer className={classes.footer}>
			<Hidden mdDown>
				<Grid
					container
					justify='center'
					className={classes.mainContainer}
				>
					<Grid item className={classes.gridItem}>
						<Grid
							container
							direction='column'
							spacing={2}
							style={{ margin: 0 }}
						>
							<Grid
								item
								component={Link}
								onClick={() => setValue(0)}
								href='/'
								className={classes.link}
							>
								Home
							</Grid>
						</Grid>
					</Grid>
					<Grid item className={classes.gridItem}>
						<Grid
							container
							direction='column'
							spacing={2}
							style={{ margin: 0 }}
						>
							<Grid
								item
								component={Link}
								onClick={() => {
									setValue(1)
									setSelectedIndex(0)
								}}
								href='/services'
								className={classes.link}
							>
								Services
							</Grid>
							<Grid
								item
								component={Link}
								onClick={() => {
									setValue(1)
									setSelectedIndex(1)
								}}
								href='/customsoftware'
								className={classes.link}
							>
								Custom Software Development
							</Grid>
							<Grid
								item
								component={Link}
								onClick={() => {
									setValue(1)
									setSelectedIndex(2)
								}}
								href='/mobileapps'
								className={classes.link}
							>
								iOS / Android App Development
							</Grid>
							<Grid
								item
								component={Link}
								onClick={() => {
									setValue(1)
									setSelectedIndex(3)
								}}
								href='/websites'
								className={classes.link}
							>
								Websites Development
							</Grid>
						</Grid>
					</Grid>
					<Grid item className={classes.gridItem}>
						<Grid
							container
							direction='column'
							spacing={2}
							style={{ margin: 0 }}
						>
							<Grid
								item
								component={Link}
								onClick={() => setValue(2)}
								href='/revolution'
								className={classes.link}
							>
								The Revolution
							</Grid>
							<Grid
								item
								component={Link}
								onClick={() => setValue(2)}
								href='/revolution'
								className={classes.link}
							>
								Vision
							</Grid>
							<Grid
								item
								component={Link}
								onClick={() => setValue(2)}
								href='/revolution'
								className={classes.link}
							>
								Technology
							</Grid>
							<Grid
								item
								component={Link}
								onClick={() => setValue(2)}
								href='/revolution'
								className={classes.link}
							>
								Process
							</Grid>
						</Grid>
					</Grid>
					<Grid item className={classes.gridItem}>
						<Grid
							container
							direction='column'
							spacing={2}
							style={{ margin: 0 }}
						>
							<Grid
								item
								component={Link}
								onClick={() => setValue(3)}
								href='/about'
								className={classes.link}
							>
								About US
							</Grid>
							<Grid
								item
								component={Link}
								onClick={() => setValue(3)}
								href='/about'
								className={classes.link}
							>
								History
							</Grid>
							<Grid
								item
								component={Link}
								onClick={() => setValue(3)}
								href='/about'
								className={classes.link}
							>
								Team
							</Grid>
						</Grid>
					</Grid>
					<Grid item className={classes.gridItem}>
						<Grid
							container
							direction='column'
							spacing={2}
							style={{ margin: 0 }}
						>
							<Grid
								item
								component={Link}
								onClick={() => setValue(4)}
								href='/contact'
								className={classes.link}
							>
								Contact Us
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Hidden>
			<img
				alt='black decorative slash'
				className={classes.adornment}
				src='/assets/footerAdornment.svg'
			/>
			<Grid
				container
				justify='flex-end'
				spacing={2}
				className={classes.socialContainer}
			>
				<Grid
					item
					component={'a'}
					href='https://www.facebook.com'
					rel='noopener noreferrer'
					target='_blank'
				>
					<img
						alt='facebook logo'
						src='/assets/facebook.svg'
						className={classes.icon}
					/>
				</Grid>
				<Grid
					item
					component={'a'}
					href='https://www.twitter.com'
					rel='noopener noreferrer'
					target='_blank'
				>
					<img
						alt='twitter logo'
						src='/assets/twitter.svg'
						className={classes.icon}
					/>
				</Grid>
				<Grid
					item
					component={'a'}
					href='https://www.instagram.com'
					rel='noopener noreferrer'
					target='_blank'
				>
					<img
						alt='instagram logo'
						src='/assets/instagram.svg'
						className={classes.icon}
					/>
				</Grid>
			</Grid>
		</footer>
	)
}

export default Footer
