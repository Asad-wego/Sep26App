/*
 * Created by Asad on 29 Sep 2024
 */

import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
  Image,
} from 'react-native';
import {colors} from '../styles/colors'; // Import colors if needed
import labels from '../constants/labels';
import CustomText from './CustomText';
import {deleteIcon, editIcon} from '../styles/icons';

interface InventoryItemProps {
  item: Item;
  onItemPress: (event: GestureResponderEvent) => void;
  userRole: string;
  onEditPress?: (event: GestureResponderEvent) => void;
  onDeletePress?: (event: GestureResponderEvent) => void;
}

const InventoryItem: React.FC<InventoryItemProps> = ({
  item,
  userRole,
  onItemPress,
  onEditPress,
  onDeletePress,
}) => {
  return (
    <TouchableOpacity onPress={onItemPress} style={styles.itemContainer}>
      <View style={styles.rowUpNameEdit}>
        <CustomText style={styles.itemLabel}>{item.name}</CustomText>
        {userRole === 'Manager' && onEditPress && (
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={onEditPress}>
              <Image source={editIcon} style={styles.image} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onDeletePress} style={{marginLeft: 8}}>
              <Image source={deleteIcon} style={styles.image} />
            </TouchableOpacity>
          </View>
        )}
      </View>
      <CustomText style={styles.itemDetail}>
        {labels.inventoryScreen.quantity}
        {item.quantity}
      </CustomText>
      <CustomText style={styles.itemDetail}>
        {labels.inventoryScreen.location}
        {item.location}
      </CustomText>
      <CustomText style={styles.itemDetail}>
        {labels.inventoryScreen.owner}
        {item.owner}
      </CustomText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: colors.pureWhite || '#fff', // Use color constant or default
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  itemLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text || '#333', // Use color constant or default
    marginBottom: 5,
  },
  itemDetail: {
    fontSize: 14,
    color: colors.secondary || '#606060', // Use color constant or default
    marginBottom: 5,
  },
  editButton: {
    marginTop: 10, // Optional styling for the edit button
  },
  rowUpNameEdit: {justifyContent: 'space-between', flexDirection: 'row'},
  image: {
    width: 24,
    height: 24,
  },
});

export default React.memo(InventoryItem);
