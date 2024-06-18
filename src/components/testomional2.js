import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Sample data for client reviews and case studies
const testimonialsData = [
  {
    id: 1,
    type: 'Review',
    author: 'Ray Lee',
    text: 'All tasks were completed swiftly , and as agreed they were a pleasant and reliable team, would recommend highly ',
  },
  {
    id: 2,
    type: 'Case Study',
    title: 'Casey Nikolai',
    description: 'Timely and dependable, neat and structured, exceptional job, and delivered exactly what we requested.',
  },
  {
    id: 3,
    type: 'Review',
    author: 'Jane Smith',
    text: 'Excellent and dependable group of professionals who completed an excellent job; really impressed with the craftsmanship ',
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="block testimonials-block">
      <Container style={{ position: 'relative', zIndex: 1 }}>
        <div className="title-holder">
     
          <div className="subtitle">     <h2 style={{color:'white'}}>Testimonials</h2>Client reviews and case studies</div>
        </div>
        <Row>
          {testimonialsData.map((testimonial) => (
            <Col md={6} key={testimonial.id}>
              <div className="testimonial">
                {testimonial.type === 'Review' && (
                  <>
                    <h3>{testimonial.author}</h3>
                    <p>{testimonial.text}</p>
                  </>
                )}
                {testimonial.type === 'Case Study' && (
                  <>
                    <h3>{testimonial.title}</h3>
                    <p>{testimonial.description}</p>
                  </>
                )}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <style jsx>{`
        .testimonial {
          margin-bottom: 30px;
          padding: 20px;
          border: 1px solid #ddd;
          background-color: #FF240 ;; /* Red background color */
          transition: box-shadow 0.3s ease-in-out;
          user-select: none; /* Disable text selection */
          -webkit-user-select: none; /* For Chrome/Safari */
          -moz-user-select: none; /* For Firefox */
          -ms-user-select: none; /* For Internet Explorer/Edge */
          -webkit-touch-callout: none; /* Disable touch callout */
        }

        .testimonial:hover {
          box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
        }

        .testimonial h3 {
          margin-bottom: 10px;
          font-size: 18px;
          color: white;
        }

        .testimonial p {
          font-size: 14px;
          line-height: 1.6;
          color: white;
        }
      `}</style>
    </section>
  );
}

export default Testimonials;
