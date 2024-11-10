import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/image.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            Passionate tech enthusiast with a knack for problem-solving, eager to contribute to innovative tech solutions and build 
            meaningful impact.  
              <br />
              I am fluent in classics like
              <i>
                <b className="purple"> C++, C, HTML, CSS, JS. </b>
              </i>
              <br />
              <br />
             &nbsp;
              <br />
              <br />
              <b className="purple"></b> 
              <i>
                <b className="purple">
                  {" "}
                </b>
              </i>
              &nbsp; 
            
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ShreelakshmiYRao"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/shreelakshmi-%E2%80%8E-3029b2255/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>   
              </li>
              <li className="social-icons">
  <a
    href="https://www.instagram.com/rao_shreelakshmi45/"
    target="_blank"
    rel="noreferrer"
    className="icon-colour home-social-icons"
  >
    <FaInstagram />
  </a>
</li>

            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
