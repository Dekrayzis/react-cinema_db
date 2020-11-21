/* eslint-disable react/prop-types */
import React from 'react';
import './grid.scss';
import Rating from '../rating/Rating';

const Grid = (props) => {
  const { images } = props;
  return (
    <>
      <div className="grid">
        {images.map((image, idx) => (
          <div key={idx}>
            <div className="grid-cell" style={{ backgroundImage: `url(${image.url})` }}>
              <div className="grid-read-more">
                <button className="grid-cell-button">View</button>
              </div>
              <div className="grid-detail">
                <span className="grid-detail-title">xXx</span>
                <div className="grid-detail-rating">
                  <Rating total={5} rating={image.rating} interactive={false} />
                  &nbsp;&nbsp;
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Grid;
