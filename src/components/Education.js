import React from 'react'

class Education extends React.Component{
  render(){
    return(
      <div className="container">
        <div className="section-title center">
          <h2>Education</h2>
          <hr/>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <ul className="timeline">
              <li>
                <div className="timeline-image">
                  <h4>June 2017 <br/>
                    - <br/>
                    October 2017 </h4>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>Flatiron School</h4>
                    <h4 className="subheading">Full Stack Web Development Bootcamp</h4>
                  </div>
                  <div className="timeline-body">
                    <p>Four-month bootcamp where I learned Ruby, Ruby on Rails, JavaScript, ReactJS, Redux,
                    and various other programming paradigms.</p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <h4>2011 <br/>
                    - <br/>
                    2013 </h4>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>CCNY</h4>
                    <h4 className="subheading">Bachelor Degree in Science</h4>
                  </div>
                  <div className="timeline-body">
                    <p>Mechanical Engineering with a minor in Physics</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="timeline-image">
                  <h4>2008 <br/>
                    - <br/>
                    2010 </h4>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>BMCC</h4>
                    <h4 className="subheading">Associate Degree in Science</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">Engineering Science with a minor in Computer Science</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Education
