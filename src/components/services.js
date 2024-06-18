import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './services.css';

const servicesData = [
  {
    id: 1,
    title: 'Renovations',
    description: 'We offer a wide variety of home improvement work to transform your property and turn it into your dream home. Feel free to give us a call at any point to discuss your home improvement project and how we can help you.'
  },
  {
    id: 2,
    title: 'Development',
    description: 'Every day, our team designs, manufactures, and delivers brand-new projects to clients according to specifications, on schedule, and under budget. We provide a range of new build options in London.'
  },
  {
    id: 3,
    title: 'Extensions',
    description: 'Whatever kind of addition you need for your house, our staff can make it happen with affordable options to suit everyone\'s preferences and financial situation. The additions we design and construct for our clients immediately increase the value of their houses and enhance the standard of living for their inhabitants.'
  }
];

function AppServices() {
  const [flippedService, setFlippedService] = useState(null);

  const handleServiceClick = (serviceId) => {
    if (flippedService === serviceId) {
      setFlippedService(null); // Toggle back to front if already flipped
    } else {
      setFlippedService(serviceId); // Flip to back if not already flipped
    }
  };

  return (
    <section id="services" className="block services-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Our Services</h2>
          <div className="subtitle">Services We Provide</div>
        </div>
        <Row className="justify-content-center">
          {servicesData.map(service => (
            <Col key={service.id} xs={12} sm={6} md={4} className="service-col">
              <div className={`flip-card ${service.id === flippedService ? 'flipped' : ''}`} onClick={() => handleServiceClick(service.id)}>
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div className="front-content">
                      <h3>{service.title}</h3>
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <div className="back-content">
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <style jsx>{`
        .service-col {
          margin-bottom: 20px;
        }

        .flip-card {
          width: 100%;
          height: 300px; /* Adjust the height here as needed */
          perspective: 1000px;
          cursor: pointer;
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }

        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }

        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
        }

        .flip-card-front {
          background-color: #ffffff;
          color: #333333;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .flip-card-back {
          background-color: #FF6347;
          color: white;
          transform: rotateY(180deg);
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
          border-radius: 20px;
        }

        .front-content, .back-content {
          padding: 20px;
        }

        .front-content h3, .back-content h3 {
          font-size: 24px;
          margin-bottom: 10px;
        }

        .back-content p {
          font-size: 16px;
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
}

export default AppServices;
