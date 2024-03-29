import { SortType } from '../const';
import { Offer } from '../types/offer/offer';

export const CurrentSortCallback = {
  [SortType.PriceHTL]: (a: Offer, b: Offer) => b.price - a.price,
  [SortType.PriceLTH]: (a: Offer, b: Offer) => a.price - b.price,
  [SortType.TopRated]: (a: Offer, b: Offer) => b.rating - a.rating,
} as const;
