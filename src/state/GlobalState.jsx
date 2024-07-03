// GlobalState.js
import { createContext, useReducer, useContext } from "react";

// 1. Buat konteks
const GlobalStateContext = createContext();
const GlobalDispatchContext = createContext();

// 2. Reducer untuk mengelola state
const initialState = {
  count: 0,
  itemList: [],
};

const globalReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };
    case "ADD_ITEM": // Tambahkan case untuk ADD_ITEM
      return {
        ...state,
        itemList: [...state.itemList, action.payload],
      };
    default:
      return state;
  }
};

// 3. Penyedia konteks
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};

// 4. Custom hooks untuk menggunakan state dan dispatch
export const useGlobalState = () => useContext(GlobalStateContext);
export const useGlobalDispatch = () => useContext(GlobalDispatchContext);
