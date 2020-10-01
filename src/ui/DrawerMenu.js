import React from 'react'
import { makeStyles } from '@material-ui/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Link from '../Link'

const useStyles = makeStyles((theme) => ({
	drawerItem: {
		...theme.typography.tab,
		color: 'white',
		opacity: 0.7,
	},
	drawerItemSelected: {
		'& .MuiListItemText-root': {
			opacity: 1,
		},
	},
	drawerAdditionalItem: {
		backgroundColor: theme.palette.common.orange,
	},
}))

const DrawerMenu = (props) => {
	const classes = useStyles()
	const {
		items,
		setOpenDrawer,
		additionalItems,
		tabSelected,
		setTabSelected,
	} = props

	const handleClick = (index) => {
		setOpenDrawer(false)
		setTabSelected(index)
	}

	const handleAdditionalClick = () => {
		setOpenDrawer(false)
		setTabSelected(false)
	}

	return (
		<React.Fragment>
			<List disablePadding>
				{items.map((item, index) => {
					return (
						<ListItem
							key={`${item}${index}`}
							divider
							button
							component={Link}
							href={item.link}
							selected={tabSelected === index}
							classes={{ selected: classes.drawerItemSelected }}
							onClick={() => handleClick(index)}
						>
							<ListItemText
								disableTypography
								className={classes.drawerItem}
							>
								{item.name}
							</ListItemText>
						</ListItem>
					)
				})}
				{additionalItems.map((item, index) => {
					return (
						<ListItem
							key={`${item}${index}`}
							selected={tabSelected === false}
							classes={{
								root: classes.drawerAdditionalItem,
								selected: classes.drawerItemSelected,
							}}
							divider
							button
							component={Link}
							href={item.link}
							onClick={() => handleAdditionalClick()}
						>
							<ListItemText
								disableTypography
								className={classes.drawerItem}
							>
								{item.name}
							</ListItemText>
						</ListItem>
					)
				})}
			</List>
		</React.Fragment>
	)
}

export default DrawerMenu
