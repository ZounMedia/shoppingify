import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export enum NavTabs {
  shoppingList = "shopping-list",
  shoppingHistory = "shopping-history",
  shoppingStats = "shopping-stats",
}

export interface NavState {
  currentTab: NavTabs;
}

const initialState: NavState = {
  currentTab: NavTabs.shoppingList,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    handleNavTab: (state, action: PayloadAction<NavTabs>) => {
      state.currentTab = action.payload;
    },
  },
});

export const { handleNavTab } = navSlice.actions;

export default navSlice.reducer;
