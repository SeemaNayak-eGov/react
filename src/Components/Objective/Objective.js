import React from 'react';
import {Paper, withStyles} from '@material-ui/core';

const styles = theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: theme.spacing(10),
  },
});

class Objective extends React.Component {
  render () {
    const {objective}=this.props;
    const {classes} = this.props;

    return(<div>
        <Paper className={classes.paper} elevation={3} >
          {objective}
        </Paper>
       </div>)
  }
}

export default withStyles (styles) (Objective);
