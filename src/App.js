import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import PressConferences from "./components/PressConferences/PressConferences";
import Footer from "./components/Footer/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={4}>
            <Navbar />
          </Grid>
          <Grid item xs={8}>
            <PressConferences />
          </Grid>
          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Grid>
      </div>
  );
}
