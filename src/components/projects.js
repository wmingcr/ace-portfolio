import React, { Component } from 'react';
import { Tabs, Tab, Cell, Grid, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import Project1 from './project1';

class Projects extends Component {

  constructor(props) {
    super(props);
    this.state = { activeTab: 0 }; // 首次打开的活跃窗口
  }

  toggleCategories(){
    if(this.state.activeTab === 0){ // 在某个 tab 展示内容
      return (
        <div className="projects-grid">
          {/* project #1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png) center / cover'}}>
              React Project #1
            </CardTitle>

            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>

            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>

            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* project #1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png) center / cover'}}>
                  React Project #2
              </CardTitle>

              <CardText>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
              </CardText>

              <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>Live Demo</Button>
              </CardActions>

              <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
              </CardMenu>
          </Card>

          {/* project #1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png) center / cover'}}>
              React Project #3
            </CardTitle>

            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>

            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if (this.state.activeTab === 1) { // 在某个 tab 展示内容
      return (
        <div><h1>This is Angular</h1></div>
      )
    } else if (this.state.activeTab === 2) { // 在某个 tab 展示内容
      return (
        <div><h1>This is VueJS</h1></div>
      )
    } else if (this.state.activeTab === 3) { // 在某个 tab 展示内容
      return (
        <div><h1>This is MongoDB</h1></div>
      )
    } 
  }

  render() {
    return (
      <div className="projects-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
            <Tab>React</Tab>
            <Tab>Angular</Tab>
            <Tab>VueJS</Tab>
            <Tab>MongoDB</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">
              {this.toggleCategories()}
            </div>
          </Cell>
        </Grid>

      </div>
    )
  }
}

export default Projects;
