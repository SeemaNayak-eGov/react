import React from 'react';
import profile from './profile.jpg';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Paper, withStyles, Grid} from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    height: theme.spacing(10),
  }
});

class Contact extends React.Component {
  render () {
    const {myInfo,classes}=this.props;

    return(<div>
      <div className={classes.root}>
          <Grid item xs={6}>
          <Paper  elevation={3}>
            <div className={classes.root}>
              <Grid item xs={3}>
                <Paper className={classes.paper} elevation={0}>
                   <img src={profile} alt=""/>
                </Paper>
              </Grid>
              <Grid item xs>
                <Paper className={classes.paper} elevation={0}>
                  <h4>{myInfo.name}</h4>
                  <h3>{myInfo.designation}</h3>
                </Paper>
              </Grid>
            </div>
          </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper} elevation={3}>
                <ListItem button>
                  <ListItemIcon>
                        <MailIcon />
                      </ListItemIcon>
                      <ListItemText primary={myInfo.gmail} />
                    </ListItem>
                    <ListItem button>
                      <ListItemIcon>
                      <LinkedInIcon />
                    </ListItemIcon>
                  <ListItemText primary={myInfo.linkedin} />
               </ListItem>
            </Paper>
          </Grid>
      </div>
    </div>)
  }
}

export default withStyles (styles) (Contact);
