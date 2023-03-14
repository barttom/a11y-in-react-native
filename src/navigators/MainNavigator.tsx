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
          backgroundColor: '#351401',
        },
        headerTintColor: '#fff',
        contentStyle: {backgroundColor: '#3f2f25'},
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
