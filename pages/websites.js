import React from 'react'
import Head from 'next/head'
import Link from '../src/Link'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Hidden from '@material-ui/core/Hidden'

import CallToAction from '../src/ui/CallToAction'

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
	paragraphContainer: {
		maxWidth: '30em',
	},
}))

const Websites = (props) => {
	const classes = useStyles()
	const theme = useTheme()
	const { setValue, setSelectedIndex } = props
	const matchesMD = useMediaQuery(theme.breakpoints.down('md'))
	const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))

	return (
		<>
			<Head>
				<title key='title'>
					Stunning Custom Website Design | Arc Development
				</title>
				<meta
					name='description'
					key='description'
					content='Completely custom designed and build from scratch to blazing fast. 
					Optimized code, server-side rendering, and perfect responsive design | 99% PageSpeed Score.
					Get a free online estimate now!'
				/>
				<meta
					property='og:title'
					key='og:title'
					content='Bringing West Coast Technology to the Midwest | Website Development'
				/>
				<meta
					property='og:url'
					key='og:url'
					content='http://torosdevelopment.com/websites'
				/>
				<link
					rel='canonical'
					key='canonical'
					href='http://torosdevelopment.com/websites'
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
								href='/mobileapps'
								onClick={() => setSelectedIndex(2)}
							>
								<img
									src='/assets/backArrow.svg'
									alt='Back to iOS / Android App Development page'
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
								Website Development
							</Typography>
						</Grid>
						<Grid item>
							<Typography
								variant='body1'
								align={matchesMD ? 'center' : undefined}
								paragraph
							>
								Having a website is a necessity in today’s
								business world. They give you one central,
								public location to let people know who you are,
								what you do, and why you’re the best at it.
							</Typography>
							<Typography variant='body1' paragraph>
								From simply having your hours posted to having a
								full fledged online store, making yourself as
								accessible as possible to users online drives
								growth and enables you to reach new customers.
							</Typography>
						</Grid>
					</Grid>
					<Hidden mdDown>
						<Grid item className={classes.arrowContainer}>
							<IconButton
								style={{ backgroundColor: 'transparent' }}
								component={Link}
								href='/services'
								onClick={() => setSelectedIndex(0)}
							>
								<img
									src='/assets/forwardArrow.svg'
									alt='Forward to services page'
								/>
							</IconButton>
						</Grid>
					</Hidden>
				</Grid>

				{/* Analytics  */}
				<Grid
					item
					container
					direction={matchesSM ? 'column' : 'row'}
					alignItems='center'
					style={{ marginTop: '15em' }}
				>
					<Grid item>
						<Grid container direction='column'>
							<Grid item>
								<Typography
									variant='h4'
									align={matchesSM ? 'center' : undefined}
									gutterBottom
								>
									Analytics
								</Typography>
							</Grid>
							<Grid
								item
								alignItems={matchesSM ? 'center' : undefined}
							>
								<img
									src='/assets/analytics.svg'
									alt="graph with magnifying glass revealing 1's and 0's"
									style={{
										marginLeft: matchesSM ? 0 : '-2.75em',
									}}
								/>
							</Grid>
						</Grid>
					</Grid>
					<Grid item className={classes.paragraphContainer}>
						<Typography
							variant='body1'
							align={matchesSM ? 'center' : undefined}
						>
							Knowledge is power, and data is 21st Century gold.
							Analyzing this data can reveal hidden patterns and
							trends in your business, empowering you to make
							smarter decisions with measurable effects.
						</Typography>
					</Grid>
				</Grid>

				{/* Ecommerce  */}
				<Grid
					item
					container
					direction={matchesSM ? 'column' : 'row'}
					alignItems='center'
					justify='flex-end'
					style={{ marginTop: '15em', marginBottom: '15em' }}
				>
					<Grid item>
						<Grid container direction='column'>
							<Grid item>
								<Typography
									variant='h4'
									align='center'
									gutterBottom
								>
									E-Commerce
								</Typography>
							</Grid>
							<Grid
								item
								alignItems={matchesSM ? 'center' : undefined}
							>
								<img
									src='/assets/ecommerce.svg'
									alt='world outlined made with dollar signs'
								/>
							</Grid>
						</Grid>
					</Grid>
					<Grid
						item
						style={{ marginLeft: matchesSM ? 0 : '1em' }}
						className={classes.paragraphContainer}
					>
						<Typography
							variant='body1'
							align={matchesSM ? 'center' : undefined}
							paragraph
						>
							It’s no secret that people like to shop online.
						</Typography>
						<Typography
							variant='body1'
							align={matchesSM ? 'center' : undefined}
							paragraph
						>
							In 2017 over <strong>$2.3 trillion</strong> was
							spent in e-commerce, and it’s time for your slice of
							that pie.
						</Typography>
					</Grid>
				</Grid>

				{/* Outreach  */}
				<Grid
					item
					container
					direction={matchesSM ? 'column' : 'row'}
					alignItems='center'
				>
					<Grid item>
						<Grid container direction='column'>
							<Grid item>
								<Typography
									variant='h4'
									align={matchesSM ? 'center' : undefined}
									gutterBottom
								>
									Outreach
								</Typography>
							</Grid>
							<Grid
								item
								alignItems={matchesSM ? 'center' : undefined}
							>
								<img
									src='/assets/outreach.svg'
									alt='Megaphone'
								/>
							</Grid>
						</Grid>
					</Grid>
					<Grid
						item
						style={{ marginLeft: matchesSM ? 0 : '1em' }}
						className={classes.paragraphContainer}
					>
						<Typography
							variant='body1'
							align={matchesSM ? 'center' : undefined}
						>
							Draw people in with a dazzling website. Showing off
							your products online is a great way to help
							customers decide what’s right for them before
							visiting in person.
						</Typography>
					</Grid>
				</Grid>

				{/* SEO  */}
				<Grid
					item
					container
					direction={matchesSM ? 'column' : 'row'}
					alignItems='center'
					justify='flex-end'
					style={{ marginTop: '15em' }}
				>
					<Grid item>
						<Grid container direction='column'>
							<Grid item>
								<Typography
									variant='h4'
									align='center'
									gutterBottom
								>
									Search Engine
									<br />
									Optimization
								</Typography>
							</Grid>
							<Grid
								item
								alignItems={matchesSM ? 'center' : undefined}
							>
								<img
									src='/assets/seo.svg'
									alt="graph with magnifying glass revealing 1's and 0's"
								/>
							</Grid>
						</Grid>
					</Grid>
					<Grid
						item
						style={{ marginLeft: matchesSM ? 0 : '1em' }}
						className={classes.paragraphContainer}
					>
						<Typography
							variant='body1'
							align={matchesSM ? 'center' : undefined}
							paragraph
						>
							How often have you ever been to the second page of
							Google results?
						</Typography>
						<Typography
							variant='body1'
							align={matchesSM ? 'center' : undefined}
							paragraph
						>
							If you’re like us, probably never.
						</Typography>
						<Typography
							variant='body1'
							align={matchesSM ? 'center' : undefined}
							paragraph
						>
							Customers don’t go there either, so we make sure
							your website is designed to end up on top.
						</Typography>
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

export default Websites
