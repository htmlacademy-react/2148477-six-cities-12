import { createSlice } from '@reduxjs/toolkit';

import { NameSpace, FetchStatus } from '../../const';
import { fetchFavorites, toggleFavoriteStatus } from './api-actions';
import { Offer } from '../../types/offer/offer';

type InitialState = {
  favoritesLoadingStatus: FetchStatus;
  favoritesPostingStatus: FetchStatus;
  favoriteOffers: Offer[];
}

const initialState: InitialState = {
  favoritesLoadingStatus: FetchStatus.Idle,
  favoritesPostingStatus: FetchStatus.Idle,
  favoriteOffers: [],
};

export const favotitesSlice = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
        state.favoritesLoadingStatus = FetchStatus.Success;
      })
      .addCase(fetchFavorites.pending, (state) => {
        state.favoritesLoadingStatus = FetchStatus.Pending;
      })
      .addCase(fetchFavorites.rejected, (state) => {
        state.favoritesLoadingStatus = FetchStatus.Failed;
      })
      .addCase(toggleFavoriteStatus.fulfilled, (state, action) => {
        if (action.payload.isFavorite) {
          state.favoriteOffers.push(action.payload);
        } else {
          state.favoriteOffers = state.favoriteOffers.filter((offer) => offer.id !== action.payload.id);
        }
        state.favoritesPostingStatus = FetchStatus.Success;
      })
      .addCase(toggleFavoriteStatus.pending, (state) => {
        state.favoritesPostingStatus = FetchStatus.Pending;
      })
      .addCase(toggleFavoriteStatus.rejected, (state) => {
        state.favoritesPostingStatus = FetchStatus.Failed;
      });
  }
});
