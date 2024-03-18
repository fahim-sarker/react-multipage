import React from 'react'
import "./pricing.css"
import { Container, Row, Col } from 'react-bootstrap'
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const Pricing = () => {
    return (
        <div id='pp'>
            <Container>
                <Row>
                    <Col lg={{ span: 6, offset: 3 }}>
                        <div className="pp-text">
                            <h3>Our Pricing Plans</h3>
                            <p>When you’re ready to go beyond prototyping in Figma, Webflow is ready to help you bring your designs to life — without coding them.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                <Col lg={4}>
                    <div className="pp-card">
                        <div className="p-1">
                            <h3>$299 per design</h3>
                        </div>
                        <h4>Landing Page </h4>
                        <p>When you’re ready to go beyond prototyping in Figma, </p>
                        <ul>
                            <li> <IoIosCheckmarkCircleOutline  className='icon'/> ll limited links</li>
                            <li> <IoIosCheckmarkCircleOutline className='icon'/> Own analytics platform</li>
                            <li> <IoIosCheckmarkCircleOutline className='icon'/> Chat support</li>
                            <li> <IoIosCheckmarkCircleOutline className='icon'/>Optimize hashtags</li>
                            <li> <IoIosCheckmarkCircleOutline className='icon'/>Unlimited users</li>
                            <a href="#">Get started</a>
                        </ul>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="pp-card">
                        <div className="p-1">
                            <h3>$299 per design</h3>
                        </div>
                        <h4>Landing Page </h4>
                        <p>When you’re ready to go beyond prototyping in Figma, </p>
                        <ul>
                            <li> <IoIosCheckmarkCircleOutline  className='icon'/> ll limited links</li>
                            <li> <IoIosCheckmarkCircleOutline className='icon'/> Own analytics platform</li>
                            <li> <IoIosCheckmarkCircleOutline className='icon'/> Chat support</li>
                            <li> <IoIosCheckmarkCircleOutline className='icon'/>Optimize hashtags</li>
                            <li> <IoIosCheckmarkCircleOutline className='icon'/>Unlimited users</li>
                            <a href="#">Get started</a>
                        </ul>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="pp-card">
                        <div className="p-1">
                            <h3>$299 per design</h3>
                        </div>
                        <h4>Landing Page </h4>
                        <p>When you’re ready to go beyond prototyping in Figma, </p>
                        <ul>
                            <li> <IoIosCheckmarkCircleOutline  className='icon'/> ll limited links</li>
                            <li> <IoIosCheckmarkCircleOutline className='icon'/> Own analytics platform</li>
                            <li> <IoIosCheckmarkCircleOutline className='icon'/> Chat support</li>
                            <li> <IoIosCheckmarkCircleOutline className='icon'/>Optimize hashtags</li>
                            <li> <IoIosCheckmarkCircleOutline className='icon'/>Unlimited users</li>
                            <a href="#">Get started</a>
                        </ul>
                    </div>
                </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Pricing
