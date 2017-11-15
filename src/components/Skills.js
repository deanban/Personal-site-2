import React from 'react'

class Skills extends React.Component{
  render(){
    return(
      <div id="skills" className="text-center">
        <div className="container">
          <div className="section-title center">
            <h2>Skills</h2>
            <hr/>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-6 skill"> <span className="chart" data-percent="80"> <span className="percent">80</span> </span>
              <h4>Ruby</h4>
            </div>
            <div className="col-md-4 col-sm-6 skill"> <span className="chart" data-percent="80"> <span className="percent">80</span> </span>
              <h4>Ruby on Rails</h4>
            </div>
            <div className="col-md-4 col-sm-6 skill"> <span className="chart" data-percent="85"> <span className="percent">85</span> </span>
              <h4>JavaScript</h4>
            </div>
            <div className="col-md-4 col-sm-6 skill"> <span className="chart" data-percent="85"> <span className="percent">85</span> </span>
              <h4>ReactJS</h4>
            </div>
            <div className="col-md-4 col-sm-6 skill"> <span className="chart" data-percent="70"> <span className="percent">70</span> </span>
              <h4>Redux</h4>
            </div>
            <div className="col-md-4 col-sm-6 skill"> <span className="chart" data-percent="65"> <span className="percent">65</span> </span>
              <h4>HTML5</h4>
            </div>
            <div className="col-md-4 col-sm-6 skill"> <span className="chart" data-percent="65"> <span className="percent">65</span> </span>
              <h4>CSS3</h4>
            </div>
            <div className="col-md-4 col-sm-6 skill"> <span className="chart" data-percent="75"> <span className="percent">75</span> </span>
              <h4>jQuery</h4>
            </div>
            <div className="col-md-4 col-sm-6 skill"> <span className="chart" data-percent="65"> <span className="percent">65</span> </span>
              <h4>PostgreSQL</h4>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Skills
