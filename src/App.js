import React from 'react';
import Contact from "./Components/Contact/Contact";
import Projects from "./Components/Projects/Projects";
import Objective from "./Components/Objective/Objective";
import Experience from "./Components/Experience/Experience";
import Skills from "./Components/Skills/Skills";
import Feedback from "./Components/Feedback/Feedback.js";
import FeedbackInfo from "./Components/Feedback/components/FeedbackInfo/FeedbackInfo.js";

import Grid from '@material-ui/core/Grid';
import './App.css';

const feedbackInfo = {
  name: "",
  description: "",
  rating: ""
};

class App extends React.Component {
  state = {
      myInfo: {
        name: "Seema Nayak",
        designation: "SSE",
        gmail: "seemanayak47@gmail.com",
        linkedin: "linkedin.com/in/seema-nayak/",
      },

      projectInfo: [
        {"name":"Projects", "description": "10+"},
        {"name":"Mentees", "description":"1"},
        {"name":"Publications", "description": "1"},
        {"name":"Certificates","description": "3+"},
     ],

     objective: "I am having 5+ years of professional experience as a Java/EE application developer. Currently working as a senior software engineer at egovernments foundation. Familiar with Eclipse ,Intellij Idea,Git Hub,Docker,Kafka,Swagger,Json. Experience in Spring Framework, SQL, Hibernate and related web technologies.",

    skillset: [
      {
        header: "Technical Skills",
        description: "Spring Framework",
      },
      {
        header: "Technical Skills",
        description: "Hibernate",
      },
      {
        header: "Technical Skills",
        description: "SQL",
      },
      {
        header: "Tools",
        description: "Eclipse",
      },
      {
        header: "Tools",
        description: "PgAdmin",
      },
      {
        header: "Tools",
        description: "Jasper Report",
      },
      {
        header: "Hobbies",
        description: "Music",
      },
      {
        header: "Hobbies",
        description: "Painting",
      },
    ],
    eduexp:[
     {
       title:"Education",
       name: "VTU",
       description: "B.E in CS"
     },
     {
       title:"Experience",
       name: "Egovernments Foundation",
       description: "Senior Software Engineer",
     },
   ],
   feedback:feedbackInfo,
   rating: [
                {code: "1"},
                {code: "2"},
                {code: "3"},
                {code: "4"},
                {code: "5"},
           ],
    feedbackData:[{
         name: "Abc",
         description: "Good",
         rating: "1",
      },
    ],

  };

  submitFeedback = (feedback = {}) => {
        if (feedback.name && feedback.description && feedback.rating ) {
          let { feedbackData = [] } = this.state;
          feedbackData.push(feedback);
          this.setState({
            feedbackData,
            feedback: feedbackInfo,
          });
        } else {
          alert("Please enter the required information.");
        }
  };

  handleChangeName=(value)=> {
        const {feedback} = this.state;
        this.setState({
          feedback: {
            ...feedback,
            name: value,
          },
        });
  };

  handleChangeRating=(value)=> {
        const {feedback} = this.state;
        this.setState({
          feedback: {
            ...feedback,
            rating: value,
          },
        });
  };

  handleChangeDescription=(value)=> {
        const {feedback} = this.state;
        this.setState({
          feedback: {
            ...feedback,
            description: value,
          },
        });
  };


  render() {
    const { myInfo = {}, projectInfo=[], objective={}, skillset = [], eduexp = [], feedback={}, rating=[], feedbackData=[]} = this.state;
    const {submitFeedback, handleChangeName, handleChangeRating, handleChangeDescription} = this;

    return (
      <div className="app-layout">
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Contact myInfo={myInfo}/>
            </Grid>
            <Grid item xs={12}>
                <Projects projectInfo={projectInfo}/>
            </Grid>
            <Grid item xs={12}>
                <Objective objective={objective}/>
            </Grid>
            <Grid item xs={12}>
                <Experience eduexp={eduexp}/>
            </Grid>
            <Grid item xs={12}>
                <Skills skillset={skillset} />
            </Grid>
            <Grid item xs={12}>
                <FeedbackInfo feedbackData={feedbackData} />
            </Grid>
            <Grid item xs={12}>
                 <Feedback feedback={feedback} submitFeedback={submitFeedback} rating={rating}
                           handleChangeName={handleChangeName} handleChangeRating={handleChangeRating} handleChangeDescription={handleChangeDescription} />
            </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
