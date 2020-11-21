/* eslint-disable node/no-callback-literal */
/* eslint-disable multiline-ternary */
import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import Star from './Star';
import './rating.scss';

export { Star };

export default class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: props.rating,
      lastRating: props.rating,
      isRating: false
    };
  }

  willRate(rating, e) {
    this.setState({
      rating,
      isRating: true
    });
    const { onRating: callback } = this.props;
    callback && callback({ ...e, rating });
  }

  onRate(rating, e) {
    this.setState({
      rating,
      lastRating: rating,
      isRating: false
    });
    const { onRate: callback } = this.props;
    callback && callback({ ...e, rating });
  }

  onCancelRate() {
    const { lastRating: rating } = this.state;
    this.setState({
      rating,
      isRating: false
    });
    const { onCancelRate: callback } = this.props;
    callback && callback({ rating });
  }

  UNSAFE_componentWillReceiveProps(nextProps, props) {
    const { rating } = nextProps;
    if (rating !== props.rating) {
      this.setState({
        rating,
        lastRating: rating
      });
    }
  }

  render() {
    let { total, interactive, children, ...restProps } = this.props;
    const { rating, isRating } = this.state;

    children = Children.toArray(children);

    delete restProps.rating;
    delete restProps.onRate;
    delete restProps.onRating;
    delete restProps.onCancelRate;

    const nodes = Array.apply(null, Array(total)).map((_, i) => {
      const starProps = {
        isActive: !isRating && rating - i >= 1,
        willBeActive: isRating && i < rating,
        isActiveHalf: !isRating && rating - i >= 0.5 && rating - i < 1,
        isDisabled: !interactive
      };
      return (
        <div
          key={`star-${i}`}
          onClick={interactive ? this.onRate.bind(this, i + 1) : null}
          onMouseOver={interactive ? this.willRate.bind(this, i + 1) : null}
        >
          {children.length ? (
            React.cloneElement(children[i % children.length], starProps)
          ) : (
            <Star {...starProps} />
          )}
        </div>
      );
    });
    if (interactive) {
      return (
        <div className="react-Rating" onMouseOut={this.onCancelRate.bind(this)} {...restProps}>
          {nodes}
        </div>
      );
    } else {
      return (
        <div className="react-Rating" {...restProps}>
          {nodes}
        </div>
      );
    }
  }
}

Rating.propTypes = {
  total: PropTypes.number,
  rating: PropTypes.number,
  interactive: PropTypes.bool,
  children: PropTypes.any,
  onRate: PropTypes.func,
  onRating: PropTypes.func,
  onCancelRate: PropTypes.func
};

Rating.defaultProps = {
  total: 5,
  rating: 0,
  interactive: true
};
