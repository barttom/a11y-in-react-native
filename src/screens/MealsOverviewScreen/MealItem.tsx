import React, {useCallback} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Meal} from '../../types/meal';
import {MainNavigation} from '../../navigators';
import {Description} from '../../components/Description';
import {theme} from '../../theme/theme';

export type MealItemProps = {data: Meal};

export const MealItem = ({
  data: {title, complexity, imageUrl, affordability, duration, id},
}: MealItemProps) => {
  const {navigate} = useNavigation<MainNavigation>();
  const handlePress = useCallback(() => {
    navigate('MealDetail', {mealId: id});
  }, [navigate, id]);

  return (
    <View style={styles.wrapper}>
      <Pressable
        accessibilityRole="button"
        android_ripple={{color: '#ccc'}}
        onPress={handlePress}>
        <Image
          source={{uri: imageUrl}}
          style={styles.image}
          accessibilityIgnoresInvertColors
        />
        <Text style={styles.title}>{title}</Text>
        <Description
          affordability={affordability}
          duration={duration}
          complexity={complexity}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: theme.colors.grayscale100,
    marginVertical: theme.spacing(2),
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 4,
  },
  image: {width: '100%', height: 220},
  title: {
    fontSize: theme.fontSize.large,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: theme.spacing(1),
  },
});
