import React from 'react';
import {FlatList} from 'react-native';
import {CATEGORIES} from '../../data/dummyData';
import {CategoryItem} from './CategoryItem';

export const CategoriesScreen = () => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={({id}) => id}
      renderItem={({item}) => <CategoryItem data={item} />}
      numColumns={2}
    />
  );
};
