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
    case 'SIGNUP':
      return {
        ...state,
        token: action.payload,
        errorMessage: '',
      };
    case 'ADD_ERROR':
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const res = await trackerApi.post('/signup', { email, password });
      await AsyncStorage.setItem('token', res.data.token);

      dispatch({
        type: 'SIGNUP',
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
  return ({ email, password }) => {};
};

const signout = (dispatch) => {
  return () => {};
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { signup, signin, signout },
  initialState
);
