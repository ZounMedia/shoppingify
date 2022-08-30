import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export enum NavTabs {
  shoppingList = "shopping-list",
  shoppingHistory = "shopping-history",
  shoppingStats = "shopping-stats",
}

export interface NavState {
  currentTab: NavTabs;
  drawerOpen: boolean;
}

const initialState: NavState = {
  currentTab: NavTabs.shoppingList,
  drawerOpen: false,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    handleNavTab: (state, action: PayloadAction<NavTabs>) => {
      state.currentTab = action.payload;
    },
    handleDrawerOpen: (state) => {
      state.drawerOpen = !state.drawerOpen;
    },
  },
});

export const { handleNavTab, handleDrawerOpen } = navSlice.actions;

export default navSlice.reducer;
