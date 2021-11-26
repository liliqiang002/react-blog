import React from "react";
import Header from "../header";
import { Outlet } from 'react-router-dom'
class Layout extends React.Component {
  constructor (props) {
    super(props)
    console.log(this)
  }
  handleClick() {
  }
  render () {
    return (
      <div className="layout">
          <Header />
          <Outlet />
      </div>
    )
  }
}

export default Layout


