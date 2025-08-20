import { createStore } from "redux";

const initialState = {
  items: [],
};

//리듀서 먼저...
function Reducer(state = initialState, action) {
  //필요한 기능: 추가하기, 제거하기, 카트 초기화
  switch (action.type) {
    //추가하기
    case "ADD_ITEM":
      return { ...state, items: [...state.items, action.item] };
    //제거하기
    case "REMOVE_ITEM":
      //일치하지 state랑 action이랑 비교해서 다른걸 빼면 될듯?
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };
    case "CLEAR_CART":
      //카트초기화
      return { ...state, items: [] };
    default:
      return state;
  }
}

export const store = createStore(
  Reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
