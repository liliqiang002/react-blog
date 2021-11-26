import React from "react";
import './index.scss'
import Logo from '../../assets/images/logo512.png'
import { NavLink } from "react-router-dom";
class Nav1 extends React.Component {
  render () {
    return (
      <nav>
        <ul>
          <li>
            <NavLink to="/home">首页</NavLink>
          </li>
          <li>
            <NavLink to="/doc">文档</NavLink>
          </li>
          <li>
            <NavLink to="/course">教程</NavLink>
          </li>
          <li>
            <NavLink to="/community">社区</NavLink>
          </li>
          <li>
            <NavLink to="/resource">资源</NavLink>
          </li>
        </ul>
      </nav>
    )
  }
}
class Header extends React.Component {
  render () {
    return (
      <div className="header-container">
        <div className="page-content-wrap">
          <div className="logo">
            <img src={Logo} alt="" />
            <div className="text">React</div>
          </div>
          <Nav1></Nav1>
        </div>   
      </div>
    )
  }
}

export default Header