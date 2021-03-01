import React from "react";
import Project from "../components/project";
import projectData from "../projects.json";

console.log(projectData)

function Projects() {
  return (
    <div className = "row">
      {projectData.map((projectDatum) => (
        <Project 
          name={projectDatum.name}
          key= {projectDatum.id}
          id= {projectDatum.id}
          link= {projectDatum.link}
          github={projectDatum.github}
          image={projectDatum.image}
          text={projectDatum.text}
        />
      ))}
    </div>
  );
}

export default Projects;