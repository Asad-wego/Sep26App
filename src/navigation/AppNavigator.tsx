/*
 * Created by Asad on 28 Sep 2024
 */

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen, AddItemScreen, InventoryScreen} from '../screens';
import {routes} from './routes';
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={routes.LOGIN}>
      <Stack.Screen
        name={routes.LOGIN}
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name={routes.INVENTORY} component={InventoryScreen} />
      <Stack.Screen name={routes.ADD_ITEM} component={AddItemScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
