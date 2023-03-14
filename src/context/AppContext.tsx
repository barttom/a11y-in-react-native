import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type AppContextType = {
  favouritesMeals: Array<string>;
  toggleMeal: (id?: string) => void;
  isFavourite: (id?: string) => boolean;
};
type AppContextProviderProps = {
  children: ReactNode;
};
export const AppContext = createContext<AppContextType>({
  favouritesMeals: [],
  toggleMeal: () => {},
  isFavourite: () => false,
});
const STORAGE_KEY = '@favouritesMeals';

export const AppContextProvider = ({children}: AppContextProviderProps) => {
  const [favourites, setFavourites] = useState<
    AppContextType['favouritesMeals']
  >([]);
  const dataInitialized = useRef(false);

  const toggleMeal = (id?: string) => {
    if (id) {
      setFavourites(prev => {
        if (prev.indexOf(id) > -1) {
          return prev.filter(arrId => arrId !== id);
        }

        return [...prev, id];
      });
    }
  };

  const isFavourite = (id?: string) => favourites.indexOf(id || '') > -1;

  useEffect(() => {
    if (dataInitialized.current) {
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(favourites));
    } else {
      (async () => {
        const initData = await AsyncStorage.getItem(STORAGE_KEY);

        if (initData) {
          setFavourites(JSON.parse(initData));
        }
        dataInitialized.current = true;
      })();
    }
  }, [favourites]);

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
