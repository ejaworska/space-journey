import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Box, SvgIcon, AppBar, Tabs, Tab } from '@material-ui/core';
import PropTypes from 'prop-types';
import Home from './home/Home';
import Apod from './apod/Apod';
import Neo from './neo/Neo';
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    background: theme.palette.secondary.main,
    color: theme.palette.text.secondary
  },
  icon: {
    margin: theme.spacing(2),
  },
  iconHover: {
    margin: theme.spacing(2),
    '&:hover': {
  
    },
  },
  box: {
    background: theme.palette.background.surface,
  },
  AppBar: {
    background: '#1F2124',
    color: '#fff',
  },
}));

const TabPanel = props => {
  const classes = useStyles();
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3} className={classes.box} >{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const a11yProps = index => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const  HomeIcon = () => {
  return (
    <SvgIcon>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const NavigationTabs = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(props.value);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  return (
    <BrowserRouter>
      <div className={classes.root}>
        <Route
          path="/"
          render={() => (
            <Fragment>
              <AppBar position="sticky" className={classes.AppBar} >
                <Tabs value={value} 
                      onChange={handleChange} 
                      aria-label="simple tabs example" 
                      TabIndicatorProps={{style: {background:'white'}}}
                >
                  <Tab label= {<HomeIcon className={classes.icon} />} {...a11yProps(0)} component={Link} to="/" />
                  <Tab label="Apod" {...a11yProps(1)} component={Link} to="/apod" />
                  <Tab label="Neo" {...a11yProps(2)} component={Link} to="/neo" />
                </Tabs>
              </AppBar>
              <Switch>
                <Route exact path="/" render={() => 
                  <TabPanel value={value} index={0}><Home /></TabPanel>} 
                />
                <Route path="/apod" render={() => 
                  <TabPanel value={value} index={1}><Apod /></TabPanel>} 
                />
                <Route path="/neo" render={() => 
                  <TabPanel value={value} index={2}><Neo /></TabPanel>} 
                />
              </Switch>
            </Fragment>
          )}
        />
      </div>
    </BrowserRouter>
  );
}

export default NavigationTabs;


