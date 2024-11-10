import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiHtml5, DiCss3 } from "react-icons/di";
import { FaCuttlefish } from "react-icons/fa";
import {
  DiJavascript1,
 
  DiMongodb,
  DiPython,
 
  DiJava,
} from "react-icons/di";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
     
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
     
     
     
     
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      
 

      <Col xs={4} md={2} className="tech-icons">
  <FaCuttlefish /> {/* Placeholder for C */}
</Col> 


<Col xs={4} md={2} className="tech-icons">
  <DiCss3 /> {/* CSS */}
</Col>
<Col xs={4} md={2} className="tech-icons">
  <DiHtml5 />
</Col>
    </Row>
  );
}

export default Techstack;
