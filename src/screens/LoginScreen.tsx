/*
 * Created by Asad on 29 Sep 2024
 */

import React, {useState} from 'react';
import {View, Alert, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {login} from '../redux/slices/authSlice';
import labels from '../constants/labels';
import {authenticateUser} from '../network/authenticateUser';
import {routes} from '../navigation/routes';
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';
import commonStyles from '../styles/commonStyles';

interface FormState {
  username: string;
  password: string;
  isUsernameValid: boolean;
  isPasswordValid: boolean;
}

const LoginScreen: React.FC<{navigation: any}> = ({navigation}) => {
  const [formState, setFormState] = useState<FormState>({
    username: 'manager',
    password: 'password',
    isUsernameValid: true,
    isPasswordValid: true,
  });

  const dispatch = useDispatch();

  const validateFields = () => {
    const isUsernameValid = formState.username.trim().length > 0;
    const isPasswordValid = formState.password.trim().length > 0;

    setFormState(prevState => ({
      ...prevState,
      isUsernameValid,
      isPasswordValid,
    }));

    return isUsernameValid && isPasswordValid;
  };

  const handleLogin = () => {
    if (!validateFields()) return;

    const {username, password} = formState;
    const user = authenticateUser(username, password);

    if (user) {
      dispatch(login(user));
      navigation.navigate(routes.INVENTORY, {userRole: user.role});
    } else {
      Alert.alert(
        labels.loginScreen.invalidCredentialsTitle,
        labels.loginScreen.invalidCredentialsDescription,
      );
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormState(prevState => ({
      ...prevState,
      [field]: value,
      // Automatically validate as the user types
      isUsernameValid:
        field === 'username'
          ? value.trim().length > 0
          : prevState.isUsernameValid,
      isPasswordValid:
        field === 'password'
          ? value.trim().length > 0
          : prevState.isPasswordValid,
    }));
  };

  const {username, password, isUsernameValid, isPasswordValid} = formState;

  return (
    <View style={[commonStyles.container, styles.centered]}>
      <CustomTextInput
        label={labels.loginScreen.userName}
        placeholder={labels.loginScreen.userNamePlaceholder}
        value={username}
        onChangeText={text => handleInputChange('username', text)}
        errorMessage={
          isUsernameValid ? '' : labels.loginScreen.userNameRequired
        }
      />

      <CustomTextInput
        label={labels.loginScreen.password}
        placeholder={labels.loginScreen.passwordPlaceholder}
        value={password}
        onChangeText={text => handleInputChange('password', text)}
        errorMessage={
          isPasswordValid ? '' : labels.loginScreen.passwordRequired
        }
        secureTextEntry
      />

      <CustomButton
        title={labels.loginScreen.login}
        onPress={handleLogin}
        style={commonStyles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  centered: {
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});

export default LoginScreen;
