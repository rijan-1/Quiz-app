import React from 'react';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import '../App.css'; // Import your custom CSS for styles

var testimonialsData = [
  {
    id: 1,
    name: 'QUALITY',
    description: 'Our number one priority and guarantee is to deliver quality workmanship across everything we do.',
  },
  {
    id: 2,
    name: 'SAFETY',
    description: 'Every effort is made to ensure the safety of our customers, team members and general public.',
  },
  {
    id: 3,
    name: 'HONESTY',
    description: 'We are honest, transparent and integral across all of our communications.',
  },
  {
    id: 4,
    name: 'TRUST',
    description: 'We build trust and confidence in our teams, our partners and our customers..',
  },
  {
    id: 5,
    name: 'COMMITMENT',
    description: 'It is our responsibility to be professional, reliable, punctual and attentive in every aspect of our roles..',
  },
  {
    id: 6,
    name: 'PASSION',
    description: 'We are passionate about delivering exceptional service and continuous improvement.',
  }
];

function AppTestimonials() {
  return (
    <section id="testimonials" className="testimonials-block">
      <Container fluid>
        <div className="title-holder">
        
        </div>
        <Carousel controls={false}>
          {testimonialsData.map(testimonial => (
            <Carousel.Item key={testimonial.id}>
              <blockquote>  <h2>Our Core Values</h2>
                <p>{testimonial.description}</p>
                <cite>
                  <span className='name'>{testimonial.name}</span>
                </cite>
              </blockquote>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
      <style jsx>{`
        .testimonials-block {
          /* Prevent text selection */
          user-select: none;
        }
        
        blockquote {
          /* Adjust cursor behavior */
          cursor: default;
        }
      `}</style>
    </section>
  );
}

export default AppTestimonials;
