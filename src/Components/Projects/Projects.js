import React from "react";
import {Paper, withStyles, Grid} from '@material-ui/core';

const styles = theme => ({
  paper: {
    display: 'flex',
    padding: theme.spacing(2),
    textAlign: 'center',
    height: theme.spacing(5),
  },
});

class Projects extends React.Component {
  render() {
    const {projectInfo}=this.props;
    const {classes} = this.props;

    return <div>
    <Paper className={classes.paper} elevation={3} >
      {
        projectInfo.map((key,index)=>{
          return (
            <Grid item xs={3}>
              <Paper elevation={0}>
                     <div>{key.name}</div>
                     <div>{key.description}</div>
              </Paper>
            </Grid>
          )
        })
      }
      </Paper>
    </div>;
  }
}

export default withStyles (styles) (Projects);
