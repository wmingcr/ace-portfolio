import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage'; // *.js 的文件在 import 的时候不需要点名后缀，其它文件需要
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
  </Switch>
)

export default Main;
