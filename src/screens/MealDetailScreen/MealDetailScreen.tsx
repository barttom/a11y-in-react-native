import React, {useLayoutEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {MealDetailScreenProps} from '../../navigators/MainNavigator';
import {getMealById} from '../../data/dummyData';
import {Description} from '../../components/Description';
import {List} from '../../components/List';
import {IconButton} from '../../components/IconButton/IconButton';
import {useMealsContext} from '../../context/MealsContext';

export const MealDetailScreen = () => {
  const {params} = useRoute<MealDetailScreenProps['route']>();
  const {setOptions} = useNavigation();
  const data = getMealById(params.mealId);
  const {favouritesMeals, toggleMeal, isFavourite} = useMealsContext();

  useLayoutEffect(() => {
    setOptions({
      title: data?.title || '',
      headerRight: () => (
        <IconButton
          name={isFavourite(data?.id) ? 'star' : 'star-outline'}
          color="#fff"
          onPress={() => {
            toggleMeal(data?.id);
          }}
        />
      ),
    });
  }, [data, setOptions, favouritesMeals]);

  if (!data) {
    return (
      <View style={styles.container}>
        <Text>No meal found ¯\_(ツ)_/¯</Text>
      </View>
    );
  }

  const {
    title,
    imageUrl,
    duration,
    affordability,
    ingredients,
    complexity,
    steps,
  } = data;
  return (
    <ScrollView>
      <Image
        source={{uri: imageUrl}}
        accessibilityIgnoresInvertColors
        style={styles.image}
      />
      <Text style={styles.title}>{title}</Text>
      <Description
        affordability={affordability}
        duration={duration}
        complexity={complexity}
      />
      <View style={styles.detailsWrapper}>
        <List items={ingredients} title="Ingredients" />
        <List items={steps} title="Steps" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 360,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginVertical: 8,
  },
  detailsWrapper: {
    width: '70%',
    marginHorizontal: '15%',
  },
});
