import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {theme} from '../../theme/theme';

export type ListProps = {
  title?: string;
  items: Array<string>;
};

export const List = ({title, items}: ListProps) => {
  return (
    <View style={styles.container}>
      {title && (
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{title}</Text>
        </View>
      )}
      {items.map(item => (
        <View key={item} style={styles.itemWrapper}>
          <Text style={styles.item}>{item}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {marginBottom: theme.spacing(2)},
  titleWrapper: {
    borderBottomColor: '#baa79c',
    borderBottomWidth: 2,
    paddingBottom: theme.spacing(0.5),
    marginBottom: theme.spacing(0.5),
  },
  title: {
    fontSize: theme.fontSize.large,
    lineHeight: 20,
    color: theme.colors.primary100,
    textAlign: 'center',
  },
  itemWrapper: {
    marginVertical: 4,
    backgroundColor: theme.colors.primary100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  item: {
    color: theme.colors.primary500,
    fontSize: theme.fontSize.small,
  },
});
