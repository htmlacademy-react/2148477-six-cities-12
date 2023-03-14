import { Offer } from '../../types/offer/offer';
import { Link } from 'react-router-dom';

type PlaceCardProps = {
  offer: Offer;
  onCardMouseEnter: (arg: number) => void;
  onCardMouseLeave: (arg: number) => void;
}

function Premium(): JSX.Element {
  return (
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  );
}

export default function PlaceCard({offer, onCardMouseEnter, onCardMouseLeave}: PlaceCardProps): JSX.Element {
  return (
    <article className="cities__card place-card" onMouseEnter={() => onCardMouseEnter(offer.id)} onMouseLeave={() => onCardMouseLeave(offer.id)}>
      {offer.isPremium && <Premium />}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${offer.id}`}>
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${Math.round(offer.rating) * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{offer.title}</a>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}
