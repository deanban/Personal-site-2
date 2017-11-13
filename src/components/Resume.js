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
                    <h4>Feb 2013 <br/>
                      - <br/>
                      Present </h4>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>Creative Agency</h4>
                      <h4 className="subheading">UX Developer</h4>
                    </div>
                    <div className="timeline-body">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diamcommodo nibh ante facilisis.</p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <h4>Nov 2011 <br/>
                      - <br/>
                      Jan 2013 </h4>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>Creative Agency</h4>
                      <h4 className="subheading">Front-end Developer</h4>
                    </div>
                    <div className="timeline-body">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diamcommodo nibh ante facilisis.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-image">
                    <h4>Dec 2009 <br/>
                      - <br/>
                      May 2011 </h4>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>Creative Agency</h4>
                      <h4 className="subheading">UX Designer</h4>
                    </div>
                    <div className="timeline-body">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diamcommodo nibh ante facilisis.</p>
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
