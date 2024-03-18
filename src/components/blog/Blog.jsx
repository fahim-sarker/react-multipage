import React from 'react'
import "./blog.css"
import { Container, Row, Col } from 'react-bootstrap'
import Wo from "../../assets/work6.png"

const Blog = () => {
    return (
        <div id='df'>
            <Container>
                <Row>
                    <Col lg={{ span: 8, offset: 1 }}>
                        <div className="fd-text">
                            <h5>Web design and development</h5>
                            <h2>Finsweet Design case studies</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
                        </div>
                    </Col>
                    <Col lg={{ span: 10, offset: 1 }}>
                        <div className="fb-img">
                            <img src={Wo} alt="work" />
                        </div>
                    </Col>
                    <Col lg={{ span: 2, offset: 1 }}>
                        <div className="left">
                            <h6>Client</h6>
                            <h5>facebook.com</h5>
                        </div>
                    </Col>
                    <Col lg={{ span: 2, offset: 1 }}>
                        <div className="left">
                            <h6>Service</h6>
                            <h5>Product Design</h5>
                        </div>
                    </Col>
                    <Col lg={{ span:4, offset: 1 }}>
                        <div className="left">
                        <h6>Deliverable</h6>
                        <h5>5UI Screens, UX Flow & Prototype</h5>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Blog
