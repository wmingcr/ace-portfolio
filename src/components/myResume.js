import React, { Component } from 'react';
import { Button } from "react-mdl";

class MyResume extends Component {
  render() {
    return (
      <div>
        <h1>
        <Button className = "showResumeButton" href = "https://drive.google.com/file/d/1rMhBLYiHMHiOi_ZetK1mbH8vrAR1mYSQ/view?usp=sharing">Show Resume</Button>
        </h1>
      </div>
    )
  }
}

export default MyResume;
