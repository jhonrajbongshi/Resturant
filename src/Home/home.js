import React from 'react';
import Product from '../Product/product'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './Home.css'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Home() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
        <Product title="Rogan Josh" subtitle="Rogan Josh" image="10" type="home_product"/>  
        </Grid>
        <Grid item xs={4}>
        <Product title="Vada Pav" subtitle="Vada Pav" image="9" type="home_product"/>  
        </Grid>
        <Grid item xs={4}>
        <Product title="Dhokla" subtitle="Dhokla" image="8" type="home_product"/>  
        </Grid>
      </React.Fragment>
    );
  }

  return (
  <div className="home">
    <h4>Results</h4>
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  </div>
  );
}