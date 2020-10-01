import React, { useState, useEffect } from 'react'
import Link from '../Link'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import { makeStyles } from '@material-ui/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Button from '@material-ui/core/Button'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import Hidden from '@material-ui/core/Hidden'

import DrawerMenu from './DrawerMenu'

function ElevationScroll(props) {
	const { children } = props

	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
	})

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0,
	})
}

const useStyles = makeStyles((theme) => ({
	appbar: {
		zIndex: theme.zIndex.modal + 1,
	},
	toolbarMargin: {
		...theme.mixins.toolbar,
		marginBottom: '3em',
		[theme.breakpoints.down('md')]: {
			marginBottom: '2em',
		},
		[theme.breakpoints.down('xs')]: {
			marginBottom: '1.25em',
		},
	},
	logo: {
		height: '8em',
		[theme.breakpoints.down('md')]: {
			height: '7em',
		},
		[theme.breakpoints.down('xs')]: {
			height: '5.5em',
		},
	},
	logoContainer: {
		padding: 0,
		'&:hover': {
			backgroundColor: 'transparent',
		},
	},
	tabContainer: {
		marginLeft: 'auto',
	},
	tab: {
		...theme.typography.tab,
		minWidth: 10,
		marginLeft: '25px',
	},
	menu: {
		backgroundColor: theme.palette.common.blue,
		color: 'white',
		borderRadius: '0px',
	},
	menuItem: {
		...theme.typography.tab,
		opacity: 0.7,
		'&:hover': {
			opacity: 1,
		},
	},
	button: {
		...theme.typography.estimate,
		borderRadius: '50px',
		marginLeft: '50px',
		marginRight: '25px',
		height: '45px',
		'&:hover': {
			backgroundColor: theme.palette.secondary.light,
		},
	},
	drawerIconContainer: {
		'&:hover': {
			backgroundColor: 'transparent',
		},
		marginLeft: 'auto',
	},
	drawerIcon: {
		height: '50px',
		width: '50px',
		color: 'white',
		[theme.breakpoints.down('xs')]: {
			height: '40px',
			width: '40px',
		},
	},
	drawer: {
		backgroundColor: theme.palette.common.blue,
	},
}))

const Header = (props) => {
	const classes = useStyles()
	const { value, setValue, selectedIndex, setSelectedIndex } = props
	const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)

	const [openDrawer, setOpenDrawer] = useState(false)

	const [anchorEl, setAnchorEl] = useState(null) //determina el anchor para habilitar el menu desplegable
	const [open, setOpen] = useState(false) //determina si se muestra el menu desplegable

	const handleChange = (e, value) => {
		setValue(value)
	}

	const handleClick = (e) => {
		setAnchorEl(e.currentTarget)
		setOpen(true)
	}

	const handleMenuItemClick = (e, i) => {
		setAnchorEl(null)
		setOpen(false)
		setSelectedIndex(i)
	}

	const handleClose = (e) => {
		setAnchorEl(null)
		setOpen(false)
	}

	const servicesMenuOptions = [
		{
			name: 'Services',
			link: '/services',
			activeIndex: 1,
			selectedIndex: 0,
		},
		{
			name: 'Custom Software Development',
			link: '/customsoftware',
			activeIndex: 1,
			selectedIndex: 1,
		},
		{
			name: 'iOS / Android App Development',
			link: '/mobileapps',
			activeIndex: 1,
			selectedIndex: 2,
		},
		{
			name: 'Website Development',
			link: '/websites',
			activeIndex: 1,
			selectedIndex: 3,
		},
	]

	const routes = [
		{ name: 'Home', link: '/', activeIndex: 0 },
		{
			name: 'Services',
			link: '/services',
			activeIndex: 1,
			onMouseOver: (event) => handleClick(event),
			ariaOwns: anchorEl ? 'services-menu' : undefined,
			ariaHasPopup: anchorEl ? 'true' : undefined,
		},
		{ name: 'The Revolution', link: '/revolution', activeIndex: 2 },
		{ name: 'About Us', link: '/about', activeIndex: 3 },
		{ name: 'Contact Us', link: '/contact', activeIndex: 4 },
	]

	useEffect(() => {
		;[...servicesMenuOptions, ...routes].forEach((route) => {
			switch (window.location.pathname) {
				case `${route.link}`:
					if (value !== route.activeIndex) {
						setValue(route.activeIndex)
						if (
							route.selectedIndex &&
							route.selectedIndex !== selectedIndex
						) {
							setSelectedIndex(route.selectedIndex)
						}
					}
					break
				case '/estimate':
					if (value !== false) {
						setValue(false)
					}
					break
				default:
					break
			}
		})
		window.onpopstate = (e) => {
			;[...servicesMenuOptions, ...routes].forEach((route) => {
				if (window.location.pathname === route.link) {
					setValue(route.activeIndex)
					if (route.selectedIndex !== null) {
						setSelectedIndex(route.selectedIndex)
					}
				}
			})
		}
	}, [
		value,
		routes,
		selectedIndex,
		servicesMenuOptions,
		setSelectedIndex,
		setValue,
	])

	const tabsMenu = (
		<React.Fragment>
			<Tabs
				value={value}
				onChange={handleChange}
				className={classes.tabContainer}
				indicatorColor='primary'
			>
				{routes.map((route, index) => (
					<Tab
						key={`${route}-${index}`}
						className={classes.tab}
						component={Link}
						href={route.link}
						label={route.name}
						aria-owns={route.ariaOwns}
						aria-haspopup={route.ariaHasPopup}
						onMouseOver={route.onMouseOver}
					/>
				))}
			</Tabs>
			<Menu
				id={'services-menu'}
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				classes={{ paper: classes.menu }}
				MenuListProps={{ onMouseLeave: handleClose }}
				elevation={0}
				keepMounted
				style={{ zIndex: 1302 }}
			>
				{servicesMenuOptions.map((menuOption, i) => (
					<MenuItem
						key={`${menuOption}${i}`}
						component={Link}
						href={menuOption.link}
						classes={{ root: classes.menuItem }}
						onClick={(event) => {
							handleMenuItemClick(event, i)
						}}
						selected={
							selectedIndex === i &&
							value === menuOption.activeIndex
						}
					>
						{menuOption.name}
					</MenuItem>
				))}
			</Menu>
			<Button
				variant='contained'
				component={Link}
				href='/estimate'
				color='secondary'
				className={classes.button}
				onClick={() => setValue(false)}
			>
				Free Estimate
			</Button>
		</React.Fragment>
	)

	const drawerMenu = (
		<React.Fragment>
			<SwipeableDrawer
				disableBackdropTransition={!iOS}
				disableDiscovery={iOS}
				classes={{ paper: classes.drawer }}
				open={openDrawer}
				onClose={() => setOpenDrawer(false)}
				onOpen={() => setOpenDrawer(true)}
			>
				<div className={classes.toolbarMargin} />

				<DrawerMenu
					items={routes}
					setOpenDrawer={setOpenDrawer}
					additionalItems={[
						{ name: 'Free Estimate', link: '/estimate' },
					]}
					tabSelected={value}
					setTabSelected={setValue}
				/>
			</SwipeableDrawer>
			<IconButton
				className={classes.drawerIconContainer}
				onClick={() => setOpenDrawer(!openDrawer)}
				disableRipple
			>
				<MenuIcon className={classes.drawerIcon} />
			</IconButton>
		</React.Fragment>
	)

	return (
		<React.Fragment>
			<ElevationScroll>
				<AppBar position='fixed' className={classes.appbar}>
					<Toolbar disableGutters>
						<Button
							component={Link}
							href='/'
							className={classes.logoContainer}
							disableRipple
							onClick={(event) => {
								setValue(0)
								setOpenDrawer(false)
							}}
						>
							<img
								alt='Company Logo'
								src='/assets/logo.svg'
								className={classes.logo}
							/>
						</Button>
						<Hidden mdDown>{tabsMenu}</Hidden>
						<Hidden lgUp>{drawerMenu}</Hidden>
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<div className={classes.toolbarMargin} />
		</React.Fragment>
	)
}

export default Header
