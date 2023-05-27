// @TODO 유저의 회원정보를 바꿀 수 있도록

import { useState } from "react";
import { createContext, useContext } from "react";
import initialValue from "../data/user-info.json";

export const useUserInfo = () => useContext(UserInfo);

const UserInfo = createContext();

const UserInfoProvider = ({ children }) => {
  const [userState, setUserState] = useState(initialValue.currUser);
  return (
    <UserInfo.Provider value={[userState, setUserState]}>
      {children}
    </UserInfo.Provider>
  );
};

export default UserInfoProvider;
