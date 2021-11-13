import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Blog.css'

const Blog = () => {
  return (
    <>
      <div className='mt-5' style={{ textAlign: 'center' }}>
        <h2><b>Latest Blog</b></h2>
        <p>Mobile phones are efficient communication devices and make life easier. Whether locating a friend or following up with a new contact, mobile phones allow you to connect to people in any part of the world. <br /><i className='text-danger'>-By ADMIN</i></p>
      </div>
      <CardGroup className=' container'>
        <Card>
          <Card.Img variant="top" src="https://fdn.gsmarena.com/imgroot/reviews/21/realme-gt-neo2/lifestyle/-1200w5/gsmarena_001.jpg" />
          <Card.Body>
            <Card.Title style={{ color: 'black' }}> <h3>Realme GT Neo2</h3></Card.Title>
            <Card.Text>
              The original Realme GT was released in March, and the toned-down version named GT Neo followed shortly after. Interestingly enough, a successor to the latter is already out in China, and it's about to make its rounds globally, starting with India. The Realme GT Neo2 isn't just your ordinary hardware refresh, though. The handset offers quite a few welcome upgrades over its predecessor, while its pricing is just as aggressive. It's also the first Neo phone to reach European shores.
            </Card.Text>
          </Card.Body>
          <div className="text-muted mb-3">
            <span className='text-mute'>10 NOV, 2021</span>
            <span><small className='text-mute1' >By Admin</small></span>
          </div>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://fdn.gsmarena.com/imgroot/reviews/21/huawei-nova-9/hands-on/lifestyle/-1200w5/gsmarena_006.jpg" />
          <Card.Body>
            <Card.Title style={{ color: 'black' }}> <h3>Huawei nova 9 hands-on review</h3></Card.Title>
            <Card.Text>
              The nova 9 Pro gets faster 100W charging and a slightly smaller 4,000 mAh battery than the nova 9. The main difference, however is the display and, naturally, device size. The nova 9 has 6.57-inch, 1080 x 2340-pixel display inside a 160 x 73.7 x 7.8 mm, 175-gram body. The nova 9 Pro has a slightly bigger 6.72-inch, 1236 x 2676-pixel panel and a 163.4 x 74.4 x 8 mm, 186-gram body.
            </Card.Text>
          </Card.Body>

          <div className="text-muted mb-3">
            <span className='text-mute'>7 NOV, 2021</span>
            <span><small className='text-mute1' >By Admin</small></span>
          </div>
        </Card>
      </CardGroup>
    </>
  );
};

export default Blog;