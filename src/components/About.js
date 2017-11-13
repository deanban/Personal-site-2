import React from 'react'

class About extends React.Component{
  render(){
    return(
      <div id="about">
        <div class="container">
          <div class="section-title text-center center">
            <h2>About Me</h2>
            <hr/>
          </div>
          <div class="row">
            <div class="col-md-12 text-center"><img src="img/self.jpg" class="img-responsive"/></div>
            <div class="col-md-8 col-md-offset-2">
              <div class="about-text">
                <p>I am a recent graduate from Flatiron Schools' Full Stack Web Development Immersive Bootcamp. </p>
                <p>Looking for exciting and challenging opportunities.</p>
                <p class="text-center"><a class="btn btn-primary" href="#"><i class="fa fa-download"></i> Download Resume</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default About
