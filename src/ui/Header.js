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
		textTransform: 'none',
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
							<svg
								className={classes.logo}
								id='Layer_1'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 480 139'
							>
								<style>{`.st0{fill:none}.st1{fill:#fff}.st2{font-family:Raleway; font-weight: 100;}.st6{fill:none;stroke:#000;stroke-width:3;stroke-miterlimit:10}`}</style>
								<path d='M448.07-1l-9.62 17.24-8.36 14.96L369.93 139H-1V-1z' />
								<path
									className='st0'
									d='M-1 139h479.92v.01H-1z'
								/>
								<text
									transform='translate(261.994 65.233)'
									className='st1 st2'
									fontSize='57'
								>
									Arc
								</text>
								<text
									transform='translate(17.692 112.015)'
									className='st1 st2'
									fontSize='54'
								>
									Development
								</text>
								<path
									className='st0'
									d='M382.44 116.43l47.65-85.23 8.36-14.96M369.83 139l-.01.01L362 153'
								/>
								<path
									d='M438.76 15.76l-56.42 100.91c-12.52-10.83-20.45-26.82-20.45-44.67 0-32.58 26.42-59 59-59 6.23 0 12.24.97 17.87 2.76z'
									fill='#0b72b9'
								/>
								<path d='M479.89 72c0 32.58-26.42 59-59 59-14.73 0-28.21-5.4-38.55-14.33l56.42-100.91c23.85 7.57 41.13 29.89 41.13 56.24z' />
								<g
									id='Group_186'
									transform='translate(30.153 11.413)'
								>
									<g id='Group_185'>
										<g id='Words'>
											<path
												id='Path_59'
												className='st1'
												d='M405.05 14.4l-.09 80.38-7.67-.01.06-52.25-29.4 52.21-7.94-.01 45.04-80.32z'
											/>
										</g>
									</g>
								</g>
								<path
									className='st0'
									d='M457-17l-8.93 16-9.62 17.24-8.36 14.96L369.93 139l-.01.01L361 155'
								/>
							</svg>
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
