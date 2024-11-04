import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [favoriteCartItems, setFavoriteCartItems] = useState([]);

  return (
    <GlobalContext.Provider
      value={{
        favoriteCartItems: favoriteCartItems,
        setFavoriteCartItems,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
