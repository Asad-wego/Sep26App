/*
 * Created by Asad on 28 Sep 2024
 */

import React from 'react';
import {Text, TextStyle} from 'react-native';

interface CustomTextProps {
  children: React.ReactNode;
  style?: TextStyle;
  weight?: 'normal' | 'bold';
  color?: string;
  size?: number;
}

const CustomText: React.FC<CustomTextProps> = ({
  children,
  style,
  weight,
  color,
  size,
}) => {
  //TODO: will customize later
  // const baseStyles: TextStyle = {
  //   fontSize: size ?? 14,
  //   color: color ?? 'black',
  // };
  // const combinedStyles = [baseStyles, style];

  return <Text style={{...style}}>{children}</Text>;
};

export default CustomText;
