// @TODO 유저의 회원정보를 바꿀 수 있도록

import { useReducer, useState } from "react";
import { createContext, useContext } from "react";
import initialValue from "../data/user-info.json";

export const useSelectedPostInfo = () => useContext(SelectedPostInfo);

const SelectedPostInfo = createContext();

const selectedPostReducder = (state, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [...state, action.payload];
    case "DELETE_POST":
      state.splice(state.indexOf(action.payload), 1);
    default:
      return state;
  }
};

const SelectedPostInfoProvider = ({ children }) => {
  const [selectedPost, selectedPostDispatch] = useReducer(
    selectedPostReducder,
    []
  );
  return (
    <SelectedPostInfo.Provider value={[selectedPost, selectedPostDispatch]}>
      {children}
    </SelectedPostInfo.Provider>
  );
};

export default SelectedPostInfoProvider;
