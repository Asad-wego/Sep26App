/*
 * Created by Asad on 29 Sep 2024
 */

import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {routes} from '../navigation/routes';
import CustomTextInput from '../components/CustomTextInput';
import InventoryItem from '../components/InventoryItem';
import labels from '../constants/labels';
import commonStyles from '../styles/commonStyles';
import ListEmptyComponent from '../components/ListEmptyComponent';
import {addIcon} from '../styles/icons';
import {actions} from '../constants/actions';
import {deleteItem} from '../redux/slices/inventorySlice';

const InventoryScreen = ({navigation, route}) => {
  const {userRole} = route.params;
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('');
  const inventory = useSelector((state: RootState) => state.inventory.items);
  const [filteredItems, setFilteredItems] = useState(inventory);

  const searchItems = (search: string) => {
    return inventory.filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase()),
    );
  };

  useEffect(() => {
    const debouncedSearch = () => {
      setFilteredItems(searchItems(filter));
    };

    const timeoutId = setTimeout(debouncedSearch, 400);

    return () => clearTimeout(timeoutId); // Cleanup function for the effect
  }, [filter, inventory]);

  const renderItem = ({item}) => (
    <InventoryItem
      item={item}
      userRole={userRole}
      onItemPress={() =>
        navigation.navigate(routes.ADD_ITEM, {item, type: actions.VIEW})
      }
      onEditPress={() =>
        navigation.navigate(routes.ADD_ITEM, {item, type: actions.EDIT})
      }
      onDeletePress={() => dispatch(deleteItem(item.id))}
    />
  );

  return (
    <View style={[commonStyles.container, styles.mainContainer]}>
      <CustomTextInput
        placeholder={labels.inventoryScreen.filterbyName}
        value={filter}
        onChangeText={setFilter}
      />
      <FlatList
        initialNumToRender={4}
        data={filteredItems}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        ListEmptyComponent={ListEmptyComponent}
        contentContainerStyle={styles.flatListContainer}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews={true}
      />
      {userRole === 'Manager' && (
        <TouchableOpacity
          style={styles.fabButton}
          onPress={() =>
            navigation.navigate(routes.ADD_ITEM, {type: actions.ADD})
          }>
          <Image source={addIcon} style={styles.image} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 16,
  },
  flatListContainer: {
    paddingBottom: 20,
  },
  fabButton: {
    borderRadius: 50,
    position: 'absolute',
    bottom: 24,
    right: 24,
  },
  image: {
    width: 44,
    height: 44,
  },
});

export default InventoryScreen;
