import React from "react";
import {Paper, withStyles, Grid, Button} from '@material-ui/core';
import ProjectInfo from "./components/ProjectInfo.js";
import {Link} from "react-router-dom";

const styles = theme => ({
  paper: {
    display: 'flex',
    padding: theme.spacing(2),
    textAlign: 'center',
    height: theme.spacing(8),
  },
});

class Projects extends React.Component {
  render() {
    const {projectInfo}=this.props;
    const {classes} = this.props;
    const filteredProjects = projectInfo.filter((pi)=>{return pi.name==='Projects'});
    const filteredMentees = projectInfo.filter((pi)=>{return pi.name==='Mentees'});
    const filteredPublications = projectInfo.filter((pi)=>{return pi.name==='Publications'});
    const filteredCertificates = projectInfo.filter((pi)=>{return pi.name==='Certificates'});

    return <div>
    <Paper className={classes.paper} elevation={3} >
            <Grid item xs={3}>
              <Paper elevation={3}>
              <Button target="_blank"  component={Link} to="/projects">
                     <div><ProjectInfo projectInfo={filteredProjects}/></div>
                     </Button>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper elevation={3}>
              <Button target="_blank"  component={Link} to="/mentees">
                     <div><ProjectInfo projectInfo={filteredMentees}/></div>
                     </Button>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper elevation={3}>
              <Button target="_blank"  component={Link} to="/publications">
                     <div><ProjectInfo projectInfo={filteredPublications}/></div>
                     </Button>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper elevation={3}>
                <Button target="_blank"  component={Link} to="/certificate">
                <div><ProjectInfo projectInfo={filteredCertificates}/></div>
                </Button>
            </Paper>
          </Grid>

      </Paper>
    </div>;
  }
}

export default withStyles (styles) (Projects);
