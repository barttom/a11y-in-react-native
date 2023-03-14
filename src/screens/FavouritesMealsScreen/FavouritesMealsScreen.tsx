import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {MealItem} from '../MealsOverviewScreen/MealItem';
import {useMealsContext} from '../../context/MealsContext';
import {MEALS} from '../../data/dummyData';

export const FavouritesMealsScreen = () => {
  const {favouritesMeals} = useMealsContext();
  const meals = MEALS.filter(({id}) => favouritesMeals.indexOf(id) > -1);

  if (!favouritesMeals.length) {
    return (
      <View style={styles.container}>
        <Text style={styles.noFound}>No favourites found ¯\_(ツ)_/¯</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={meals}
        keyExtractor={({id}) => id}
        renderItem={({item}) => <MealItem data={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  noFound: {
    color: '#fff',
  },
});
