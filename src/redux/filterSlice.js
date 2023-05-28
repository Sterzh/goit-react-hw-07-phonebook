import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = [];

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    filterStorageContacts: (state, action) => {
      return action.payload;
    },
    deleteFilterContact: (state, action) => {
      const index = state.findIndex(e => e.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { filterStorageContacts, deleteFilterContact } =
  filterSlice.actions;

export const filterReducer = filterSlice.reducer;
