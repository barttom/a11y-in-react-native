import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {theme} from '../../theme/theme';

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
    paddingHorizontal: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  descriptionItem: {
    paddingHorizontal: theme.spacing(1),
    color: theme.colors.primary400,
    fontSize: theme.fontSize.small,
  },
});
