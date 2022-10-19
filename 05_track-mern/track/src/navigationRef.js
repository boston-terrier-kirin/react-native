import { NavigationActions } from 'react-navigation';

// POINT：コンポーネントの外でnavigationを使う
let navigator;

export const setNavigator = (nav) => {
  navigator = nav;
};

export const navigate = (routeName, params) => {
  navigator.dispatch(NavigationActions.navigate({ routeName, params }));
};
