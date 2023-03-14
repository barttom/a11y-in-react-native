import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export type DescriptionProps = {
  duration: number;
  complexity: string;
  affordability: string;
};

export const Description = ({
  complexity,
  affordability,
  duration,
}: DescriptionProps) => {
  return (
    <View style={styles.description}>
      <Text style={styles.descriptionItem}>{duration}min.</Text>
      <Text style={styles.descriptionItem}>{complexity.toUpperCase()}</Text>
      <Text style={styles.descriptionItem}>{affordability.toUpperCase()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  description: {
    paddingHorizontal: 8,
    paddingBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  descriptionItem: {
    paddingHorizontal: 8,
    color: '#baa79c',
    fontSize: 14,
  },
});
