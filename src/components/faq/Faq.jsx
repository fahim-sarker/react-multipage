import React from 'react'
import "./faq.css"
import { Container, Row, Col } from 'react-bootstrap'
import Bl from "../../assets/blog.png"

const Faq = () => {
    return (
        <div id='xu'>
            <Container>
                <Row>
                    <Col lg={{ span: 8, offset: 2 }}>
                        <div className="ux-text">
                            <h3>A UX Case Study on Creating a Studious Environment for Students</h3>
                        </div>
                        <div className="ux-text-bottom">
                            <div className="ux-text-1">
                                <p>Andrew Jonson</p>
                            </div>
                            <div className="ux-text-1">
                                <p>Posted on 27th January 2021</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className="ux-img">
                            <img src={Bl} alt="blog" />
                        </div>
                    </Col>
                    <Col lg={{ span: 8, offset: 2 }}>
                        <div className="ux-text-1">
                            <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.</p>
                            <h6>Read more</h6>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Faq
