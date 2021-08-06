import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import LaptopIcon from '@material-ui/icons/Laptop';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import About from './About'
import Skills from './skills'
import Contact from './Contact';
import { MediaCard2 } from './Projects';


import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import Projects from './Projects';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-prevent-tab-${index}`,
    'aria-controls': `scrollable-prevent-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '45%',
    marginLeft:'29%'
   
  },
}));
const CustomTab = withStyles({
    root: {
      backgroundColor: '#4fb3bf',
    },
    selected: {
      backgroundColor: '#00838f',
    },
  })(Tab);

export default function ScrollableTabsButtonPrevent() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
      
        <Tabs
          value={value}
          onChange={handleChange}
          
          centered
          backgroundColor="#ff80ab"
        >
       
          <CustomTab label ="About" icon={<PersonOutlineIcon />} aria-label="About" {...a11yProps(0)} />
          <CustomTab label ="Skills" icon={<LaptopIcon />} aria-label="Skills" {...a11yProps(1)} />
          <CustomTab label ="Projects" icon={<WorkOutlineIcon />} aria-label="Projects" {...a11yProps(2)} />
          <CustomTab label ="Contact"icon={<PhoneIcon />} aria-label="help" {...a11yProps(3)} />
          
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <About />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Skills/>
      </TabPanel>
      <TabPanel value={value} index={2}>
       <Projects />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Contact/>
      </TabPanel>
      
    </div>
  );
}
