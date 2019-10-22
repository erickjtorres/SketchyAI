import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ColorLens from '@material-ui/icons/ColorLens';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import SvgIcon from '@material-ui/core/SvgIcon';
import blue from '@material-ui/core/colors/blue';
import Button from '@material-ui/core/Button';

const drawerWidth = 280;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  iconHover: {
    // margin: theme.spacing.unit * 2,
    '&:hover': {
      color: blue[800],
    },
  },
});

class PersistentDrawerLeft extends React.Component {
  state = {
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              SketchyAI
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem key='Colors'>
              <ListItemIcon><ColorLens/></ListItemIcon>
              <ListItemText primary='Colors'/>
            </ListItem>
            <GridList className={classes.gridList}  style={{
          position: 'relative', left: '10%'
          }} cols={3.5}>
      
          <GridListTile>
            <Button className={classes.button} style={{position:'relative', right:'50%'}} onClick={() => this.props.changeColor('red')}>
              <SvgIcon className={classes.iconHover} color="secondary" style={{position:'relative', left:'45%'}} >
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>
              </SvgIcon>
              <ListItemText primary='Red' style={{position:'relative', right: '6%', marginTop: '47%'}}/>
            </Button>
          </GridListTile>

          <GridListTile>
          <Button className={classes.button} style={{position:'relative', right:'50%'}} onClick={() => this.props.changeColor('blue')}>
            <SvgIcon className={classes.iconHover} color="primary" style={{position:'relative', left:'45%', alignItems:'center'}} >
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>
            </SvgIcon>
            <ListItemText primary='Blue' style={{position:'relative', right: '6%', marginTop: '45%'}}/>
          </Button>
          </GridListTile>

          <GridListTile>
          <Button className={classes.button} style={{position:'relative', right:'50%', alignItems:'center'}} onClick={() => this.props.changeColor('black')}>
            <SvgIcon className={classes.iconHover} color="disabled" style={{position:'relative', left:'45%'}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>
            </SvgIcon>
            <ListItemText primary='Black' style={{position:'relative', right: '6%', marginTop: '40%'}}/>
          </Button>
          </GridListTile>

      </GridList>
          </List>
          <Divider />
          <List>
    
            <ListItem button key='Eraser' onClick={() => this.props.eraser()}>
                <ListItemIcon> 
                  <SvgIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1"  width="24" height="24" viewBox="0 0 24 24">
   <path fill="#000000" d="M16.24,3.56L21.19,8.5C21.97,9.29 21.97,10.55 21.19,11.34L12,20.53C10.44,22.09 7.91,22.09 6.34,20.53L2.81,17C2.03,16.21 2.03,14.95 2.81,14.16L13.41,3.56C14.2,2.78 15.46,2.78 16.24,3.56M4.22,15.58L7.76,19.11C8.54,19.9 9.8,19.9 10.59,19.11L14.12,15.58L9.17,10.63L4.22,15.58Z" />
</svg>
</SvgIcon>
</ListItemIcon>
                <ListItemText primary='Eraser' />
              </ListItem>

              <ListItem button key='Download Code'>
                <ListItemIcon> <InboxIcon /></ListItemIcon>
                <ListItemText primary='Download Code' />
              </ListItem>
          </List>
        </Drawer>
      </div>
    );
  }
}

PersistentDrawerLeft.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(PersistentDrawerLeft);