import React from 'react'

class Nav extends React.Component{
  render(){
    return(
      <div id="nav">
        <nav className="navbar navbar-custom">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse"> <i className="fa fa-bars"></i> </button>
              <a className="navbar-brand page-scroll" href="#page-top">Dean Banik</a> </div>

            <div className="collapse navbar-collapse navbar-right navbar-main-collapse">
              <ul className="nav navbar-nav">
                <li className="hidden"> <a href="#page-top"></a> </li>
                <li> <a className="page-scroll" href="#about">About</a> </li>
                <li> <a className="page-scroll" href="#skills">Skills</a> </li>
                <li> <a className="page-scroll" href="#portfolio">Portfolio</a> </li>
                <li> <a className="page-scroll" href="#resume">Resume</a> </li>
                <li> <a className="page-scroll" href="#contact">Contact</a> </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Nav
