import React from "react";
import './index.scss'
class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <div className="banner">
          <div className="banner-content page-content-wrap">
            <h1>React</h1>
            <div className="text">编程时要保持这种心态：就好象将来要维护你这些代码的人是一位残暴的精神病患者</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home