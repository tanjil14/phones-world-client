import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './MyBooking.css';

const MyBooking = () => {
  const { selectedBooking, remove } = useAuth();
  const totalPrice = selectedBooking.reduce((total, booking) => total + parseInt(booking.price), 0)
  return (
    <div>
      {
        selectedBooking.length ?
          <div className='text-center p-3 fw-bold'>
            <h2>Total {selectedBooking.length} Products Added</h2>
            <h4>Total Cost : {totalPrice}</h4>
          </div> :
          <div className="text-center"><h1>No Cost</h1></div>
      }
      <div className="">
        {selectedBooking.length ? <div>
          {
            selectedBooking.map(booking => (

              // <h1>{booking.name}</h1>
              <Container key={booking._id} style={{ paddingTop: '50px' }}>
                <Row key={booking._id}>
                  <Col>
                    <img src={booking.img} className="card-img-top h-100 w-100 " alt="" />
                  </Col>
                  <Col>
                    <h2 className="fw-bold "> {booking.name}</h2>
                    <p className="fw-bold ">{booking.description}</p>
                    <Row>
                      <Col>
                        <h1><i className="fas fw-small fa-dollar-sign"></i> {booking.price}</h1>
                        <h6 className='fw-bold'>Status: <span style={{ textTransform: 'uppercase', color: 'red' }}> {booking.status} </span></h6>
                      </Col>
                      <Col>
                        <Row>
                          <Col className='booking'>
                            <button onClick={() => remove(booking._id)}><i className="fas fa-trash"></i> Remove </button>
                          </Col>
                        </Row>
                      </Col>
                      <hr />
                      <p className="text-center fw-bold">{booking.time}</p>

                    </Row>
                  </Col>
                </Row>
              </Container>

            ))
          }
        </div> :
          <div> <h1 className='text-danger text-center'>No Booking Found</h1></div>
        }
      </div>
      <Nav.Link>
        <Link className='booking pt-5 w-25 mx-auto' style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none', }} to='/allproducts'><button className='container '>Add More Products</button></Link>
      </Nav.Link>
    </div>
  );
};


export default MyBooking;