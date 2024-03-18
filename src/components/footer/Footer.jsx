import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Lg from "../../assets/logor.png"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./footer.css"

const Footer = () => {
    return (
       <>
        <footer id='footer'>
        <Container>
          <Row>
            <Col lg={5}>
              <div class="ftr-text">
                <img src={Lg} alt="" />
                <p>We are always open to discuss your project and improve your online presence.</p>
              </div>
            </Col>
            <Col lg={{ span: 4, offset: 2 }}>
              <div className="ftr-right">
                <h2>Lets Talk!</h2>
                <p>We are always open to discuss your project, improve your online presence and help with your UX/UI design
                  challenges.</p>
                <a href="#"><FaFacebook /></a>
                <a href="#"> <FaInstagram /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaLinkedin /></a>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <div className="ftr-bottom">
                <div className="ftr-bottom-text">
                  <div className="ftr-left">
                    <h5>Email me at</h5>
                    <h6>contact@website.com</h6>
                  </div>
                  <div className="ftr-right">
                    <h5>Call us</h5>
                    <h6>0927 6277 28525</h6>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
      <section id='cp'>
        <Container>
          <Row>
            <Col lg={3}>
              <div className="cp-text">
                <h6>Copyright 2022, Finsweet.com</h6>
              </div>
            </Col>
            <Col lg={{ span: 7, offset: 2 }}>
              <div className="cp-menu">
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">features</a></li>
                  <li><a href="#">pricing</a></li>
                  <li><a href="#">faq</a></li>
                  <li><a href="#">blog</a></li>
                  <li><a href="">privacy </a></li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
          </section> 
       </>
    )
}

export default Footer
