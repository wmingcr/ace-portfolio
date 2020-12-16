import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage'; // *.js 的文件在 import 的时候不需要点名后缀，其它文件需要
import MyResume from './myResume';
import Contact from './contact';
import Projects from './projects';
import AboutMe from './aboutme';

const Main = () => (
  <Switch>
    <Route exact path="/ace-portfolio" component={LandingPage} />
    <Route path="/myresume" component={MyResume} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
    <Route path="/aboutme" component={AboutMe} />
  </Switch>
)

export default Main;
