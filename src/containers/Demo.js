import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Button, ListItem } from "@material-ui/core";
import Routes from "../routes";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const drawerWidth = 240;

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
  },
  contentWrapper: {
    overflow: "auto",
    position: "fixed",
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
  },
  logoutContainer: {
    marginTop: "auto",
    paddingBottom: "0",
    position: "fixed",
    width: drawerWidth,
    bottom: 0
  }
});

class PersistentDrawer extends React.Component {
  state = {
    open: true
  };

  handleDrawerToggle = () => {
    this.setState({ open: !this.state.open });
  };

  Test = () => <h1>Home</h1>;

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    const drawer = (
      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        elevation={0}
        PaperProps={{
          variant: "outlined"
        }}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerContent}>
          <Link to="/">Home</Link>
          <Link to="/typography">Typography</Link>
          <Link to="/buttons">Buttons</Link>
        </div>
      </Drawer>
    );

    return (
      <Router>
        <div className={classes.appFrame}>
          {drawer}
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
    );
  }
}

PersistentDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(PersistentDrawer);
