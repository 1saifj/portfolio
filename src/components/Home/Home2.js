import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/me.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillSkype,
  AiOutlineMail
} from "react-icons/ai";
import { FaTelegram, FaDiscord } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

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
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />I am fluent in classics like
              <i>
                <b className="purple"> JavaScript, TypeScript and Solidity. </b>
              </i>
              <br />
              <br />
              My field of Interest is building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Deep Learning and Natural Technologies Processing.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing websites
              with <i><b className="purple">Node.js</b></i> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js or Next.js, and Vue.js </b>
              </i>
              <br />
              <br />
              Currently, I am focused on Blockchain development with
              <i>
                <b className="purple">
                  {" "}
                  Solidity,
                </b>
              </i> and
              <i>
                <b className="purple">
                  {" "}
                  Web3.js
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" style={{ borderRadius: '50%' }} />
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
                  href="https://github.com/werry216"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:aleksandrsergey92@gmail.com"
                  target="_blank"
                  className="icon-colour  home-social-icons"
                >
                  <SiGmail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://join.skype.com/invite/DoiJVbqFRtUN"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillSkype />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://discord.gg/prSeNjQG"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaDiscord />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://t.me/bonanzalek"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaTelegram />
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
