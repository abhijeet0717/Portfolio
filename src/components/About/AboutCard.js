import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Abhijeet Kumar</span>{" "}
            from <span className="purple">Ranchi, India</span>.
            <br />
            I’m currently a{" "}
            <span className="purple">Final Year Undergraduate</span> in{" "}
            <span className="purple">Artficial Intelligence and Machine Learning</span> from{" "}
            <span className="purple">BIT Mesra</span>.
            <br />
            
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Abhijeet</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
