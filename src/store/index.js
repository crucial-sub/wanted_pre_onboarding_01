import { configureStore, createSlice } from "@reduxjs/toolkit";

const inputInitialState = {
  ammount: "",
  currency: "USD",
  currencyArr: ["USD", "CAD", "KRW", "HKD", "JPY", "CNY"],
};
const inputSlice = createSlice({
  name: "input",
  initialState: inputInitialState,
  reducers: {
    selectInput(state, action) {
      state.ammount = action.payload;
    },
    selectCurrency(state, action) {
      state.currency = action.payload;
    },
    changeCurrencyArr(state, action) {
      state.currencyArr = action.payload;
    },
  },
});

const tabInitialState = {
  tabArr: ["USD", "CAD", "KRW", "HKD", "JPY", "CNY"],
  isActivated: false,
  activatedTab: "USD",
};
const tabSlice = createSlice({
  name: "tab",
  initialState: tabInitialState,
  reducers: {
    changeTab(state, action) {
      state.tabArr = action.payload;
    },
    onClickTab(state) {
      state.isActivated = !state.isActivated;
    },
    activatedTab(state, action) {
      state.activatedTab = action.payload;
    },
  },
});

const store = configureStore({
  reducer: { input: inputSlice.reducer, tab: tabSlice.reducer },
});

export const inputActions = inputSlice.actions;
export const tabActions = tabSlice.actions;
export default store;
