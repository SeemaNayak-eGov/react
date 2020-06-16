import React from "react";
import { withStyles} from '@material-ui/core';

const styles = theme => ({
  root: {
    padding: theme.spacing(2),
    textAlign: 'left',
    height: theme.spacing(5),
  },
});

class EduExpDetails extends React.Component {
  render() {
    const {eduexp,title,classes}=this.props;

    return <div className={classes.root}>
    <h3>{title}</h3>
      {
        eduexp.map((item,index)=>{
          return (
               <div key={index}>
                   <h3>{item.name}</h3>
                   {item.description}
               </div>
          )
        })
      }

    </div>;
  }
}

export default withStyles (styles) (EduExpDetails);;
