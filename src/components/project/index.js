import React from "react";
import "./style.css";

function project(props) {
  console.log(props);
  return (
    <div className="col-md-6">
      <h4>{props.name}</h4>
      <p>{props.text}</p>
      <p>Live site: <a href={props.link}>{props.link}</a></p>
      <p>Repository: <a href={props.github}>{props.github}</a></p>
      <img src = {props.image} />
    </div>
  );
}

export default project;