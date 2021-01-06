import { AsyncStorage } from 'react-native';
import CreateDataContext from './CreateDataContext';
import userApi from '../api/userApi';


const authReducer = (state, action) => {
  switch (action.type) {
    case 'signin':
      return { token: action.payload, errorMessage: '' };
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'clear_error_message':
      return { ...state, errorMessage: '' };
    case 'logout':
      return { token: null, errorMessage: '' };
    default:
      return state;
  }
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: 'clear_error_message' });
};

const signup = (dispatch) => async ({ username, password, firstName, lastName }, navigateCallback) => {
  try {
    const response = await userApi.post('/signup', { username, password, firstName, lastName });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'signin', payload: response.data.token });

    navigateCallback();
  } catch (err) {
    dispatch({ type: 'add_error', payload: 'Something went wrong with signing up!' });
  };
};

const signin = (dispatch) => async ({ username, password }, navigateCallback) => {
  try {
    const response = await userApi.post('/signin', { username, password });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'signin', payload: response.data.token });

    navigateCallback();
  } catch (err) {
    dispatch({ type: 'add_error', payload: 'Something went wrong with signing in!'});
  };
};

const tryLocalSignIn = (dispatch) => async (navigateCallback) => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    dispatch({ type: 'signin', payload: token });
    navigateCallback();
  }
};

const logout = (dispatch) => async (navigateCallback) => {
  await AsyncStorage.removeItem('token');
  dispatch({ type: 'logout' });

  navigateCallback();
}

export const { Context, Provider } = CreateDataContext(
  authReducer,
  { signup, signin, clearErrorMessage, tryLocalSignIn, logout },
  { token: null, errorMessage: '' }
);