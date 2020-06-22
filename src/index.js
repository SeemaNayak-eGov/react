import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {HashRouter as Router, Switch, Route} from "react-router-dom";
import Project from "./Components/Pages/Project.js";
import Mentees from "./Components/Pages/Mentees.js";
import Publications from "./Components/Pages/Publications.js";
import Certificate from "./Components/Pages/Certificate.js";


ReactDOM.render(
  <React.StrictMode>
  <Router>
  <Switch>
        <Route path="/projects">
          <Project/>
        </Route>
        <Route path="/mentees">
          <Mentees/>
        </Route>
        <Route path="/publications">
          <Publications/>
        </Route>
        <Route path="/certificate">
          <Certificate/>
        </Route>
        <Route path="/">
          <App/>
        </Route>
      </Switch>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
