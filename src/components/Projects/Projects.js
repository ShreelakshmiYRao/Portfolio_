import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import agri from "../../Assets/Projects/crop.jpg";
import port from "../../Assets/Projects/portfolio.jpg";
import footware from "../../Assets/Projects/shoe.jpg";
import wedpro from "../../Assets/Projects/wedding.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Projects I have worked 
        </h1>
        {/* <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p> */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={footware}
              isBlog={false}
              title="SoleSense"
              description="Built a web application that uses machine learning to analyze foot images and recommend suitable footwear, technologies include Python, OpenCV, Flask, HTML, CSS, and JavaScript."
              ghLink="https://github.com/ShreelakshmiYRao/SoleSense-Footwear-Recommendation"
              demoLink="https://drive.google.com/file/d/1YZbFt5INkjqdTQWUR4GBJvpP9ulive8N/view"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wedpro}
              isBlog={false}
              title="WedPlanner Pro "
              description="Created a wedding planning system with full CRUD functionality for event and task management using a DBMS. Technologies used include SQL, HTML, and CSS."
              ghLink="https://github.com/ShreelakshmiYRao/WedPlannerPro--"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={port}
              isBlog={false}
              title="My Portfolio"
              description="I developed a personal website to present my projects, skills, and contact information, featuring a clean, responsive design built with HTML, CSS, and JavaScript."
              ghLink="https://github.com/ShreelakshmiYRao/Portfolio_"
              demoLink="https://shreelakshmiraoportfolio.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={agri}
              isBlog={false}
              title="AgriInsights"
              description="Created a web application that uses an API to fetch and display historical agricultural data for various districts  
              using JavaScript, HTML, CSS."
              ghLink="https://github.com/ShreelakshmiYRao/AgriInsights-Crop-Production-Statistics"
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
