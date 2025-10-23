import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Smart Traffic Monitoring System"
              description=" Designed to detect motorcycle riders without helmets. System ensures real-time monitoring and penalty tracking using YOLOv5,EasyOCR, Gmail smtplib and Twilio."
              ghLink="https://github.com/abhijeet0717/Smart-Traffic-Monitoring"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Job Portal"
              description="Job portal enabling users to register, log in, search, filter them by category and location, apply for jobs. Uses Node.js, MongoDB, React.js, Docker, AWS EC2"
              ghLink="https://github.com/abhijeet0717/Job-Portal"
              demoLink="https://jobportal.adarshnarayan.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="AI Career Advisor"
              description="An AI-driven career guidance platform developed to classify students into career readiness levels based on academic performance, technical skills, and interests"
              ghLink="https://github.com/abhijeet0717/AI-Powered-Career-Advisor"
              demoLink="https://smart-career-advisor-abhijeet.vercel.app/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Movie Recommender"
              description="A content-based movie recommendation system that suggests films based on user-selected favorites. It analyzes movie features like genres, keywords, and cast to generate personalized suggestions"
              ghLink="https://github.com/abhijeet0717/Movie-Recommender-System"
              demoLink="https://Movie-Recommender-abhijeet.ercel.app/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
