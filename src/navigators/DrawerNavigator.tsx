import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {Feather} from '@expo/vector-icons';
import {CategoriesScreen} from '../screens/CategoriesScreen';
import {FavouritesMealsScreen} from '../screens/FavouritesMealsScreen';
import {theme} from '../theme/theme';

const DrawerStack = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <DrawerStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.primary500,
        },
        headerTintColor: theme.colors.grayscale100,
        sceneContainerStyle: {backgroundColor: theme.colors.primary400},
        drawerContentStyle: {
          backgroundColor: theme.colors.primary500,
        },
        drawerInactiveTintColor: theme.colors.grayscale100,
        drawerActiveTintColor: theme.colors.primary200,
        drawerActiveBackgroundColor: theme.colors.primary400,
      }}>
      <DrawerStack.Screen
        name="All Categories"
        component={CategoriesScreen}
        options={({navigation}) => ({
          headerLeft: ({tintColor}) => (
            <Feather
              size={34}
              color={tintColor}
              name="menu"
              accessibilityLabel="Menu"
              accessibilityHint="Press for display menu"
              style={{marginLeft: theme.spacing(2)}}
              onPress={navigation.toggleDrawer}
            />
          ),
          drawerIcon: ({color}) => (
            <Feather
              size={34}
              color={color}
              name="menu"
              accessibilityLabel="Menu button"
              accessibilityHint="Press for display menu"
            />
          ),
        })}
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
