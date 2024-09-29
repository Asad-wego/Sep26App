/*
 * Created by Asad on 29 Sep 2024
 */

import React from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  TextInputProps,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {colors} from '../styles/colors';

interface CustomTextInputProps extends TextInputProps {
  label?: string;
  errorMessage?: string;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  labelStyle?: TextStyle;
  errorStyle?: TextStyle;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  label,
  errorMessage,
  containerStyle,
  inputStyle,
  labelStyle,
  errorStyle,
  ...props
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
      <TextInput
        style={[styles.input, inputStyle]}
        placeholderTextColor={colors.placeholder}
        {...props}
      />
      {errorMessage && (
        <Text style={[styles.error, errorStyle]}>{errorMessage}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: colors.text,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 12,
    fontSize: 16,
    backgroundColor: colors.pureWhite,
    color: colors.text,
  },
  error: {
    fontSize: 12,
    color: colors.error,
    marginTop: 5,
  },
});

export default CustomTextInput;
