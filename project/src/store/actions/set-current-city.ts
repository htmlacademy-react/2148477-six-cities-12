import { createAction } from '@reduxjs/toolkit';

export const setCurrentCity = createAction<string>('setCurrentCity');
