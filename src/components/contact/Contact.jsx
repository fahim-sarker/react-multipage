import React from 'react'
import "./contact.css"
import { Container, Row, Col } from 'react-bootstrap'

const Contact = () => {
    return (
        <div id='contact'>
            <Container>
                <Row>
                    <Col lg={{ span: 6, offset: 3 }}>
                        <div className="contact-text">
                            <h3>Contact Us</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                        </div>
                    </Col>
                    <Col lg={{ span: 10, offset: 1 }}>
                        <form>
                            <div className="contact-form-1">
                                <div className="form-1">
                                    <h6>name</h6>
                                    <input type="text" placeholder='enter your name' />
                                </div>
                                <div className="form-2">
                                    <h6>name</h6>
                                    <input type="text" placeholder='enter your email' />
                                </div>
                            </div>
                            <div className="contact-form-2">
                                <div className="form-3">
                                    <h6>subject</h6>
                                    <input type="text" placeholder='provide your context' />
                                </div>
                                <div className="form-4">
                                    <h6>subject</h6>
                                    <input type="text" placeholder=' select your subject' />
                                </div>
                            </div>
                            <div className="contact-frm">
                            <h6>Message</h6>
                            <input type="text" placeholder='write your question here'/>
                            <div className="contact-btn">
                                <a href="#">contact us</a>
                            </div>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Contact
