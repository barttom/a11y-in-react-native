import React, {useCallback} from 'react';
import {Pressable, Text, View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Category} from '../../types/category';
import {MainNavigation} from '../../navigators';

export type CategoryItemProps = {
  data: Category;
};

export const CategoryItem = ({data: {title, color, id}}: CategoryItemProps) => {
  const {navigate} = useNavigation<MainNavigation>();
  const handlePress = useCallback(() => {
    navigate('MealOverview', {categoryId: id});
  }, [navigate, id]);

  return (
    <View style={[styles.outerContainer, {backgroundColor: color}]}>
      <Pressable
        style={styles.button}
        android_ripple={{color: '#ccc'}}
        accessibilityRole="button"
        onPress={handlePress}>
        <View style={styles.innerContainer}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    margin: 8,
    height: 120,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: 'hidden',
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    flex: 1,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});
