import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAligh: 'center'}}>
              <img
                src="https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg"
                alt="avatar"
                style={{height: '200px'}}
              />
            </div>
            <h2 style={{paddingTop: '2em'}}>Paul Hanna</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              It has survived not only five centuries, but also the leap into electronic typesetting, 
              remaining essentially unchanged.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>San Jose, CA, 95132</p>
            <h5>Email</h5>
            <p>wang.ming1@northeastern.edu</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>
              Education
            </h2>

            <Education 
              startYear={`Jan 2020`}
              endYear={`Dec 2021`}
              schoolName="Northeastern University"
              schoolDescription="Founded in 1898, Northeastern is a global, experiential, research university 
              built on a tradition of engagement with the world, creating a distinctive approach to 
              education and research. The university offers a comprehensive range of undergraduate 
              and graduate programs leading to degrees through the doctorate in nine colleges and schools, 
              and select advanced degrees at graduate campuses in Charlotte, North Carolina, Seattle, Silicon Valley, and Toronto."
            />

            <Education 
              startYear={`Jan 2020`}
              endYear={`Dec 2021`}
              schoolName="The Ohio State University"
              schoolDescription="Founded in 1898, Northeastern is a global, experiential, research university 
              built on a tradition of engagement with the world, creating a distinctive approach to 
              education and research. The university offers a comprehensive range of undergraduate 
              and graduate programs leading to degrees through the doctorate in nine colleges and schools, 
              and select advanced degrees at graduate campuses in Charlotte, North Carolina, Seattle, Silicon Valley, and Toronto."
            />

            <hr style={{borderTop: '3px solid #e22947'}} />

            <h2>Experience</h2>
            <Experience 
              startYear={2008}
              endYear={2009}
              jobName="First Job"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" 
            />
            <Experience 
              startYear={2008}
              endYear={2009}
              jobName="Second Job"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" 
            />

            <hr style={{borderTop: '3px solid #e22947'}} />

            <h2>Skills</h2>
            <Skills 
              skill="Java"
              progress={100}
            />
            <Skills 
              skill="JavaScript"
              progress={90}
            />
            <Skills 
              skill="HTML"
              progress={90}
            />
            <Skills 
              skill="CSS"
              progress={90}
            />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
