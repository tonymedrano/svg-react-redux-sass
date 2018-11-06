import React, { Component } from 'react'
import './Header.scss'

class Header extends Component {
  render() {
    return (
        <header className="header">
        <div className="container">
          <h1 className="site-title">Super Cool Website!</h1>
          <span className="site-tagline">Because flexbox is super cool!</span>
        </div>
      </header>
    )
  }
}

export default Header