import React from "react";
import "./style.css";

function Home() {
  return (
    <div>
      <div className="col-md-12">
        <div className="row" id="links">
          <h5>Links</h5>
          <ul id="link-list">
            <li><a href="https://github.com/rslepejian" id="github" target="_blank">Github</a></li>
            <li><a href="https://www.linkedin.com/in/raffi-lepejian-071876153/" id="linkedin" target="_blank">Linkedin</a>
            </li>
            <li><a href="images/Raffi_Lepejian_Resume.pdf" id="resume" target="_blank" download>Resume (Download)</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;