import React, {useLayoutEffect} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {getCategoryById, getMealsByCategoryId} from '../../data/dummyData';
import {MealOverviewScreenProps} from '../../navigators';
import {theme} from '../../theme/theme';
import {MealItem} from './MealItem';

export const MealsOverviewScreen = () => {
  const {params} = useRoute<MealOverviewScreenProps['route']>();
  const {setOptions} = useNavigation();
  const data = getCategoryById(params.categoryId);

  useLayoutEffect(() => {
    setOptions({title: data?.title || ''});
  }, [data, setOptions]);

  if (!data) {
    return (
      <View style={styles.container}>
        <Text>No category found ¯\_(ツ)_/¯</Text>
      </View>
    );
  }

  const meals = getMealsByCategoryId(params.categoryId);

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
    padding: theme.spacing(2),
  },
});
