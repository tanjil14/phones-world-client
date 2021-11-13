import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';

const Service = (props) => {
    const { service } = props;
    return (
        <div key={service.id}>
            <div className="col">
                <div className="card h-100">
                    <Link className='more-img' to={`/more/${service._id}`}>
                        <img className="card-img-top" src={service.img} alt="" />
                    </Link>

                    <div className="card-body">
                        <h3 className="card-title fw-bold">{service.name}</h3>
                        <p className="card-text"><small>{service.description}</small></p>
                        <Container>
                            <Row>
                                <Col>
                                    <Rating placeholderRating={service.rating}
                                        emptySymbol={<i className="far fa-star"></i>}
                                        placeholderSymbol={<i className="fas fa-star"></i>}
                                        fullSymbol={<i className="fas fa-star"></i>}
                                        readonly
                                    />
                                </Col>
                                <Row>
                                    <Col className='star-icon'><p className=" fw-bold"><i className="fas fa-dollar-sign"></i> {service.price}.00</p></Col>
                                </Row>

                            </Row>
                            <Row><hr /></Row>
                            <Row className='booking'>
                                <Col className='details-btn text-center'> <Link to={`/more/${service._id}`}>
                                    <button>Buy Now <i className="fas fa-info-circle"></i></button>
                                </Link>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;