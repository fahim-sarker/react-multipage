import React from 'react'
import  "./about.css"
import { Container,Row,Col } from 'react-bootstrap'
import Abt from "../../assets/about1.png"

const About = () => {
  return (
    <section id="ot">
        <Container>
            <Row>
                <Col lg={5}>
                    <div className="ot-text">
                    <a href="#">about us</a>
                        <h2>Our designs solve problems</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    </div>
                </Col>
                <Col lg={{span:5, offset:2}}>
                    <div className="ot-img">
                        <img src={Abt} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default About
