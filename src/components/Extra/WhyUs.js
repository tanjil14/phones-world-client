import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './WhyUs.css';

const Part = () => {
  return (
    <>
      <div>
        <h1 className='text-center '><b>WHY US</b></h1>
      </div>
      <CardGroup>
        <Card className='m-3 part-card'>
          <Card.Img variant="top" className='w-25' src="https://cdn-icons-png.flaticon.com/512/5169/5169137.png" />
          <Card.Body>
            <Card.Title><h3>Official Warrenty</h3> </Card.Title>
            <Card.Text>
              From phones world you will get official warrenty for every phone. If there is  any problem within 1 year you will get replacement.
            </Card.Text>
            <div className="single-choose">
              <p >01</p>
            </div>

          </Card.Body>
        </Card>
        <Card className='m-3 part-card'>
          <Card.Img variant="top" className='w-25' src="https://cdn-icons-png.flaticon.com/512/5998/5998991.png" />
          <Card.Body>
            <Card.Title><h3>Support Team</h3></Card.Title>
            <Card.Text>
              We have a dedicated support team 24/7 hours. They are always ready to give you service after selling. This is absolutely free.
            </Card.Text>
            <div className="single-choose">
              <p >02</p>
            </div>
          </Card.Body>
        </Card>
        <Card className='m-3 part-card'>
          <Card.Img variant="top" className='w-25' src="https://cdn-icons-png.flaticon.com/512/1041/1041888.png" />
          <Card.Body>
            <Card.Title><h3>Save Money</h3></Card.Title>
            <Card.Text>
              We give huge discount on every phone. Check out our website and buy your desire phone in your budget and save money.
            </Card.Text>
            <div className="single-choose">
              <p >03</p>
            </div>
          </Card.Body>
        </Card>
      </CardGroup>
    </>
  );
};

export default Part;