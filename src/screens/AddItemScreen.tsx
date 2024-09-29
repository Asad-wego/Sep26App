/*
 * Created by Asad on 28 Sep 2024
 */

import React, {useReducer} from 'react';
import {View, Alert, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {addItem} from '../redux/slices/inventorySlice';
import labels from '../constants/labels';
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';
import commonStyles from '../styles/commonStyles';
import {generateRandomId} from '../utils/GenerateRandomId.ts';
import {actions} from '../constants/actions.ts';

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FIELD':
      return {
        ...state,
        [action.field]: action.value,
        errors: {
          ...state.errors,
          [action.field]: '', // Clear error when user starts typing
        },
      };
    case 'SET_ERROR':
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.field]: action.error,
        },
      };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

const AddItemScreen = ({navigation, route}) => {
  const item = route?.params?.item;
  const type = route.params?.type;

  const initialState = {
    name: item?.name,
    quantity: item?.quantity,
    location: item?.location,
    owner: item?.owner,
    description: item?.description,
    errors: {
      name: '',
      quantity: '',
      location: '',
      owner: '',
    },
  };

  const [state, dispatchState] = useReducer(reducer, initialState);
  const dispatch = useDispatch();

  const handleInputChange = (field, value) => {
    dispatchState({type: 'SET_FIELD', field, value});
  };

  const validateFields = () => {
    let isValid = true;
    if (!state.name) {
      dispatchState({
        type: 'SET_ERROR',
        field: 'name',
        error: labels.addItemScreen.name + labels.addItemScreen.required,
      });
      isValid = false;
    }
    if (
      !state.quantity ||
      isNaN(state.quantity) ||
      parseInt(state.quantity, 10) <= 0
    ) {
      dispatchState({
        type: 'SET_ERROR',
        field: 'quantity',
        error: labels.addItemScreen.quantity + labels.addItemScreen.required,
      });
      isValid = false;
    }
    if (!state.location) {
      dispatchState({
        type: 'SET_ERROR',
        field: 'location',
        error: labels.addItemScreen.location + labels.addItemScreen.required,
      });
      isValid = false;
    }
    if (!state.owner) {
      dispatchState({
        type: 'SET_ERROR',
        field: 'owner',
        error: labels.addItemScreen.owner + labels.addItemScreen.required,
      });
      isValid = false;
    }
    return isValid;
  };

  const handleAddItem = () => {
    if (validateFields()) {
      dispatch(
        addItem({
          id: generateRandomId(),
          name: state.name,
          quantity: parseInt(state.quantity, 10),
          location: state.location,
          owner: state.owner,
          description: state.description,
        }),
      );
      Alert.alert('Item added successfully');
      navigation.goBack();
    } else {
      Alert.alert('Please correct the errors before submitting');
    }
  };

  return (
    <View style={[commonStyles.container, styles.container]}>
      <CustomTextInput
        label={labels.addItemScreen.name}
        placeholder={labels.addItemScreen.enter + labels.addItemScreen.name}
        value={state.name}
        onChangeText={text => handleInputChange('name', text)}
        errorMessage={state.errors.name}
        editable={type !== actions.VIEW ?? false}
      />
      <CustomTextInput
        label={labels.addItemScreen.quantity}
        placeholder={labels.addItemScreen.enter + labels.addItemScreen.quantity}
        value={state.quantity}
        onChangeText={text => handleInputChange('quantity', text)}
        errorMessage={state.errors.quantity}
        keyboardType={'numeric'}
        editable={type !== actions.VIEW ?? false}
      />
      <CustomTextInput
        label={labels.addItemScreen.location}
        placeholder={labels.addItemScreen.enter + labels.addItemScreen.location}
        value={state.location}
        onChangeText={text => handleInputChange('location', text)}
        errorMessage={state.errors.location}
        editable={type !== actions.VIEW ?? false}
      />
      <CustomTextInput
        label={labels.addItemScreen.owner}
        placeholder={labels.addItemScreen.enter + labels.addItemScreen.owner}
        value={state.owner}
        onChangeText={text => handleInputChange('owner', text)}
        errorMessage={state.errors.owner}
        editable={type !== actions.VIEW ?? false}
      />
      {/* Description is optional */}
      <CustomTextInput
        label={labels.addItemScreen.description}
        placeholder={
          labels.addItemScreen.enter + labels.addItemScreen.description
        }
        multiline
        numberOfLines={3}
        value={state.description}
        onChangeText={text => handleInputChange('description', text)}
        editable={type !== actions.VIEW ?? false}
      />
      {type !== actions.VIEW && (
        <CustomButton
          title={
            type === actions.ADD
              ? labels.addItemScreen.addItem
              : labels.addItemScreen.editItem
          }
          onPress={handleAddItem}
          style={commonStyles.button}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
});
export default AddItemScreen;
