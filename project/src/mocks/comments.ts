import { Comment } from '../types/offer/comment';

const comments: Comment[] = [
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2023-03-13T10:12:09.917Z',
    id: 1,
    rating: 1,
    user: {
      avatarUrl: 'img/1.png',
      id: 1,
      isPro: false,
      name: 'Oliver.connerA'
    }
  },
  {
    comment: 'B quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2023-03-12T10:12:09.917Z',
    id: 2,
    rating: 2,
    user: {
      avatarUrl: 'img/2.png',
      id: 2,
      isPro: false,
      name: 'Oliver.connerB'
    }
  },
  {
    comment: 'C quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2023-03-11T10:12:09.917Z',
    id: 3,
    rating: 3,
    user: {
      avatarUrl: 'img/3.png',
      id: 3,
      isPro: false,
      name: 'Oliver.connerC'
    }
  },
  {
    comment: 'D quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2023-03-10T10:12:09.917Z',
    id: 4,
    rating: 4,
    user: {
      avatarUrl: 'img/4.png',
      id: 4,
      isPro: false,
      name: 'Oliver.connerD'
    }
  },
  {
    comment: 'E quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2023-03-13T10:12:09.917Z',
    id: 5,
    rating: 5,
    user: {
      avatarUrl: 'img/5.png',
      id: 5,
      isPro: false,
      name: 'Oliver.connerE'
    }
  },
  {
    comment: 'F quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2023-03-12T10:12:09.917Z',
    id: 6,
    rating: 1,
    user: {
      avatarUrl: 'img/6.png',
      id: 6,
      isPro: false,
      name: 'Oliver.connerF'
    }
  },
  {
    comment: 'G quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2023-03-11T10:12:09.917Z',
    id: 7,
    rating: 2,
    user: {
      avatarUrl: 'img/7.png',
      id: 7,
      isPro: false,
      name: 'Oliver.connerG'
    }
  },
  {
    comment: 'H quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2023-03-10T10:12:09.917Z',
    id: 8,
    rating: 3,
    user: {
      avatarUrl: 'img/8.png',
      id: 8,
      isPro: false,
      name: 'Oliver.connerH'
    }
  },
  {
    comment: 'I quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2023-03-13T10:12:09.917Z',
    id: 9,
    rating: 4,
    user: {
      avatarUrl: 'img/9.png',
      id: 9,
      isPro: false,
      name: 'Oliver.connerI'
    }
  },
  {
    comment: 'J quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2023-03-13T10:12:09.917Z',
    id: 10,
    rating: 5,
    user: {
      avatarUrl: 'img/10.png',
      id: 10,
      isPro: false,
      name: 'Oliver.connerJ'
    }
  },
];

export const getCommentRandom = (): Comment => comments[Math.floor( 10 * Math.random() )];
