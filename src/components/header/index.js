import React from "react";
import "./style.css";

function header() {
  return (
    <div className="container">
      <div className="container-fluid" id="header">
        <div className="row">
          <div className="col align-self-center" id="name">
            <h1>Raffi Lepejian</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6" id="email">
            <h6>rslepejian@gmail.com</h6>
          </div>
          <div className="col-md-6" id="phone">
            <h6>(650)-862-7549</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default header;