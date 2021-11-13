import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
const ManageProduct = () => {
    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
        fetch('https://hidden-coast-67939.herokuapp.com/services')
            .then(result => result.json())
            .then(data => setAllProducts(data))
    }, []);
    const removeItem = (id) => {
        const areSure = window.confirm('Are You Sure Want To Delete?');
        if (areSure) {
            fetch(`https://hidden-coast-67939.herokuapp.com/products/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('You Have Deleted One Item');
                        const selectAfterRemove = allProducts.filter((select) => !(select._id === id));
                        setAllProducts(selectAfterRemove);
                    }
                    else {
                        alert('Somethings bad happens');
                    }
                })
        }
    }
    return (
        <div>
            <div className="text-center fw-fold">
                <h1 className='fw-bold'> Total Products: {allProducts.length}</h1>
            </div>
            <>
                <div className="">
                    {allProducts.length ? <div>
                        {
                            allProducts.map(product => (

                                // <h1>{product.name}</h1>
                                <Container key={product._id} style={{ paddingTop: '50px' }}>
                                    <Row>
                                        <Col>
                                            <img src={product.img} className="card-img-top h-100 w-100 " alt="" />
                                        </Col>
                                        <Col>
                                            <h2 className="fw-bold "> {product.name}</h2>
                                            <p className="fw-bold ">{product.description}</p>
                                            <Row>
                                                <Col>
                                                    <h1><i className="fas fw-small fa-dollar-sign"></i> {product.price}</h1>
                                                </Col>
                                                <Col>
                                                    <Row>
                                                        <Col className='booking'>
                                                            <button onClick={() => removeItem(product._id)}><i className="fas fa-trash"></i> Remove </button>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <hr />
                                </Container>

                            ))
                        }
                    </div> :
                        <div> <h1 className='text-danger text-center'>No product Found</h1></div>
                    }
                </div>
            </>
        </div>
    );
};

export default ManageProduct;