import React from 'react'
import "./feature.css"
import { Container,Row,Col } from 'react-bootstrap'
import Svv from "../../assets/ft1.svg"

const Feature = () => {
  return (
    <div id='banner'>
      <Container>
        <Row>
            <Col lg={6}>
                <div className="ban-text">
                <h2>All the features you need</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a class="ban-btn" href="#">View pricing</a>
                </div>
            </Col>
            <Col lg ={{span:5, offset :1}}>
                <div className="ban-img">
                    <img src={Svv}alt="banner" />
                </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Feature
