import React from 'react'
import Education from './Education'

class Resume extends React.Component{
  render(){
    return(
      <div id="resume" className="text-center">
        <div className="container">
          <div className="section-title center">
            <h2>Experience</h2>
            <hr/>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ul className="timeline">
                <li>
                  <div className="timeline-image">
                    <h4>2013 <br/>
                      - <br/>
                      Present </h4>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>Domibus Real Estate Development</h4>
                      <h4 className="subheading">Owner/Partner and developer</h4>
                    </div>
                    <div className="timeline-body">
                      <p>We acquired or contracted housing/aparments/buildings, and developed them in various manners.</p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <h4>2012 <br/>
                      - <br/>
                      2014 </h4>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>Figmentum INC</h4>
                      <h4 className="subheading">Owner/Partner and Film development technician</h4>
                    </div>
                    <div className="timeline-body">
                      <p>Mostly hobbyist store for developing and reparing of classic 35mm, and 120mm photography equipments.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-image">
                    <h4>2012 <br/>
                      - <br/>
                      2013 </h4>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>CCNY</h4>
                      <h4 className="subheading">Physics and Math Tutor</h4>
                    </div>
                    <div className="timeline-body">
                      <p>Helped freshman to juniors with their math, physics, and engineering mechanics courses.</p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <h4>2010 <br/>
                      - <br/>
                      2012 </h4>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>BMCC</h4>
                      <h4 className="subheading">Math, Physics, and Thermodynamics Tutor</h4>
                    </div>
                    <div className="timeline-body">
                      <p>Helped freshman and sophomore Engineering Science students with Math, physics, and Thermodynamics courses.</p>
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
                      <h4>JP Morgan Chase</h4>
                      <h4 className="subheading">Teller</h4>
                    </div>
                    <div className="timeline-body">
                      <p>Helped customers with their daily financial transctions.</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Education/>
      </div>
    )
  }
}

export default Resume
