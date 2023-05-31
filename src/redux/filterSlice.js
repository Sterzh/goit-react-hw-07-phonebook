import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    filterStorageContacts: (state, action) => {
      return action.payload;
    },
  },
});

export const { filterStorageContacts, deleteFilterContact } =
  filterSlice.actions;

export const filterReducer = filterSlice.reducer;
