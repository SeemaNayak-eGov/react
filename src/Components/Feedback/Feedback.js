import React from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import {Paper, withStyles, Select, InputLabel, FormControl} from '@material-ui/core';

const styles = theme => ({
  root: {
    padding: theme.spacing(2),
    textAlign: 'left',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
});


class Feedback extends React.Component {
  render() {
    const {submitFeedback, feedback={}, rating=[], handleChangeName, handleChangeRating, handleChangeDescription, classes} = this.props;
    return <div>
    <Paper className={classes.root} elevation={3} >
    <h2>Add Feedback</h2>
    <form>
       <TextField value={feedback.name}  onChange={(e)=>{
         console.log(e.target.value);
         handleChangeName(e.target.value)
       }} id="standard-basic" label="Name" />
      <br/>
      <br/>

      <label>
        <TextareaAutosize value={feedback.description} rowsMin={3} aria-label="minimum height" placeholder="Description" onChange={(e)=>{
          console.log(e.target.value);
          handleChangeDescription(e.target.value)
        }} id="standard-basic" label="Description" />
      </label>
      <br/>

      <FormControl className={classes.formControl}>

         <InputLabel id="demo-simple-select-disabled-label">Rating</InputLabel>
        <Select value={feedback.rating} onChange={(e)=>{
          console.log(e.target.value);
          handleChangeRating(e.target.value)
        }}  labelId="demo-simple-select-label"
          id="demo-simple-select">
          {
            rating.map((rate,rateIndex)=><option key={rateIndex} value={rate.code}>{rate.code}</option>)
          }
        </Select>
        </FormControl>
      <br/>
      <br/>

      <Button  onClick={(e)=>{
        e.preventDefault()
        submitFeedback(feedback)
      }} variant="contained" color="primary">
        Submit
      </Button>
    </form>
   </Paper>
    </div>;
  }
}

export default withStyles (styles) (Feedback);
