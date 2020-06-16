import React from 'react';
import SkillSet from "./components/SkillSet/SkillSet.js";
import {Paper, withStyles, Grid} from '@material-ui/core';

const styles = theme => ({
  root: {
    display: 'flex',
    padding: theme.spacing(2),

  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    height: theme.spacing(20),
  }
});

class Skills extends React.Component {
  render() {
    const {skillset=[],classes}=this.props;
    const filteredTechSkill=skillset.filter((skill)=>{return skill.header==="Technical Skills"});
    const filteredTools=skillset.filter((skill)=>{return skill.header==="Tools"});
    const filteredHobbies=skillset.filter((skill)=>{return skill.header==="Hobbies"});
    return <div>
      <Paper className={classes.root} elevation={3}>
        <Grid item xs={4}>
          <Paper className={classes.paper} elevation={3}>
            <SkillSet skillset={filteredTechSkill} headerName="Techinal Skills"/>
          </Paper>
        </Grid>
        <Grid item xs={4}>
        <Paper className={classes.paper} elevation={3}>

        <SkillSet skillset={filteredTools} headerName="Tools" />
        </Paper>
      </Grid>
      <Grid item xs={4}>
      <Paper className={classes.paper} elevation={3}>
        <SkillSet skillset={filteredHobbies} headerName="Hobbies"/>
        </Paper>
      </Grid>
      </Paper>
    </div>;
  }
}

export default withStyles (styles) (Skills);
