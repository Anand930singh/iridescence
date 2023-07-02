import React, { useState, useEffect } from 'react';
import { Blurhash } from 'react-blurhash';
import '../styles/Card.css';
import lcliq from "../Photo/lowDSC_5256.jpeg";
import { Link } from 'react-router-dom';

const CardPotowalk = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = lcliq;
  }, []);

  return (
    <div
      className={`card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ display: imageLoaded ? 'none' : 'inline' }}>
        <Blurhash
          hash="LJAmh=_4x]NG_4.8xvWBt8ogazay"
          width="100%"
          height="100%"
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />

      </div>
      <img src={lcliq} alt='cliqevent' className="card-img" loading='lazy' style={{ display: !imageLoaded ? 'none' : 'inline' }} />
      <div className="card-overlay">
        <p className={`card-text ${isHovered ? 'raised' : ''}`}>
          In club comprehensive photography workshop aimed at improving skills in using a DSLR camera. This workshop covered the basics of photography and provide hands-on training on how to effectively use a DSLR camera.
        </p>
        {isHovered && <Link to="/workshop"><button className="know-more-button">Know More</button></Link>}
      </div>

    </div>
  );
};

export default CardPotowalk;
