import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

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
  container: {marginBottom: 16},
  titleWrapper: {
    borderBottomColor: '#baa79c',
    borderBottomWidth: 2,
    paddingBottom: 4,
    marginBottom: 4,
  },
  title: {
    fontSize: 18,
    lineHeight: 20,
    color: '#baa79c',
    textAlign: 'center',
  },
  itemWrapper: {
    marginVertical: 4,
    backgroundColor: '#baa79c',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  item: {
    color: '#351401',
    fontSize: 14,
  },
});
