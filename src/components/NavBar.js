import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class NavBar extends Component {
//   static propTypes = {}

  render() {
    return (
      <div><nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Daily News - free</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">catogery</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                contact us
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Phone</a></li>
                <li><a className="dropdown-item" href="#">Email</a></li>
                <li><hr className="dropdown-divider"/> </li>
                <li><a className="dropdown-item" href="#">Request a callback</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">About</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav></div>
    )
  }
}

export default NavBar