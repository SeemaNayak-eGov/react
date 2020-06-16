import React from "react";

import {Paper, withStyles} from '@material-ui/core';
import List from '@material-ui/core/List';

const styles = theme => ({
  root: {
    padding: theme.spacing(2),
    textAlign: 'left',
    direction: 'column',

  },
  box: {
    padding: theme.spacing(2),
    textAlign: 'center',
    boxShadow: 3,
    margin: theme.spacing(2),
  }
});
class FeedbackInfo extends React.Component {

  render() {
    const {feedbackData=[], classes}=this.props;
    return <div>
    <Paper className={classes.root} elevation={3} >

    <h3>Feedback</h3> {
     feedbackData.map((key,index)=>{
         return (
           	   <div key={index}>
                  <List>
                    Name: {key.name} <br/>
                    Description: {key.description}<br/>
                    Rating: {key.rating}
                  </List>
               </div>
   )
 })
} </Paper>
</div>
}
}
export default withStyles (styles) (FeedbackInfo);
