import React from 'react'

class About extends React.Component{
  render(){
    return(
      <div id="about">
        <div className="container">
          <div className="section-title text-center center">
            <h2>About Me</h2>
            <hr/>
          </div>
          <div className="row">
            <div className="col-md-12 text-center"><img src="img/self.jpg" className="img-responsive"/></div>
            <div className="col-md-8 col-md-offset-2">
              <div className="about-text">
                <p>I am a recent graduate from Flatiron Schools' Full Stack Web Development Immersive Bootcamp. </p>
                <p>Looking for exciting and challenging opportunities.</p>
                <p className="text-center"><a className="btn btn-primary" href="#"><i className="fa fa-download"></i> Download Resume</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default About
