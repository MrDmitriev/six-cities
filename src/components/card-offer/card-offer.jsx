import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {cardTypes} from '../../constants/constants.js';

export class CardOffer extends React.PureComponent {
  render() {
    const {offer, mouseEnterHandler, cardType} = this.props;
    const {title, price, type, images, rating} = offer;
    const ratingPercent = (rating / 5) * 100;

    const handleMouseEnter = (e) => {
      mouseEnterHandler(e.currentTarget.id);
    };

    return (
      <article className={`${cardType}__${cardType === cardTypes.CITIES ? `place-` : ``}card place-card`}>
        <div className={`${cardType}__image-wrapper place-card__image-wrapper`}>
          <img
            className="place-card__image"
            src={images[0]}
            width="260"
            height="200"
            alt="Place image"
            id={offer.id}
            onMouseEnter={handleMouseEnter}
          />
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">In bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: `${ratingPercent}%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <Link to={{pathname: `/offer/${offer.id}`}}>{title}</Link>
          </h2>
          <p className="place-card__type">{type}</p>
        </div>
      </article>
    );
  }
}

CardOffer.propTypes = {
  offerName: PropTypes.string,
  cardType: PropTypes.string,
  mouseEnterHandler: PropTypes.func,
  offer: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    type: PropTypes.string,
    images: PropTypes.array,
    id: PropTypes.number,
    rating: PropTypes.number,
  }),
};
