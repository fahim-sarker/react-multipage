import React from 'react'
import "./banner.css"
import { Col, Row,Container } from 'react-bootstrap'
import Ban from "../../assets/ban.png"

const Banner = () => {
  return (
    <div>
       <section id="banner">
        <Container>
          <Row>
            <Col lg={6}>
              <div className='ban-text'>
                <h2>Building stellar websites for early startups</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                <a className='ban-btn' href="work.html">View our work</a>
                <a className='ban-btn' href="pricing.html">View Pricing<i className='fa-sharp fa-solid fa-arrow-right'></i></a>
              </div>
            </Col>
            <Col lg={{ span: 5, offset: 1 }}>
              <div className='ban-img'>
                <img src={Ban} alt="banner" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Banner
