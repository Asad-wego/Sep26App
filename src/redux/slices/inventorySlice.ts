/*
 * Created by Asad on 28 Sep 2024
 */

import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {inventoryItems} from '../../data/mockData';

interface InventoryState {
  items: Item[];
}

const initialState: InventoryState = {
  items: inventoryItems,
};

export const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<Item[]>) => {
      state.items = action.payload;
    },
    addItem: (state, action: PayloadAction<Item>) => {
      state.items.push(action.payload);
    },
    updateItem: (state, action: PayloadAction<Item>) => {
      const index = state.items.findIndex(
        item => item.id === action.payload.id,
      );
      if (index !== -1) state.items[index] = action.payload;
    },
    deleteItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const {setItems, addItem, updateItem, deleteItem} =
  inventorySlice.actions;
export default inventorySlice.reducer;
