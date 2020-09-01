import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { withStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import Routes from "../routes"
import SideDrawer from "../components/SideDrawer/SideDrawer"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
const drawerWidth = 240

const styles = theme => ({
	appFrame: {
		zIndex: 1,
		overflow: "hidden",
		height: "100vh"
	},
	appBar: {
		position: "fixed",
		width: "100%",
		zIndex: 1400
	},
	menuButton: {
		marginLeft: 12,
		marginRight: 20
	},
	contentWrapper: {
		overflow: "auto",
		position: "fixed",
		width: "100%",
		top: theme.spacing.unit * 8,
		height: "calc(100% - 64px)", // Subtract width of header
		backgroundColor: theme.palette.background.default,
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		})
	},
	"content-left": {
		marginLeft: drawerWidth
	},
	contentShift: {
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	content: {
		padding: theme.spacing(3)
	}
})

class PersistentDrawer extends React.Component {
	state = {
		open: true
	}

	handleDrawerToggle = () => {
		this.setState({ open: !this.state.open })
	}

	Test = () => <h1>Home</h1>

	render() {
		const { classes } = this.props
		const { open } = this.state

		return (
			<Router>
				<div className={classes.appFrame}>
					<SideDrawer open={this.state.open} />
					<AppBar className={classes.appBar} elevation={0}>
						<Toolbar disableGutters={true}>
							<IconButton
								color="inherit"
								aria-label="Open drawer"
								onClick={this.handleDrawerToggle}
								className={classes.menuButton}
							>
								<MenuIcon />
							</IconButton>
							<Typography variant="title" color="inherit" noWrap>
								Persistent drawer
							</Typography>
						</Toolbar>
					</AppBar>
					<div
						className={classNames(classes.contentWrapper, {
							[classes.contentShift]: open,
							[classes[`content-left`]]: open
						})}
					>
						<div className={classes.content}>
							<Routes />
						</div>
					</div>
				</div>
			</Router>
		)
	}
}

PersistentDrawer.propTypes = {
	classes: PropTypes.object.isRequired,
	theme: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(PersistentDrawer)
