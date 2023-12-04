import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PromotionImage from "../../Food_Assets/assets/promotion/pro.png"

function Section4() {
    return (
        <>
            <section className='promotion_section'>
                <Container>
                    <Row className='align-items-center'>
                        <Col lg={6} className='text-center mb-5 mb-lg-0'>
                            <img src={PromotionImage} className='img-fluid' alt="promotion"></img>
                        </Col>

                        <Col lg={6} className='px-5 mb-5'>
                            <h2 className=''>Nothig brings people together like a good burger </h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus blanditiis atque temporibus quisquam non numquam eos quis eveniet voluptatum deserunt.</p>

                            <ul>
                                <li>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, accusamus?</p>
                                </li>

                                <li>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </li>

                                <li>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, dicta? Nostrum ut dicta cupiditate magnam!.</p>
                                </li>
                            </ul>

                        </Col>

                    </Row>

                </Container>

            </section>


            {/* bg parallax scroll */}

            <section className='bg_parallax_scroll'>

            </section>



        </>

    );
};

export default Section4;