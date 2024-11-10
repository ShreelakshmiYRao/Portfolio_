import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shreelakshmi </span>
            from <span className="purple"> Puttur, India. </span>
            
            I have completed Bachelor of Engineering in the field of Computer Science and Engineering (Data Science) at Vivekananda College of Engineering and Technology, Puttur
            <br />
      
          </p>
       
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
