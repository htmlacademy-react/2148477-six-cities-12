import Layout from '../../components/layout/layout';
import PlaceCardListByCities from '../../components/place-card-list-by-cities/place-card-list-by-cities';

import { Offer } from '../../types/offer/offer';
import { getOffersByCities } from '../../utils/offers-by-cities';

type FavoritesProps = {
  favorites: Offer[];
}

export default function Favorites({favorites}: FavoritesProps): JSX.Element {

  return (
    <Layout isFooter isHeaderNav>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <PlaceCardListByCities favoritesByCities={getOffersByCities(favorites)} />
          </section>
        </div>
      </main>
    </Layout>
  );
}
