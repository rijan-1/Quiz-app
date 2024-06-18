import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const worksData = [
  {
    id: 1,
    image: 'https://media-cdn.tripadvisor.com/media/photo-o/15/20/82/a3/peking-duck-manchester.jpg',
    description: 'Unveiling a newly renovated restaurant space that harmonizes modern aesthetics with culinary excellence.'
  },
  {
    id: 2,
    image: 'https://bpprodstorage.blob.core.windows.net/bpprodcontainer/212247/images/0cc95397-fba1-4a7a-b0b5-ab10f1a050e89.jpg',
    description: 'With this project, we revamped the space with contemporary fixtures, elegant tiling, and a refreshed layout.'
  },
  {
    id: 3,
    image: 'https://www.kg-construction.co.uk/wp-content/uploads/2018/01/Kitchen-Refurbishment-KG-Construction-1-600x400.jpg',
    description: 'In this project, we revitalized the space with sleek, modern finishes and efficient layout adjustments.'
  },
  {
    id: 4,
    image: 'http://jnsconstruction.co.uk/img/property/gal3.jpg',
    description: 'In this Property development, we developed a modern living space from the ground up.'
  },
  {
    id: 5,
    image: 'https://media.rightmove.co.uk/57k/56983/140647025/56983_NEW210020_IMG_02_0002.jpeg',
    description: 'Introducing our newly renovated property, where classic charm meets modern convenience.'
  },
  {
    id: 6,
    image: 'https://media.rightmove.co.uk/215k/214727/126985733/214727_CHE210027_IMG_08_0001.jpeg',
    description: 'The beautiful and now completed cottage style kitchen extension with combined dinning area and snug.'
  },
  {
    id: 7,
    image: 'https://www.dsb-heating.co.uk/wp-content/uploads/2023/02/bathroom-renovation-bishops-stortford-dsb-heating.jpg',
    description: 'In this project we carried out multiple bathroom and shower installations including a larger hot water cylinder.'
  },
  {
    id: 8,
    image: 'https://images.pexels.com/photos/9937448/pexels-photo-9937448.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'In this renovation, we enhanced functionality and style with modern appliances, a spacious island, and custom cabinetry.'
  }
];

const AppWorks = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'PrintScreen') {
        setShowOverlay(true);
        setTimeout(() => setShowOverlay(false), 3000); // Hide overlay after 3 seconds
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleContextMenu = (event) => {
    event.preventDefault();
  };

  return (
    <section id="works" className="block works-block">
      <Container fluid>
       
        <Row className="portfoliolist"> <div className="title-holder">
          <h2>Our Recent Projects</h2>
        </div>
          {worksData.map((works) => (
            <Col sm={4} key={works.id}>
              <div className="portfolio-wrapper">
                <a href={works.link} onClick={(event) => event.preventDefault()}>
                  <div className="image-container">
                    <Image src={works.image} alt={`Work ${works.id}`} onContextMenu={handleContextMenu} />
                    {showOverlay && <div className="overlay">Screenshot Disabled</div>}
                    <div className="image-overlay" style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)'}}>
                      <div className="description" style={{ color: 'white', fontWeight: '600', userSelect: 'none', WebkitUserSelect: 'none', MozUserSelect: 'none', msUserSelect: 'none', }}>
                        <h3>{works.title}</h3>
                        <p>{works.description}</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <style jsx>{`
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(255, 0, 0, 0.3); /* Red with 30% opacity */
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 24px;
          color: white;
          z-index: 999; /* Ensure it's above other content */
        }

        .description {
          position: relative;
          z-index: 1; /* Ensure description is above overlay */
          padding: 20px;
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </section>
  );
};

export default AppWorks;
