import React from 'react'

class Skills extends React.Component{
  render(){
    return(
      <div id="skills" class="text-center">
        <div class="container">
          <div class="section-title center">
            <h2>Skills</h2>
            <hr/>
          </div>
          <div class="row">
            <div class="col-md-4 col-sm-6 skill"> <span class="chart" data-percent="80"> <span class="percent">80</span> </span>
              <h4>Ruby</h4>
            </div>
            <div class="col-md-4 col-sm-6 skill"> <span class="chart" data-percent="80"> <span class="percent">80</span> </span>
              <h4>Ruby on Rails</h4>
            </div>
            <div class="col-md-4 col-sm-6 skill"> <span class="chart" data-percent="85"> <span class="percent">85</span> </span>
              <h4>JavaScript</h4>
            </div>
            <div class="col-md-4 col-sm-6 skill"> <span class="chart" data-percent="85"> <span class="percent">85</span> </span>
              <h4>ReactJS</h4>
            </div>
            <div class="col-md-4 col-sm-6 skill"> <span class="chart" data-percent="70"> <span class="percent">70</span> </span>
              <h4>Redux</h4>
            </div>
            <div class="col-md-4 col-sm-6 skill"> <span class="chart" data-percent="65"> <span class="percent">65</span> </span>
              <h4>HTML5</h4>
            </div>
            <div class="col-md-4 col-sm-6 skill"> <span class="chart" data-percent="65"> <span class="percent">65</span> </span>
              <h4>CSS3</h4>
            </div>
            <div class="col-md-4 col-sm-6 skill"> <span class="chart" data-percent="75"> <span class="percent">75</span> </span>
              <h4>jQuery</h4>
            </div>
            <div class="col-md-4 col-sm-6 skill"> <span class="chart" data-percent="65"> <span class="percent">65</span> </span>
              <h4>PostgreSQL</h4>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Skills
