import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const initialState = {
  token: null,
  errorMessage: '',
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'SIGNIN':
      return {
        ...state,
        token: action.payload,
        errorMessage: '',
      };
    case 'SIGNOUT':
      return {
        ...state,
        token: null,
        errorMessage: '',
      };
    case 'ADD_ERROR':
      return {
        ...state,
        errorMessage: action.payload,
      };
    case 'CLEAR_ERROR_MESSAGE':
      return {
        ...state,
        errorMessage: '',
      };
    default:
      return state;
  }
};

const tryLocalSignin = (dispatch) => {
  return async () => {
    const token = await AsyncStorage.getItem('token');

    if (token) {
      dispatch({ type: 'SIGNIN', payload: token });

      // POINT：コンポーネントの外でnavigationを使う
      navigate('TrackList');
    } else {
      navigate('Signup');
    }
  };
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const res = await trackerApi.post('/signup', { email, password });
      await AsyncStorage.setItem('token', res.data.token);

      dispatch({
        type: 'SIGNIN',
        payload: res.data.token,
      });

      // POINT：コンポーネントの外でnavigationを使う
      navigate('TrackList');
    } catch (err) {
      dispatch({
        type: 'ADD_ERROR',
        payload: 'Something went wrong with sign up',
      });
    }
  };
};

const signin = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const res = await trackerApi.post('/signin', { email, password });
      await AsyncStorage.setItem('token', res.data.token);

      dispatch({
        type: 'SIGNIN',
        payload: res.data.token,
      });

      // POINT：コンポーネントの外でnavigationを使う
      navigate('TrackList');
    } catch (err) {
      dispatch({
        type: 'ADD_ERROR',
        payload: 'Something went wrong with sign in',
      });
    }
  };
};

const clearErrorMessage = (dispatch) => {
  return () => {
    dispatch({ type: 'CLEAR_ERROR_MESSAGE' });
  };
};

const signout = (dispatch) => {
  return async () => {
    await AsyncStorage.removeItem('token');

    dispatch({ type: 'SIGNOUT' });

    navigate('Signin');
  };
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { tryLocalSignin, signup, signin, signout, clearErrorMessage },
  initialState
);
