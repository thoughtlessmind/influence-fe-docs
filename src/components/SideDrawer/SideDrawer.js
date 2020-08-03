import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import Drawer from "@material-ui/core/Drawer"

import { Link } from "react-router-dom"

const drawerWidth = 240

function TabPanel(props) {
	const { children, value, index, ...other } = props

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	)
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired
}

function a11yProps(index) {
	return {
		id: `vertical-tab-${index}`,
		"aria-controls": `vertical-tabpanel-${index}`
	}
}

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
		display: "flex",
		height: 224
	},
	tabs: {
		borderRight: `1px solid ${theme.palette.divider}`
	},
	drawerPaper: {
		position: "fixed",
		width: drawerWidth,
		borderRadius: 0,
		borderTop: "none",
		borderBottom: "none",
		top: theme.spacing(8), // push content down to fix scrollbar position
		height: `calc(100% - ${theme.spacing(8)}px)` // subtract appbar height
	},
	drawerContent: {
		overflow: "auto",
		display: "flex",
		flexDirection: "column"
	}
}))

export default function SideDrawer(props) {
	const classes = useStyles()
	const [value, setValue] = React.useState(0)

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}

	return (
		<div className={classes.root}>
			<Drawer
				variant="persistent"
				anchor="left"
				open={props.open}
				elevation={0}
				PaperProps={{ variant: "outlined" }}
				classes={{ paper: classes.drawerPaper }}
			>
				<Tabs
					orientation="vertical"
					variant="scrollable"
					value={value}
					onChange={handleChange}
					aria-label="Vertical tabs example"
					className={classes.tabs}
				>
					<Tab component={Link} to={"/"} label="Home" {...a11yProps(0)} />
					<Tab
						component={Link}
						to={"/typography"}
						label="Typography"
						{...a11yProps(1)}
					/>
					<Tab
						component={Link}
						to={"/buttons"}
						label="Buttons"
						{...a11yProps(2)}
					/>
					<Tab component={Link} to={"/"} label="Inputs" {...a11yProps(3)} />
					<Tab component={Link} to={"/"} label="Dropdown" {...a11yProps(4)} />
					<Tab
						component={Link}
						to={"/"}
						label="Color Pallets"
						{...a11yProps(5)}
					/>
					<Tab component={Link} to={"/"} label="Modal" {...a11yProps(6)} />
				</Tabs>
			</Drawer>
		</div>
	)
}
