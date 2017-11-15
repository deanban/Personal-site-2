import React from 'react'

class Contact extends React.Component{
  render(){
    return(
      <div id="contact" className="text-center">
        <div className="container">
          <div className="section-title center">
            <h2>Contact</h2>
            <hr/>
          </div>
          <div className="col-md-8 col-md-offset-2">
            <div className="col-md-4"> <i className="fa fa-map-marker fa-2x"></i>
              <p>New York, NY<br/>
                </p>
            </div>
            <div className="col-md-4"> <i className="fa fa-envelope-o fa-2x"></i>
              <p>dean.b87@icloud.com</p>
            </div>
            <div className="col-md-4"> <i className="fa fa-phone fa-2x"></i>
              <p> (646)-309-9010</p>
            </div>
            <div className="clearfix"></div>
          </div>
          <div className="col-md-8 col-md-offset-2">
            <h3>Leave me a message</h3>
            <form name="sentMessage" id="contactForm" noValidate>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input type="text" id="name" className="form-control" placeholder="Name" required="required"/>
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input type="email" id="email" className="form-control" placeholder="Email" required="required"/>
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <textarea name="message" id="message" className="form-control" rows="4" placeholder="Message" required></textarea>
                <p className="help-block text-danger"></p>
              </div>
              <div id="success"></div>
              <button type="submit" className="btn btn-default">Send Message</button>
            </form>
            <div className="social">
              <ul>
                {/* <li><a href="#"><i className="fa fa-facebook"></i></a></li> */}
                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                <li><a href="mailto:dean.b87@icloud.com?Subject=Hello" target="_top">
                  <i className="fa fa-envelope"></i></a></li>
                <li><a href="https://github.com/deanban" target="_blank"><i className="fa fa-github"></i></a></li>
                {/* <li><a href="#"><i className="fa fa-instagram"></i></a></li> */}
                <li><a href="https://linkedin.com/in/p-d-banik" target="_blank"><i className="fa fa-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
