import React, { useState, useEffect } from 'react'
import Tab from '@material-ui/core/Tab'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles } from '@material-ui/styles'
import Link from '../Link'

const useStyles = makeStyles((theme) => ({
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
}))

const MenuTab = (props) => {
	const { tab, index, tabSelected, setTabSelected } = props
	const classes = useStyles()

	const [anchorEl, setAnchorEl] = useState(null) //determina el anchor para habilitar el menu desplegable
	const [open, setOpen] = useState(false) //determina si se muestra el menu desplegable
	const [selectedIndex, setSelectedIndex] = useState(-1) //para saber que item de menu esta seleccionado

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

	useEffect(() => {
		const index = tab.menuOptions.findIndex(
			(tab) => tab.route === window.location.pathname
		)
		setSelectedIndex(index)
	}, [selectedIndex, tab.menuOptions])

	return (
		<React.Fragment>
			<Tab
				key={`${tab}${index}`}
				aria-owns={anchorEl ? `${tab.label}-menu` : undefined}
				aria-haspopup={anchorEl ? 'true' : undefined}
				className={classes.tab}
				component={Link}
				onMouseOver={(event) => handleClick(event)}
				href={tab.route}
				label={tab.label}
			/>
			<Menu
				key={tab}
				id={`${tab.label}-menu`}
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				classes={{ paper: classes.menu }}
				MenuListProps={{ onMouseLeave: handleClose }}
				elevation={0}
				keepMounted
				style={{ zIndex: 1302 }}
			>
				{tab.menuOptions.map((menuOption, i) => {
					return (
						<MenuItem
							key={i}
							onClick={(event) => {
								console.log(index)
								setTabSelected(index)
								handleMenuItemClick(event, i)
							}}
							selected={
								i === selectedIndex && tabSelected === index
							}
							component={Link}
							href={menuOption.route}
							classes={{ root: classes.menuItem }}
						>
							{menuOption.label}
						</MenuItem>
					)
				})}
			</Menu>
		</React.Fragment>
	)
}

export default MenuTab
