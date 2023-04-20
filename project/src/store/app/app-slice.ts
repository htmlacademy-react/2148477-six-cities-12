import {PayloadAction, createSlice} from '@reduxjs/toolkit';

import {NameSpace, SortType, Cities, FetchStatus} from '../../const';
import { Offer } from '../../types/offer/offer';

type InitialState = {
  currentCity: Cities;
  currentSort: SortType;
  isOffersLoading: FetchStatus;
  offers: Offer[] | [];
}

const initialState: InitialState = {
  currentCity: Cities.Paris,
  currentSort: SortType.Popular,
  isOffersLoading: FetchStatus.Idle,
  offers: [],
};

export const appSlice = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    changeCurrentCity: (state, action: PayloadAction<Cities>) => {
      state.currentCity = action.payload;
    },
    changeCurrentSort: (state, action: PayloadAction<SortType>) => {
      state.currentSort = action.payload;
    },
  },
});

export const {changeCurrentCity, changeCurrentSort} = appSlice.actions;
