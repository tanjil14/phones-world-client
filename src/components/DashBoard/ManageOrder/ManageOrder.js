import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const ManageOrder = () => {
    const { remove } = useAuth();
    const [allOrders, setAllOrders] = useState([]);
    const [confirm, setConfirm] = useState();
    const confirmOrder = (order) => {
        fetch('https://morning-refuge-62244.herokuapp.com/orders', {
            method: 'put',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(res => {
                if (res.modifiedCount === 1) {
                    setConfirm(res);
                }
            });
        console.log('confirm clicked');
    }
    useEffect(() => {
        fetch('https://morning-refuge-62244.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [confirm])
    return (
        <div>
            {
                allOrders.map(order => <Container key={order._id} style={{ paddingTop: '50px' }}>
                    <Row key={order._id}>
                        <Col>
                            <img src={order.img} className="card-img-top h-100 w-100 " alt="" />
                        </Col>
                        <Col>
                            <h2 className="fw-bold "> {order.name}</h2>
                            <p className="fw-bold ">{order.description}</p>
                            <Row>
                                <Col>
                                    <h1><i className="fas fw-small fa-dollar-sign"></i> {order.price}</h1>
                                    <h6 className='fw-bold mt-3'>Status: <span style={{ textTransform: 'uppercase', color: 'red' }}> {order.status} </span></h6>
                                    <div className='booking'>
                                        <button onClick={() => confirmOrder(order)}>Confirm Order</button>
                                    </div>
                                </Col>
                                <Col>
                                    <Row>
                                        <Col className='booking'>
                                            <button onClick={() => remove(order._id)}><i className="fas fa-trash"></i> Remove </button>
                                        </Col>
                                        <br />
                                    </Row>

                                </Col>
                                <p className='mt-3 fw-bold'>Order By: {order?.user?.name}</p>
                            </Row>
                        </Col>
                    </Row>
                </Container>)
            }
        </div>
    );
};

export default ManageOrder;