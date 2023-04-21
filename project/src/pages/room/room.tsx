import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/store-hooks/use -app-dispatch';

import Gallery from '../../components/gallery/gallery';
import Layout from '../../components/layout/layout';
import RoomInfo from '../../components/room-info/room-info';
import NearPlaces from '../../components/near-places/near-places';
import CityMap from '../../components/city-map/city-map';
import LoadingSpinner from '../../components/loading-spinner/loading-spinner';

import { useAppSelector } from '../../hooks/store-hooks/use-app-selector';
import { fetchNearby, fetchOffer } from '../../store/room/api-actions';
import { getNearbyOffers, getOffer, isOfferLoading } from '../../store/room/selectors';
import { fetchComments } from '../../store/comments/api-actions';

export default function Room(): JSX.Element {
  const {id} = useParams();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(isOfferLoading);
  const currentOffer = useAppSelector(getOffer);
  const nearbyOffers = useAppSelector(getNearbyOffers);
  useEffect(() => {
    dispatch(fetchOffer(id));
    dispatch(fetchComments(id));
    dispatch(fetchNearby(id));
  }, [dispatch, id]);

  if (isLoading || !currentOffer) {
    return <LoadingSpinner spinnerType='page' />;
  }

  return (
    <Layout isHeaderNav>
      <main className="page__main page__main--property">
        <section className="property">
          <Gallery offer={currentOffer} />
          <RoomInfo offer={currentOffer} />
          <CityMap mapClasses={['property__map']} offers={[currentOffer, ...nearbyOffers]} hoveredOfferId={currentOffer.id} />
        </section>
        <div className="container">
          <NearPlaces offers={nearbyOffers} />
        </div>
      </main>
    </Layout>
  );
}
