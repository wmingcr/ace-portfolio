import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component{
  render() {
    return (
      <div style={{width: '100%', margin: 'auto'}}>
          <Grid className="landing-grid">
              <Cell col={12}>
              <img
                src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-1/c0.17.160.160a/p160x160/131744810_217557026490591_8329519444058341009_n.jpg?_nc_cat=104&ccb=2&_nc_sid=7206a8&_nc_ohc=3FiajJF22SwAX8yjgew&_nc_ht=scontent-sjc3-1.xx&tp=27&oh=2ca2d699a47db21e093244810b3d8311&oe=5FFD057E"
                alt="avatar"
                className="avatar-img"
              />

              <div className= "banner-text">
                <h1>Full Stack Develpoer</h1>

                <hr/>

                <p>Java | JavaScript | React | Spring | Redis | MySQL </p>

                <div className="social-links">

                    {/* LinkedIn */}
                    <a href="https://www.linkedin.com/in/heyao-liu-304360191/" rel="noopener noreferrer" target="_blank">
                      <i className="fa fa-linkedin-square" aria-hidden="true" />
                    </a>

                    {/* Github */}
                    <a href="https://github.com/heyaoliu666" rel="noopener noreferrer" target="_blank">
                      <i className="fa fa-github-square" aria-hidden="true" />
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
