import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class AboutMe extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAligh: 'center'}}>
              <img
                src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-1/c0.10.200.200a/p200x200/131888402_217558283157132_4933582685742342440_o.jpg?_nc_cat=109&ccb=2&_nc_sid=7206a8&_nc_ohc=9gN6PGYIAXIAX9pdwR-&_nc_ht=scontent-sjc3-1.xx&tp=27&oh=ca25d0bd252a5b23fb88cf28fd9413e5&oe=5FFD37B7"
                alt="avatar"
                style={{height: '200px'}}
              />
            </div>
            <h2 style={{paddingTop: '2em'}}>Heyao(Arya) Liu</h2>
            <h4 style={{color: 'grey'}}>Software Develpoer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>I am currently pursuing master degree of Information System at Northeastern University, and seeking for software engineer developer intern in 2021.
              As a quick learner and good programmer, I am proficient in Java, full stack web development. 
              My good teamwork spirit and perseverance are great assets to cultivate capacity of software skills including React, JavaScript, MySQL, Redis, Spring and so on.
            </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>San Jose, CA, 95132</p>
            <h5>Email</h5>
            <p>liu.heyao@northeastern.edu</p>
            <h5>Web</h5>
            <p>http://heyaoliu666.github.io/HeyaoLiu</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>
              Education
            </h2>

            <Education 
              startYear={`Sept 2015`}
              endYear={`June 2019`}
              schoolName="Harbin Institute of Technology"
              schoolDescription="Harbin Institute of Technology is a research university and a member of China's elite C9 League.
               HIT is a Chinese Ministry of Education Class A Double First Class University. It has three campuses, spanning the country from north to south: the Harbin campus in Heilongjiang Province, 
              the Weihai campus in Shandong Province and the Shenzhen campus in Guangdong Province.
              HIT is consistently ranked as one of the top universities in the country with a focus on science and engineering. HIT was ranked 6th in the Best Global Universities for Engineering by U.S. News in 2017–2020.
               HIT is one of the only handful of universities in the world that have designed, built, and launched their own satellites and it excels at missile technology."
            />

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

            <hr style={{borderTop: '3px solid #e22947'}} />

            <h2>Experience</h2>
            <Experience 
              startYear={`Oct 2018`}
              endYear={`June 2019`}
              jobName="Teaching Assistant"
              jobDescription={`Developed a model of the light transport in tumor tissue using Monte Carlo method in C; Built the prediction model of optical field distribution using decision tree algorithm in Python`}
            />
            <Experience 
              startYear={`July 2018`}
              endYear={`Sept 2018`}
              jobName="Teaching Assistant"
              jobDescription="Developed a LabVIEW program to process and analyse eyeball healthy information; Improved programming efficiency to 400% by processing 3D eye model program" 
            />

            <hr style={{borderTop: '3px solid #e22947'}} />

            <h2>Skills</h2>
            <Skills 
              skill="Java"
              progress={100}
            />
            <Skills 
              skill="Web Development"
              progress={90}
            />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default AboutMe;
