import React from 'react';
import {Pressable, PressableProps, StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {IconProps} from '@expo/vector-icons/build/createIconSet';

export type IconButtonProps = PressableProps & {
  name: IconProps<any>['name'];
  color: string;
  onPress: PressableProps['onPress'];
  size?: number;
};

export const IconButton = ({
  color,
  name,
  onPress,
  size = 20,
  ...rest
}: IconButtonProps) => {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({pressed}) => pressed && styles.pressed}
      {...rest}>
      <Ionicons color={color} name={name} size={size} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
});
