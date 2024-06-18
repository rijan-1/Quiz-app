import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function AppAbout() {
  const handleCopy = (event) => {
    event.preventDefault(); // Prevent default copy behavior
  };

  return (
    <section id="about" className="block about-block">
      <Container fluid>
        <div className="title-holder">
          <h2>About Us</h2>
          <div className="subtitle">Learn More About Us</div>
        </div>
        <Row>
          <Col sm={6}>
            {/* Placeholder for any other content you may want */}
          </Col>
          <Col sm={6} className="about-text">
            <p>
              Daofarm was founded with the belief that every project and client has a unique story. Our mission is to create, restore, maintain, and advise on all aspects of construction and development. From inception to completion, our aim is to deliver more than just structures. We emphasize quality, collaboration, and innovation to narrate a compelling story with each project.
            </p>
            <p>
              At Daofarm, we strive to set a benchmark in the dynamic and ever-evolving construction industry. Construction, restoration, and maintenance are intricate processes influenced by numerous factors aligning perfectly. We take pride in our adaptable team of experts and the relationships we build with clients, partners, and communities.
            </p>
          </Col>
        </Row>
      </Container>
      <style jsx>{`
        .about-block {
          padding: 80px 0; /* Adjust the padding as needed */
          background-color: #f9f9f9; /* Light gray background */
        }

        .title-holder {
          text-align: center;
          margin-bottom: 40px;
          opacity: 0; /* Initially hidden */
          animation: fadeIn 1s ease-out forwards; /* Fade-in animation */
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px); /* Move up slightly */
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .title-holder h2 {
          font-size: 36px;
          font-weight: 700;
          color: #333;
          margin-bottom: 10px;
        }

        .subtitle {
          font-size: 18px;
          font-weight: 500;
          color: #666;
          opacity: 0; /* Initially hidden */
          animation: slideIn 1s ease-out forwards 0.5s; /* Slide-in animation with delay */
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-20px); /* Move up slightly */
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .about-text {
          padding: 20px; /* Add padding inside the column */
          opacity: 0; /* Initially hidden */
          animation: fadeInText 1s ease-out forwards 1s; /* Fade-in text with delay */
        }

        @keyframes fadeInText {
          from {
            opacity: 0;
            transform: translateY(20px); /* Move down slightly */
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .about-text p {
          font-size: 16px;
          line-height: 1.8;
          color: #555;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .about-text {
            padding: 0; /* Remove padding on smaller screens */
          }

          .about-text p {
            font-size: 15px; /* Adjust font size for smaller screens */
          }
        }
      `}</style>
    </section>
  );
}

export default AppAbout;
