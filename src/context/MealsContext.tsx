import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Meal} from '../types/meal';

type MealsContextProps = {
  favouritesMeals: Array<string>;
  toggleMeal: (id?: Meal['id']) => void;
  isFavourite: (id?: Meal['id']) => boolean;
};
type MealsContextProviderProps = {
  children: ReactNode;
};
export const MealsContext = createContext<MealsContextProps>({
  favouritesMeals: [],
  toggleMeal: () => {},
  isFavourite: () => false,
});
const STORAGE_KEY = '@favouritesMeals';

export const MealsContextProvider = ({children}: MealsContextProviderProps) => {
  const [favourites, setFavourites] = useState<
    MealsContextProps['favouritesMeals']
  >([]);
  const dataInitialized = useRef(false);

  const toggleMeal = (id?: Meal['id']) => {
    if (id) {
      setFavourites(prev => {
        if (prev.indexOf(id) > -1) {
          return prev.filter(arrId => arrId !== id);
        }

        return [...prev, id];
      });
    }
  };

  const isFavourite = (id?: Meal['id']) => {
    if (id) {
      return favourites.indexOf(id) > -1;
    }

    return false;
  };

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
    <MealsContext.Provider
      value={{
        favouritesMeals: favourites,
        toggleMeal,
        isFavourite,
      }}>
      {children}
    </MealsContext.Provider>
  );
};

export const useMealsContext = () => useContext(MealsContext);
