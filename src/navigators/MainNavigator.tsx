import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {NavigationProp} from '@react-navigation/native';
import {CategoriesScreen} from '../screens/CategoriesScreen';
import {MealsOverviewScreen} from '../screens/MealsOverviewScreen';
import {MealDetailScreen} from '../screens/MealDetailScreen/MealDetailScreen';

export type MainStackParams = {
  Home: undefined;
  MealOverview: {
    categoryId: 'string';
  };
  MealDetail: {
    mealId: 'string';
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
        component={CategoriesScreen}
        options={{
          title: 'All categories',
        }}
      />
      <MainStack.Screen name="MealOverview" component={MealsOverviewScreen} />
      <MainStack.Screen name="MealDetail" component={MealDetailScreen} />
    </MainStack.Navigator>
  );
};
