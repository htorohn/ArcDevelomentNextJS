import React, { useState } from 'react'
import axios from 'axios'
import Link from '../src/Link'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import CircularProgress from '@material-ui/core/CircularProgress'
import Snackbar from '@material-ui/core/Snackbar'

import ButtonArrow from '../src/ui/ButtonArrow'

const useStyles = makeStyles((theme) => ({
	background: {
		backgroundImage: `url('/assets/background.jpg')`,
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		height: '60em',
		paddingBottom: '10em',
		[theme.breakpoints.down('md')]: {
			backgroundImage: `url('/assets/mobileBackground.jpg')`,
		},
	},
	learnButton: {
		...theme.typography.learnButton,
		fontSize: '0.7rem',
		height: 35,
		padding: 5,
		[theme.breakpoints.down('md')]: {
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
		[theme.breakpoints.down('md')]: {
			marginRight: 0,
			marginLeft: 0,
		},
	},
	message: {
		border: `2px solid ${theme.palette.common.blue}`,
		marginTop: '5em',
		borderRadius: 5,
	},
	sendButton: {
		...theme.typography.estimate,
		borderRadius: 50,
		height: 45,
		width: 245,
		fontSize: '1.25rem',
		backgroundColor: theme.palette.common.orange,
		'&:hover': {
			backgroundColor: theme.palette.secondary.light,
		},
		[theme.breakpoints.down('sm')]: {
			height: 40,
			width: 225,
		},
	},
}))

const Contact = (props) => {
	const classes = useStyles()
	const theme = useTheme()

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [emailHelper, setEmailHelper] = useState('')
	const [phone, setPhone] = useState('')
	const [phoneHelper, setPhoneHelper] = useState('')
	const [message, setMessage] = useState('')
	const [open, setOpen] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [alert, setAlert] = useState({
		open: false,
		message: '',
		backgroundColor: '',
	})

	const onChange = (event) => {
		let valid

		switch (event.target.id) {
			case 'email':
				setEmail(event.target.value)
				valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
					event.target.value
				)
				if (!valid) {
					setEmailHelper('Invalid Email')
				} else {
					setEmailHelper('')
				}
				break
			case 'phone':
				setPhone(event.target.value)
				valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
					event.target.value
				)
				if (!valid) {
					setPhoneHelper('Invalid Phone')
				} else {
					setPhoneHelper('')
				}
				break
			default:
				break
		}
	}

	const onConfirm = () => {
		setIsLoading(true)
		axios
			.get(
				'https://us-central1-arcdevelopment-837fc.cloudfunctions.net/sendMail',
				{
					params: {
						name,
						email,
						phone,
						message,
					},
				}
			)
			.then((res) => {
				console.log(res)
				setIsLoading(false)
				setOpen(false)
				setName('')
				setEmail('')
				setPhone('')
				setMessage('')
				setAlert({
					open: true,
					message: 'Message sent successfully',
					backgroundColor: '#4BB543',
				})
			})
			.catch((err) => {
				console.log(err)
				setIsLoading(false)
				setAlert({
					open: true,
					message: 'Something went wrong, please try again',
					backgroundColor: '#FF3232',
				})
			})
	}

	const { setValue } = props
	const matchesMD = useMediaQuery(theme.breakpoints.down('md'))
	const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
	const matchesXS = useMediaQuery(theme.breakpoints.down('xs'))

	const buttonContents = (
		<>
			Send Message
			<img
				src='/assets/send.svg'
				alt='airplane'
				style={{ marginLeft: '1em' }}
			/>
		</>
	)

	return (
		<Grid container direction='row'>
			{/* Form */}
			<Grid
				item
				container
				direction='column'
				justify='center'
				alignItems='center'
				lg={4}
				xl={3}
				style={{
					marginBottom: matchesMD ? '5em' : 0,
					marginTop: matchesSM ? '1em' : matchesMD ? '5em' : 0,
				}}
			>
				<Grid item>
					<Grid item>
						<Typography
							variant='h2'
							style={{ lineHeight: 1 }}
							align={matchesMD ? 'center' : undefined}
						>
							Contact Us
						</Typography>
						<Typography
							variant='body1'
							style={{ color: theme.palette.common.blue }}
							align={matchesMD ? 'center' : undefined}
						>
							We're waiting.
						</Typography>
					</Grid>
					<Grid item container style={{ marginTop: '2em' }}>
						<Grid item>
							<img
								src='/assets/phone.svg'
								alt='phone'
								style={{ marginRight: '0.5em' }}
							/>
						</Grid>
						<Grid item>
							<Typography
								variant='body1'
								style={{
									color: theme.palette.common.blue,
									fontSize: '1rem',
								}}
							>
								<a
									href='tel:5555555555'
									style={{
										textDecoration: 'none',
										color: 'inherit',
									}}
								>
									(555) 555-5555
								</a>
							</Typography>
						</Grid>
					</Grid>
					<Grid item container style={{ marginBottom: '2em' }}>
						<Grid item>
							<img
								src='/assets/email.svg'
								alt='envelope'
								style={{
									marginRight: '0.5em',
									verticalAlign: 'bottom',
								}}
							/>
						</Grid>
						<Grid item>
							<Typography
								variant='body1'
								style={{
									color: theme.palette.common.blue,
									fontSize: '1rem',
								}}
							>
								<a
									href='mailto:htorohn@gmail.com'
									style={{
										textDecoration: 'none',
										color: 'inherit',
									}}
								>
									htorohn@gmail.com
								</a>
							</Typography>
						</Grid>
					</Grid>

					{/* Text inputs */}
					<Grid
						item
						container
						direction='column'
						style={{ width: '20em' }}
					>
						<Grid item style={{ marginBottom: '0.5em' }}>
							<TextField
								label='Name'
								id='name'
								value={name}
								onChange={(event) =>
									setName(event.target.value)
								}
								fullWidth
							/>
						</Grid>
						<Grid item style={{ marginBottom: '0.5em' }}>
							<TextField
								label='Email'
								id='email'
								value={email}
								error={emailHelper.length !== 0}
								onChange={onChange}
								helperText={emailHelper}
								fullWidth
							/>
						</Grid>
						<Grid item style={{ marginBottom: '0.5em' }}>
							<TextField
								label='Phone'
								id='phone'
								value={phone}
								error={phoneHelper.length !== 0}
								onChange={onChange}
								helperText={phoneHelper}
								fullWidth
							/>
						</Grid>
					</Grid>
					<Grid item style={{ width: '20em' }}>
						<TextField
							id='message'
							multiline
							rows={10}
							className={classes.message}
							InputProps={{ disableUnderline: true }}
							value={message}
							onChange={(event) => setMessage(event.target.value)}
							fullWidth
							placeholder="Hello, let's get in touch!"
						/>
					</Grid>
					<Grid
						item
						container
						justify='center'
						style={{ marginTop: '2em' }}
					>
						<Button
							disabled={
								name.length === 0 ||
								message.length === 0 ||
								email.length === 0 ||
								phone.length === 0 ||
								emailHelper.length !== 0 ||
								phoneHelper.length !== 0
							}
							variant='contained'
							className={classes.sendButton}
							onClick={() => setOpen(true)}
						>
							{buttonContents}
						</Button>
					</Grid>
				</Grid>
			</Grid>

			{/* Dialog confirmation */}
			<Dialog
				style={{
					zIndex: 1302,
				}}
				fullScreen={matchesSM}
				open={open}
				onClose={() => setOpen(false)}
				PaperProps={{
					style: {
						paddingTop: matchesXS ? '1em' : '5em',
						paddingBottom: matchesXS ? '1em' : '5em',
						paddingLeft: matchesXS
							? 0
							: matchesSM
							? '5em'
							: matchesMD
							? '15em'
							: '25em',
						paddingRight: matchesXS
							? 0
							: matchesSM
							? '5em'
							: matchesMD
							? '15em'
							: '25em',
					},
				}}
			>
				<DialogContent>
					<Grid container direction='column'>
						<Grid item>
							<Typography
								variant='h4'
								gutterBottom
								align='center'
							>
								Confirm Message
							</Typography>
						</Grid>
						<Grid item style={{ marginBottom: '0.5em' }}>
							<TextField
								label='Name'
								id='name'
								value={name}
								onChange={(event) =>
									setName(event.target.value)
								}
								fullWidth
							/>
						</Grid>
						<Grid item style={{ marginBottom: '0.5em' }}>
							<TextField
								label='Email'
								id='email'
								value={email}
								error={emailHelper.length !== 0}
								onChange={onChange}
								helperText={emailHelper}
								fullWidth
							/>
						</Grid>
						<Grid item style={{ marginBottom: '0.5em' }}>
							<TextField
								label='Phone'
								id='phone'
								value={phone}
								error={phoneHelper.length !== 0}
								onChange={onChange}
								helperText={phoneHelper}
								fullWidth
							/>
						</Grid>

						<Grid
							item
							style={{ width: matchesSM ? '100%' : '20em' }}
						>
							<TextField
								id='message'
								multiline
								rows={10}
								className={classes.message}
								InputProps={{ disableUnderline: true }}
								value={message}
								onChange={(event) =>
									setMessage(event.target.value)
								}
								fullWidth
								placeholder="Hello, let's get in touch!"
							/>
						</Grid>
						<Grid
							item
							container
							direction={matchesSM ? 'column' : 'row'}
							style={{ marginTop: '2em' }}
							alignItems='center'
						>
							<Grid item>
								<Button
									color='primary'
									style={{ fontWeight: 300 }}
									onClick={() => setOpen(false)}
								>
									Cancel
								</Button>
							</Grid>
							<Grid item>
								<Button
									disabled={
										name.length === 0 ||
										message.length === 0 ||
										email.length === 0 ||
										phone.length === 0 ||
										emailHelper.length !== 0 ||
										phoneHelper.length !== 0
									}
									variant='contained'
									className={classes.sendButton}
									onClick={onConfirm}
								>
									{isLoading ? (
										<CircularProgress size={30} />
									) : (
										buttonContents
									)}
								</Button>
							</Grid>
						</Grid>
					</Grid>
				</DialogContent>
			</Dialog>

			{/* Snackbar */}
			<Snackbar
				open={alert.open}
				message={alert.message}
				ContentProps={{
					style: {
						backgroundColor: alert.backgroundColor,
					},
				}}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'center',
				}}
				onClose={() => setAlert({ ...alert, open: false })}
				autoHideDuration={4000}
			/>

			{/* Call to Action */}
			<Grid
				item
				container
				direction={matchesMD ? 'column' : 'row'}
				justify={matchesMD ? 'center' : undefined}
				className={classes.background}
				lg={8}
				xl={9}
				alignItems='center'
			>
				<Grid
					item
					style={{
						marginLeft: matchesMD ? 0 : '3em',
						textAlign: matchesMD ? 'center' : 'inherit',
					}}
				>
					<Grid container direction='column'>
						<Grid item>
							<Typography
								variant='h2'
								align={matchesMD ? 'center' : undefined}
							>
								Simple Software.
								<br />
								Revolutionary Results.
							</Typography>
							<Typography
								variant='subtitle2'
								style={{ fontSize: '1.5rem' }}
								align={matchesMD ? 'center' : undefined}
							>
								Take advantege of the 21st Century.
							</Typography>
						</Grid>
						<Grid
							container
							item
							justify={matchesMD ? 'center' : undefined}
						>
							<Button
								component={Link}
								href='/revolution'
								onClick={() => setValue(2)}
								variant='outlined'
								className={classes.learnButton}
							>
								<span style={{ marginRight: 5 }}>
									Learn More
								</span>
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
		</Grid>
	)
}

export default Contact
