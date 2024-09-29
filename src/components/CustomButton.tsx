/*
 * Created by Asad on 28 Sep 2024
 */

import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {colors} from '../styles/colors';

interface ButtonProps {
  onPress: () => void;
  title: string;
  style?: any;
  textStyle?: any;
}

const CustomButton: React.FC<ButtonProps> = ({
  onPress,
  title,
  style,
  textStyle,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 5,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.pureWhite,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomButton;
