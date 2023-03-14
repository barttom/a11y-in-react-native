import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {NavigationProp} from '@react-navigation/native';
import {MealsOverviewScreen} from '../screens/MealsOverviewScreen';
import {MealDetailScreen} from '../screens/MealDetailScreen';
import {Category} from '../types/category';
import {Meal} from '../types/meal';
import {theme} from '../theme/theme';
import {DrawerNavigator} from './DrawerNavigator';

export type MainStackParams = {
  Home: undefined;
  MealOverview: {
    categoryId: Category['id'];
  };
  MealDetail: {
    mealId: Meal['id'];
  };
};
export type MainNavigation = NavigationProp<MainStackParams>;
export type MealOverviewScreenProps = NativeStackScreenProps<
  MainStackParams,
  'MealOverview'
>;
export type MealDetailScreenProps = NativeStackScreenProps<
  MainStackParams,
  'MealDetail'
>;
const MainStack = createNativeStackNavigator<MainStackParams>();

export const MainNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.primary500,
        },
        headerTintColor: theme.colors.grayscale100,
        contentStyle: {backgroundColor: theme.colors.primary400},
      }}>
      <MainStack.Screen
        name="Home"
        component={DrawerNavigator}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen name="MealOverview" component={MealsOverviewScreen} />
      <MainStack.Screen name="MealDetail" component={MealDetailScreen} />
    </MainStack.Navigator>
  );
};
