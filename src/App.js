import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import About from './components/About'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Achievements from './components/Achievements'
import Resume from './components/Resume'
import Contact from './components/Contact'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header id="header">
          <div className="intro">
            <div className="container">
              <div className="row">
                <div className="intro-text">
                  <h1>Hello, I'm <span className="name">Dean Banik</span></h1>
                  <p>Full Stack Web Developer and Software Engineer</p>
                  <a href="#about" className="btn btn-default btn-lg page-scroll">Learn More</a> </div>
              </div>
            </div>
          </div>
        </header>

        <Nav/>
        <About/>
        <Skills/>
        <Portfolio/>
        <Achievements/>
        <Resume/>
        <Contact/>

        <div id="footer">
          <div className="container text-center">
            <div className="fnav">
              <p>Copyright &copy; 2017 Prasenjit Banik.</p>
              <p>Made with React, HTML5, CSS3</p>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
