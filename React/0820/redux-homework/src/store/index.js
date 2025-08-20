import { createSlice, configureStore } from "@reduxjs/toolkit";
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    budjet: 0,
    items: [],
  },
  reducers: {
    income: (state, action) => {
      state.budjet = action.payload;
    },
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

// 액션 생성자들을 자동으로 생성해줌
export const { addItem, income } = counterSlice.actions;

// configureStore로 스토어 생성 (Redux DevTools 자동 설정됨)
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export default store;
