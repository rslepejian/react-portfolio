import React from "react";
import "./style.css";
import {Link} from "react-router-dom";

function NavTabs() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/react-portfolio">Home</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to = {'/about'}>
            <a className="nav-link" href="/react-portfolio/about">About</a>
            </Link>
            <Link to = {'/projects'}>
            <a className="nav-link" href="/react-portfolio/projects">Projects</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavTabs;