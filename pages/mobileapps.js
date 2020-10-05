import React from 'react'
import Head from 'next/head'
import Lottie from 'react-lottie'
import Link from '../src/Link'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Hidden from '@material-ui/core/Hidden'

import CallToAction from '../src/ui/CallToAction'
import integrationAnimation from '../src/animations/integrationAnimation/data.json'

const useStyles = makeStyles((theme) => ({
	heading: {
		maxWidth: '40em',
	},
	arrowContainer: {
		marginTop: '0.5em',
	},
	mainContainer: {
		paddingLeft: '5em',
		paddingRight: '5em',
		paddingTop: '2em',
		paddingBottom: '10em',
		[theme.breakpoints.down('sm')]: {
			paddingLeft: '1.5em',
			paddingRight: '1.5em',
			paddingTop: '1em',
			paddingBottom: '5em',
		},
	},
	itemContainer: {
		maxWidth: '40em',
	},
}))

const MobileApps = (props) => {
	const classes = useStyles()
	const theme = useTheme()
	const { setValue, setSelectedIndex } = props
	const matchesMD = useMediaQuery(theme.breakpoints.down('md'))
	const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
	const matchesXS = useMediaQuery(theme.breakpoints.down('xs'))

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: integrationAnimation,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	}

	return (
		<>
			<Head>
				<title key='title'>
					iOS / Android App Design and Development | Arc Development
				</title>
				<meta
					name='description'
					key='description'
					content='MobileApps made easy | Our cutting-edge mobile app development process lets us build beautifully designed, carefully crafted apps for both iOS and Android. 
					Get a free online estimate now!'
				/>
				<meta
					property='og:title'
					key='og:title'
					content='Bringing West Coast Technology to the Midwest | iOS / Android App Development'
				/>
				<meta
					property='og:url'
					key='og:url'
					content='http://torosdevelopment.com/mobileapps'
				/>
				<link
					rel='canonical'
					key='canonical'
					href='http://torosdevelopment.com/mobileapps'
				/>
			</Head>
			<Grid
				container
				direction='column'
				className={classes.mainContainer}
			>
				{/* Navigation and title */}
				<Grid
					item
					container
					direction='row'
					justify={matchesMD ? 'center' : undefined}
				>
					<Hidden mdDown>
						<Grid
							item
							className={classes.arrowContainer}
							style={{ marginRight: '1em', marginLeft: '-3.5em' }}
						>
							<IconButton
								style={{ backgroundColor: 'transparent' }}
								component={Link}
								href='/customsoftware'
								onClick={() => setSelectedIndex(1)}
							>
								<img
									src='/assets/backArrow.svg'
									alt='Back to Custom Software Development page'
								/>
							</IconButton>
						</Grid>
					</Hidden>
					<Grid
						item
						container
						direction='column'
						className={classes.heading}
					>
						<Grid item>
							<Typography
								variant='h1'
								align={matchesMD ? 'center' : undefined}
							>
								iOS/Android App Development
							</Typography>
						</Grid>
						<Grid item>
							<Typography
								variant='body1'
								align={matchesMD ? 'center' : undefined}
								paragraph
							>
								Mobile apps allow you to take your tools on the
								go.
							</Typography>
							<Typography variant='body1' paragraph>
								Whether you want an app for your customers,
								employees, or yourself, we can build
								cross-platform native solutions for any part of
								your business process. This opens you up to a
								whole new world of possibilities by taking
								advantage of phone features like the camera,
								GPS, push notifications, and more.
							</Typography>
							<Typography
								variant='body1'
								align={matchesMD ? 'center' : undefined}
								paragraph
							>
								Convenience. Connection.
							</Typography>
						</Grid>
					</Grid>
					<Hidden mdDown>
						<Grid item className={classes.arrowContainer}>
							<IconButton
								style={{ backgroundColor: 'transparent' }}
								component={Link}
								href='/websites'
								onClick={() => setSelectedIndex(3)}
							>
								<img
									src='/assets/forwardArrow.svg'
									alt='Forward to Website Development page'
								/>
							</IconButton>
						</Grid>
					</Hidden>
				</Grid>

				{/* Animations */}
				<Grid
					item
					container
					direction={matchesSM ? 'column' : 'row'}
					style={{ marginTop: '15em', marginBottom: '15em' }}
				>
					<Grid
						item
						container
						direction='column'
						alignItems={matchesSM ? 'center' : undefined}
						md
					>
						<Grid item>
							<Typography
								variant='h4'
								align={matchesSM ? 'center' : 'left'}
								gutterBottom
							>
								Integration
							</Typography>
						</Grid>
						<Grid item>
							<Typography
								variant='body1'
								align={matchesSM ? 'center' : 'left'}
								paragraph
							>
								Our technology enables an innate interconnection
								between web and mobile applications, putting
								everything you need right in one convenient
								place.
							</Typography>
							<Typography
								variant='body1'
								align={matchesSM ? 'center' : 'left'}
								paragraph
							>
								This allows you to extend your reach, reinvent
								interactions, and develop a stronger
								relationship with your users than ever before.
							</Typography>
						</Grid>
					</Grid>
					<Grid
						item
						container
						direction='column'
						alignItems={matchesSM ? 'center' : undefined}
						md
					>
						<Lottie
							options={defaultOptions}
							style={{
								maxWidth: matchesMD ? '15em' : '20em',
								height: matchesMD ? '20em' : undefined,
								marginTop: matchesSM ? '5em' : 0,
								marginBottom: matchesSM ? '5em' : 0,
							}}
						/>
					</Grid>
					<Grid
						item
						container
						direction='column'
						alignItems={matchesMD ? 'center' : undefined}
						md
					>
						<Grid item>
							<Typography
								variant='h4'
								align={matchesSM ? 'center' : 'right'}
								gutterBottom
							>
								Simultaneous Platform Support
							</Typography>
						</Grid>
						<Grid item>
							<Typography
								variant='body1'
								align={matchesSM ? 'center' : 'right'}
								paragraph
							>
								Our cutting-edge development process allows us
								to create apps for iPhone, Android, and tablets
								— all at the same time
							</Typography>
							<Typography
								variant='body1'
								align={matchesSM ? 'center' : 'right'}
								paragraph
							>
								This significantly reduces costs and creates a
								more unified brand experience across all
								devices.
							</Typography>
						</Grid>
					</Grid>
				</Grid>

				{/* Icons */}
				<Grid
					item
					container
					direction={matchesMD ? 'column' : 'row'}
					style={{
						marginBottom: '15em',
						display: matchesMD ? 'grid' : undefined,
					}}
				>
					<Grid
						item
						container
						direction='column'
						alignItems='center'
						md
					>
						<Grid item>
							<Typography
								variant='h4'
								align='center'
								gutterBottom
							>
								Extend Functionality
							</Typography>
						</Grid>
						<Grid item>
							<img
								src='/assets/swissKnife.svg'
								alt='Swiss Army Knife'
							/>
						</Grid>
					</Grid>
					<Grid
						item
						container
						direction='column'
						alignItems='center'
						style={{
							marginTop: matchesMD ? '10em' : 0,
							marginBottom: matchesMD ? '10em' : 0,
						}}
						md
					>
						<Grid item>
							<Typography
								variant='h4'
								align='center'
								gutterBottom
							>
								Extend Access
							</Typography>
						</Grid>
						<Grid item>
							<img
								src='/assets/extendAccess.svg'
								alt='tear-one-off sign'
								style={{
									maxWidth: matchesXS ? '20em' : '28em',
								}}
							/>
						</Grid>
					</Grid>
					<Grid
						item
						container
						direction='column'
						alignItems='center'
						md
					>
						<Grid item>
							<Typography
								variant='h4'
								align='center'
								gutterBottom
							>
								Increase Engagement
							</Typography>
						</Grid>
						<Grid item>
							<img
								src='/assets/increaseEngagement.svg'
								alt='app with notification'
							/>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<CallToAction
				setValue={setValue}
				setSelectedIndex={setSelectedIndex}
			/>
		</>
	)
}

export default MobileApps
