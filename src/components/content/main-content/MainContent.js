import React, { useState } from 'react';
import './mainContent.scss';
import Carousel from '../carousel/Carousel';
import Paginate from './../paginate/Paginate';

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
  const [currentpage, setCurrentPage] = useState(1);
  const paginate = (type) => {
    if (type === 'prev' && currentpage > 0) {
      setCurrentPage((prev) => prev - 1);
    } else {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div className="main-content">
      <Carousel images={images} auto showControls />
      <div className="grid-movie-title">
        <div className="movieType">Now playing</div>
        <div className="paginate">
          <Paginate currentPage={currentpage} totalPages={10} paginate={paginate} />
        </div>
      </div>
      {/* Display grid component */}
    </div>
  );
};

export default MainContent;
