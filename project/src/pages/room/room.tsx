import Gallery from '../../components/gallery/gallery';
import Layout from '../../components/layout/layout';
import PlaceCardList from '../../components/place-card-list/place-card-list';
import RoomInfo from '../../components/room-info/room-info';

import { Offer } from '../../types/offer/offer';

type RoomProps = {
  offers: Offer[];
}

export default function Room({offers}: RoomProps): JSX.Element {
  return (
    <Layout isHeaderNav>
      <main className="page__main page__main--property">
        <section className="property">
          <Gallery />
          <RoomInfo />
          <section className="property__map map"></section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <PlaceCardList
              offers={[...offers].slice(-3)}
              placeCardType={'nearby'}
              placeCardContainerClasses={[
                'near-places__list',
                'places__list',
              ]}
            />
          </section>
        </div>
      </main>
    </Layout>
  );
}
