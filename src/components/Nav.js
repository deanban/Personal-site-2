import React from 'react'

class Nav extends React.Component{
  render(){
    return(
      <div id="nav">
        <nav class="navbar navbar-custom">
          <div class="container">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse"> <i class="fa fa-bars"></i> </button>
              <a class="navbar-brand page-scroll" href="#page-top">Dean Banik</a> </div>

            <div class="collapse navbar-collapse navbar-right navbar-main-collapse">
              <ul class="nav navbar-nav">
                <li class="hidden"> <a href="#page-top"></a> </li>
                <li> <a class="page-scroll" href="#about">About</a> </li>
                <li> <a class="page-scroll" href="#skills">Skills</a> </li>
                <li> <a class="page-scroll" href="#portfolio">Portfolio</a> </li>
                <li> <a class="page-scroll" href="#resume">Resume</a> </li>
                <li> <a class="page-scroll" href="#contact">Contact</a> </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Nav