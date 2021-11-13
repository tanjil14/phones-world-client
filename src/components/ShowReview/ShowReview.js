import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Rating from 'react-rating';

const ShowReview = (props) => {
    const { review } = props;
    return (
        <div key={review.id}>
            <div className="col">
                <div className="card">
                    <div className='text-center mt-2'>
                        <img style={{
                            width: "100px",
                            height: "100px",
                            borderRadius: "50%",
                        }} src={review.img} alt="" />
                    </div>
                    <div className="card-body">
                        <h3 className="card-title fw-bold">{review.name}</h3>
                        <p className="card-text"><small>{review.review}</small></p>
                        <Container>
                            <Row>
                                <Col>
                                    <span>Ratings: </span>
                                    <Rating placeholderRating={review.rating}
                                        emptySymbol={<i className="far fa-star"></i>}
                                        placeholderSymbol={<i className="fas fa-star"></i>}
                                        fullSymbol={<i className="fas fa-star"></i>}
                                        readonly
                                    />
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowReview;