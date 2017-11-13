import React from 'react'

class Achievements extends React.Component{
  render(){
    return(
      <div id="achievements" className="text-center">
        <div className="container">
          <div className="section-title center">
            <h2>Some Stats</h2>
            <hr/>
          </div>


            <div className="col-md-3 col-sm-3 wow fadeInDown" data-wow-delay="600ms">
              <div className="achievement-box"> <span className="count">1</span>
                <h4>Awards Won</h4>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 wow fadeInDown" data-wow-delay="700ms">
              <div className="achievement-box"> <span className="count">2</span>
                <h4>Years of Experience</h4>
              </div>
            </div>
          </div>
        </div>

    )
  }
}

export default Achievements
