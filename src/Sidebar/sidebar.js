import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import { List,ListItem ,ListItemIcon ,ListItemText} from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Checkbox from '@material-ui/core/Checkbox';
import Slider from '@material-ui/core/Slider';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

function valuetext(value) {
  return `${value}`;
}

export default function Sidebar() {
  const classes = useStyles();
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
  <div className="sidebar">
    <h4>Filter</h4>
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Format</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <List component="nav" aria-label="main mailbox folders">
        <ListItem >
          <ListItemIcon>
          <Checkbox      />
          </ListItemIcon>
          <ListItemText primary="Buffet" />
        </ListItem>
        <ListItem >
          <ListItemIcon>
          <Checkbox      />
          </ListItemIcon>
          <ListItemText primary="Lunch Box" />
        </ListItem>
        <ListItem >
          <ListItemIcon>
          <Checkbox      />
          </ListItemIcon>
          <ListItemText primary="Snack Box" />
        </ListItem>
      </List>
     
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Price</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Occasion</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <List component="nav" aria-label="main mailbox folders">
        <ListItem >
          <ListItemIcon>
          <Checkbox      />
          </ListItemIcon>
          <ListItemText primary="Birthday Celebration" />
        </ListItem>
        <ListItem >
          <ListItemIcon>
          <Checkbox      />
          </ListItemIcon>
          <ListItemText primary="Baby Shower" />
        </ListItem>
        <ListItem >
          <ListItemIcon>
          <Checkbox      />
          </ListItemIcon>
          <ListItemText primary="House Warming" />
        </ListItem>
      </List>
        </AccordionDetails>
      </Accordion>
    </div>
  </div>
  );
}
