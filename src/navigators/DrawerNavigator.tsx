import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {Feather} from '@expo/vector-icons';
import {CategoriesScreen} from '../screens/CategoriesScreen';
import {FavouritesMealsScreen} from '../screens/FavouritesMealsScreen';

const DrawerStack = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <DrawerStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#351401',
        },
        headerTintColor: '#fff',
        sceneContainerStyle: {backgroundColor: '#3f2f25'},
        drawerContentStyle: {
          backgroundColor: '#351401',
        },
        drawerInactiveTintColor: '#fff',
        drawerActiveTintColor: '#8d7e75',
        drawerActiveBackgroundColor: '#3f2f25',
      }}>
      <DrawerStack.Screen
        name="All Categories"
        component={CategoriesScreen}
        options={{
          drawerIcon: ({size, color}) => (
            <Feather size={size} color={color} name="menu" />
          ),
        }}
      />
      <DrawerStack.Screen
        name="FavouritesMeals"
        component={FavouritesMealsScreen}
        options={{
          drawerIcon: ({size, color}) => (
            <Feather size={size} color={color} name="star" />
          ),
        }}
      />
    </DrawerStack.Navigator>
  );
};
