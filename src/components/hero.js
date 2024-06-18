import React from 'react';

const heroData = {
  id: 1,
  video: 'https://videos.pexels.com/video-files/4315553/4315553-hd_1280_720_60fps.mp4',
  title: 'Our Vision',
  description: 'Our mission is to provide excellent construction services to our clients and consistently provide results that exceed expectations.'
};

function AppHero() {
  return (
    <section id="home" className="hero-block" style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      <video
        className="d-block w-100"
        src={heroData.video}
        autoPlay
        loop
        muted
        style={{ objectFit: 'cover', height: '100%', width: '100%', position: 'absolute', top: 0, left: 0 }}
      />
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.7)', zIndex: 1 }}></div>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', color: '#fff', zIndex: 2, padding: '0 10%' }}>
        <div>
          <h1>{heroData.title}</h1>
          <h3>{heroData.description}</h3>
        </div>
      </div>
    </section>
  );
}

export default AppHero;
