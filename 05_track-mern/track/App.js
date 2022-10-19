import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { Provider as AuthProvider } from './src/context/AuthContext';
import SigninPage from './src/pages/SigninPage';
import SignupPage from './src/pages/SignupPage';
import AccountPage from './src/pages/AccountPage';
import TrackCreatePage from './src/pages/TrackCreatePage';
import TrackListPage from './src/pages/TrackListPage';
import TrackDetailPage from './src/pages/TrackDetailPage';

import { setNavigator } from './src/navigationRef';

const switchNavigator = createSwitchNavigator({
  authFlow: createStackNavigator({
    Signup: SignupPage,
    Signin: SigninPage,
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList: TrackListPage,
      TrackDetail: TrackDetailPage,
    }),
    TrackCreate: TrackCreatePage,
    Account: AccountPage,
  }),
});

const App = createAppContainer(switchNavigator);

export default () => (
  <AuthProvider>
    {/* POINT：コンポーネントの外でnavigationを使う */}
    <App ref={(navigator) => setNavigator(navigator)} />
  </AuthProvider>
);
