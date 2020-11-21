import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './carousel.scss';

const Carousel = (props) => {
  const { images, auto, showControls } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderTimeout, setSliderTimeout] = useState(0);
  const [state, setState] = useState({
    slideShow: images[0],
    slideIndex: 0
  });

  const { slideShow, slideIndex } = state;
  let currentSlideIndex = 0;

  const nextSlide = (type) => {
    let index = currentIndex;

    if (type === 'prev') {
      if (currentIndex <= 0) {
        index = images.length - 1;
      } else {
        index -= 1;
      }
    } else {
      if (currentIndex < images.length) {
        index += 1;
      }

      if (currentIndex === images.length - 1) {
        index = 0;
      }
    }

    setCurrentIndex(index);
    setState((prev) => ({
      ...prev,
      slideShow: images[index],
      slideIndex: index
    }));
  };

  useEffect(() => {
    if (auto) {
      const timeInterval = setInterval(() => {
        autoMoveSlide();
      }, 5000);
      setSliderTimeout(timeInterval);

      return () => {
        clearInterval(timeInterval);
        clearInterval(sliderTimeout);
      };
    }
  }, []);

  const autoMoveSlide = () => {
    let lastIndex = 0;
    lastIndex = currentSlideIndex + 1;
    currentSlideIndex = lastIndex >= images.length ? 0 : lastIndex;

    setState((prev) => ({
      ...prev,
      slideShow: images[currentSlideIndex],
      slideIndex: currentSlideIndex
    }));
  };

  const RenderSlideControls = () => {
    return (
      <div className="slider-arrows">
        <div className="slider-arrow slider-arrow--left" onClick={() => nextSlide('prev')} />
        <div className="slider-arrow slider-arrow--right" onClick={() => nextSlide('next')} />
      </div>
    );
  };

  const RenderDotControls = (props) => {
    // eslint-disable-next-line react/prop-types
    const { currentSlide } = props;
    // eslint-disable-next-line react/prop-types
    const listIndicators = images.map((slide, i) => {
      const btnClasses =
        i === currentSlide ? 'slider-navButton slider-navButton--active' : 'slider-navButton';
      return <button className={btnClasses} key={i} />;
    });
    return <div className="slider-nav">{listIndicators}</div>;
  };

  return (
    <>
      <div className="slider">
        <div className="slider-slides">
          {images && images.length > 0 && slideShow && (
            <div className="slider-image" style={{ backgroundImage: `url(${slideShow.url})` }} />
          )}
        </div>
        {showControls ? <RenderSlideControls /> : null}
        <RenderDotControls currentSlide={slideIndex} />
      </div>
    </>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  auto: PropTypes.bool,
  showControls: PropTypes.bool,
  currentSlide: PropTypes.number
};

export default Carousel;
