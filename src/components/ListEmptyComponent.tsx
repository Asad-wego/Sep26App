/*
 * Created by Asad on 29 Sep 2024
 */

import React from 'react';
import {View, StyleSheet} from 'react-native';
import {colors} from '../styles/colors';
import labels from '../constants/labels';
import CustomText from './CustomText';

const ListEmptyComponent = () => {
  return (
    <View style={styles.emptyListContainer}>
      <CustomText style={styles.emptyListText}>
        {labels.inventoryScreen.noItem}
      </CustomText>
    </View>
  );
};

const styles = StyleSheet.create({
  emptyListContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  emptyListText: {
    fontSize: 16,
    color: colors.text,
    textAlign: 'center',
  },
});

export default ListEmptyComponent;
