import { AsyncStorage } from 'react-native';
import CreateDataContext from './CreateDataContext';
import userApi from '../api/userApi';


const authReducer = (state, action) => {
  switch (action.type) {
    case 'signin':
      return { token: action.payload, errorMessage: '' };
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

const signup = (dispatch) => async ({ username, password, firstName, lastName }) => {
  try {
    const response = await userApi.post('/signup', { username, password, firstName, lastName });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'signin', payload: response.data.token });
  } catch (err) {
    dispatch({ type: 'add_error', payload: 'Something went wrong!' });
  };
};

export const { Context, Provider } = CreateDataContext(
  authReducer,
  { },
  { token: null, errorMessage: '' }
);