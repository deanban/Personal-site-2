import React from 'react'

class Portfolio extends React.Component{
  render(){
    return(
      <div id="portfolio">
        <div className="container">
          <div className="section-title text-center center">
            <h2>Portfolio</h2>
            <hr/>
          </div>
          <div className="categories">
            <ul className="cat">
              <li>
                <ol className="type">
                  <li><a href="#" data-filter="*" className="active">All</a></li>
                  <li><a href="#" data-filter=".web">Full Stack Web Development</a></li>
                  <li><a href="#" data-filter=".app">App Development</a></li>
                  {/* <li><a href="#" data-filter=".branding">Branding</a></li> */}
                </ol>
              </li>
            </ul>
            <div className="clearfix"></div>
          </div>
          <div className="row">
            <div className="portfolio-items">
              <div className="col-sm-6 col-md-3 col-lg-3 web">
                <div className="portfolio-item">
                  <div className="hover-bg"> <a href="img/portfolio/01-large.jpg" title="Project description" rel="prettyPhoto">
                    <div className="hover-text">
                      <h4>SpaceBook</h4>
                      <small>PostgreSQL, Ruby on Rails API Backend with React Frontend</small> </div>
                    <img src="img/portfolio/01-small.jpg" className="img-responsive" alt="Project Title"/> </a> </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3 app">
                <div className="portfolio-item">
                  <div className="hover-bg"> <a href="img/portfolio/02-large.jpg" title="Project description" rel="prettyPhoto">
                    <div className="hover-text">
                      <h4>TMDB</h4>
                      <small>Terminal IMDB written in Ruby, and sqlite3</small> </div>
                    <img src="img/portfolio/02-small.jpg" className="img-responsive" alt="Project Title"/> </a> </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3 web">
                <div className="portfolio-item">
                  <div className="hover-bg"> <a href="img/portfolio/03-large.jpg" title="Project description" rel="prettyPhoto">
                    <div className="hover-text">
                      <h4>Quora clone</h4>
                      <small>PostgreSQL, Ruby on Rails API Backend with React and Redux</small> </div>
                    <img src="img/portfolio/03-small.jpg" className="img-responsive" alt="Project Title"/> </a> </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3 web">
                <div className="portfolio-item">
                  <div className="hover-bg"> <a href="img/portfolio/04-large.jpg" title="PostgreSQL, Ruby on Rails Backend with vanilla JavaScript" rel="prettyPhoto">
                    <div className="hover-text">
                      <h4>Ticket Tracker</h4>
                      <small>PostgreSQL, Ruby on Rails API Backend with vanilla JavaScript</small> </div>
                    <img src="img/portfolio/04-small.jpg" className="img-responsive" alt="Project Title"/> </a> </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3 app">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    <a href="img/test.mp4">
                      <div className="hover-text">
                        <h4>Flatiron Student reviewer</h4>
                        <small>Ruby on Rails MVC</small> </div>
                        {/* <img src="img/portfolio/05-small.jpg" className="img-responsive" alt="Project Title"/>  */}
                        <video controls autoplay>
                            <source src="img/test.mp4" type="video/mp4"/>


                          </video>
                    </a>
                  </div>
                </div>
              </div>
              {/* <div className="col-sm-6 col-md-3 col-lg-3 branding">
                <div className="portfolio-item">
                  <div className="hover-bg"> <a href="img/portfolio/06-large.jpg" title="Project description" rel="prettyPhoto">
                    <div className="hover-text">
                      <h4>Project Title</h4>
                      <small>Branding</small> </div>
                    <img src="img/portfolio/06-small.jpg" className="img-responsive" alt="Project Title"/> </a> </div>
                </div>
              </div> */}
              {/* <div className="col-sm-6 col-md-3 col-lg-3 branding app">
                <div className="portfolio-item">
                  <div className="hover-bg"> <a href="img/portfolio/07-large.jpg" title="Project description" rel="prettyPhoto">
                    <div className="hover-text">
                      <h4>Project Title</h4>
                      <small>App Development, Branding</small> </div>
                    <img src="img/portfolio/07-small.jpg" className="img-responsive" alt="Project Title"/> </a> </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3 web">
                <div className="portfolio-item">
                  <div className="hover-bg"> <a href="img/portfolio/08-large.jpg" title="Project description" rel="prettyPhoto">
                    <div className="hover-text">
                      <h4>Project Title</h4>
                      <small>Web Design</small> </div>
                    <img src="img/portfolio/08-small.jpg" className="img-responsive" alt="Project Title"/> </a> </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio
