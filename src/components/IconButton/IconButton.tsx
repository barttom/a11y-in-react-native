import React from 'react';
import {Pressable, PressableProps, StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {IconProps} from '@expo/vector-icons/build/createIconSet';

export type IconButtonProps = {
  name: IconProps<any>['name'];
  color: string;
  onPress: PressableProps['onPress'];
};

export const IconButton = ({color, name, onPress}: IconButtonProps) => {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({pressed}) => pressed && styles.pressed}>
      <Ionicons color={color} name={name} size={20} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
});
