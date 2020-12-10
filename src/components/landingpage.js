import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component{
  render() {
    return (
      <div style={{width: '100%', margin: 'auto'}}>
          <Grid className="landing-grid">
              <Cell col={12}>
              <img
                src="https://media-exp1.licdn.com/dms/image/C5635AQH7H-x_vQYFxQ/profile-framedphoto-shrink_200_200/0/1605819609709?e=1607630400&v=beta&t=6DEoJY2aSG6e8rYUJcBYIfNo8o4VthVx-qDLNJRJ3fk"
                alt="avatar"
                className="avatar-img"
              />

              <div className= "banner-text">
                <h1>Full Stack Web Developer</h1>

                <hr/>

                <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJS | Express | MongoDB</p>

                <div className="social-links">

                    {/* LinkedIn */}
                    <a href="https://www.linkedin.com/in/ming-ace-wang-428653189/" rel="noopener noreferrer" target="_blank">
                      <i className="fa fa-linkedin-square" aria-hidden="true" />
                    </a>

                    {/* Github */}
                    <a href="https://github.com/wmingcr" rel="noopener noreferrer" target="_blank">
                      <i className="fa fa-github-square" aria-hidden="true" />
                    </a>

                    {/* Freecodecamp */}
                    <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                      <i className="fa fa-free-code-camp" aria-hidden="true" />
                    </a>

                    {/* Youtube */}
                    <a href="https://www.linkedin.com/in/ming-ace-wang-428653189/" rel="noopener noreferrer" target="_blank">
                      <i className="fa fa-youtube-square" aria-hidden="true" />
                    </a>

                </div>

              </div>
              </Cell>
          </Grid>
      </div>
    )
  }
}

export default Landing;
