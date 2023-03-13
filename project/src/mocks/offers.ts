import { Offer, GetOfferById, GetOffer } from '../types/offer/offer';

const offers: Offer[] = [
  {
    bedrooms: 1,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'Amsterdam'
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: [
      'Heating'
    ],
    host: {
      avatarUrl: 'img/apartment-01.jpg',
      id: 1,
      isPro: true,
      name: 'Angelina'
    },
    id: 1,
    images: [
      'img/apartment-01.jpg'
    ],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 1,
    previewImage: 'img/apartment-01.jpg',
    price: 110,
    rating: 1.1,
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment'
  },
  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 50.848154,
        longitude: 4.350537,
        zoom: 10
      },
      name: 'Brussels'
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Brussels.',
    goods: [
      'Kitchen'
    ],
    host: {
      avatarUrl: 'img/apartment-02.jpg',
      id: 2,
      isPro: false,
      name: 'Bngelina'
    },
    id: 2,
    images: [
      'img/apartment-02.jpg'
    ],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 50.85514938496378,
      longitude: 4.353877537499948,
      zoom: 8
    },
    maxAdults: 2,
    previewImage: 'img/apartment-02.jpg',
    price: 120,
    rating: 2.2,
    title: 'Beautiful & luxurious studio at great location',
    type: 'room'
  },
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 50.937008,
        longitude: 6.959949,
        zoom: 10
      },
      name: 'Cologne'
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Cologne.',
    goods: [
      'Cable TV'
    ],
    host: {
      avatarUrl: 'img/apartment-03.jpg',
      id: 3,
      isPro: true,
      name: 'Cngelina'
    },
    id: 3,
    images: [
      'img/apartment-03.jpg'
    ],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 50.95514938496378,
      longitude: 6.973877537499948,
      zoom: 8
    },
    maxAdults: 3,
    previewImage: 'img/apartment-03.jpg',
    price: 130,
    rating: 3.3,
    title: 'Beautiful & luxurious studio at great location',
    type: 'house'
  },
  {
    bedrooms: 4,
    city: {
      location: {
        latitude: 51.225074,
        longitude: 6.776842,
        zoom: 10
      },
      name: 'Dusseldorf'
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Dusseldorf.',
    goods: [
      'Wifi'
    ],
    host: {
      avatarUrl: 'img/apartment-01.jpg',
      id: 4,
      isPro: false,
      name: 'Dngelina'
    },
    id: 4,
    images: [
      'img/apartment-01.jpg'
    ],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 51.22514938496378,
      longitude: 6.763877537499948,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: 'img/apartment-01.jpg',
    price: 140,
    rating: 4.8,
    title: 'Beautiful & luxurious studio at great location',
    type: 'hotel'
  },
];

export const getOfferById: GetOfferById = (id) => offers.find((offer) => offer.id === id);

export const getOfferRandom: GetOffer = () => offers[Math.floor( 4 * Math.random() )];