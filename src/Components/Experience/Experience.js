import React from 'react';
import EduExpDetails from "./components/EduExpDetails/EduExpDetails.js";
import {Paper, withStyles, Grid} from '@material-ui/core';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    height: theme.spacing(20),
  }
});

class Experience extends React.Component {
  render() {
    const {eduexp=[]}=this.props;
    const {classes} = this.props;
    const filteredExperience=eduexp.filter((edu)=>{return edu.title==="Experience"});
    const filteredEducation=eduexp.filter((edu)=>{return edu.title==="Education"});
    return <div>
      <div className={classes.root}>
        <Grid item xs={6}>
          <Paper className={classes.paper} elevation={3}>
            <EduExpDetails eduexp={filteredExperience} title="Experience"/>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper} elevation={3}>
            <EduExpDetails eduexp={filteredEducation} title="Education" />
          </Paper>
        </Grid>
      </div>
    </div>;
  }
}

export default withStyles (styles) (Experience);
