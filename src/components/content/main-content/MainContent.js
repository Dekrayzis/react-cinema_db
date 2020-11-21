import React from 'react';
import './mainContent.scss';
import Carousel from '../carousel/Carousel';

const images = [
  {
    url: 'http://placehold.it/2500x1280'
  },
  {
    url: 'http://placehold.it/2500x1280'
  },
  {
    url: 'http://placehold.it/2500x1280'
  }
];
const MainContent = () => {
  return (
    <div className="main-content">
      <Carousel images={images} auto showControls />
      <div className="grid-movie-title">
        <div className="movieType">Now playing</div>
        <div className="paginate">Paginate</div>
      </div>
      {/* Display grid component */}
    </div>
  );
};

export default MainContent;
