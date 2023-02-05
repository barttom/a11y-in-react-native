import React, {createContext, ReactNode, useContext, useState} from 'react';

type AppContextType = {
  favouritesMeals: Array<string>;
  toggleMeal: (id: string) => void;
  isFavourite: (id: string) => boolean;
};
type AppContextProviderProps = {
  children: ReactNode;
};
export const AppContext = createContext<AppContextType>({
  favouritesMeals: [],
  toggleMeal: () => {},
  isFavourite: () => false,
});
export const AppContextProvider = ({children}: AppContextProviderProps) => {
  const [favourites, setFavourites] = useState<
    AppContextType['favouritesMeals']
  >([]);

  const toggleMeal = (id: string) => {
    setFavourites(prev => {
      if (prev.indexOf(id) > -1) {
        return prev.filter(arrId => arrId !== id);
      }

      return [...prev, id];
    });
  };

  const isFavourite = (id: string) => favourites.indexOf(id) > -1;

  return (
    <AppContext.Provider
      value={{
        favouritesMeals: favourites,
        toggleMeal,
        isFavourite,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
