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
              <Button href="https://github.com/heyaoliu666/java-final-maven-javafx" colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>

            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* project #2 */}
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

          {/* project #3 */}
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
        <div className="projects-grid">
          {/* project #1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '176px', background: 'url(data:image/png;base64,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) center / cover'}}>
              Image Converting Application
            </CardTitle>

            <CardText>
              Development a travel album Application to help elderly record travel and life footprints
            </CardText>

            <CardActions border>
              <Button colored href = "https://github.com/heyaoliu666/java-final-maven-javafx">GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>

            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if (this.state.activeTab === 2) { // 在某个 tab 展示内容
      return (
        <div><h1>This is BackEnd Project</h1></div>
      )
    }
  }

  render() {
    return (
      <div className="projects-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
            <Tab>Web Development</Tab>
            <Tab>Java</Tab>
            <Tab>BackEnd</Tab>
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
