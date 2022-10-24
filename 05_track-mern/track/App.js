import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as LocationProvider } from './src/context/LocationContext';
import { Provider as TrackProvider } from './src/context/TrackContext';

import ResolveAuthPage from './src/pages/ResolveAuthPage';
import SigninPage from './src/pages/SigninPage';
import SignupPage from './src/pages/SignupPage';
import AccountPage from './src/pages/AccountPage';
import TrackCreatePage from './src/pages/TrackCreatePage';
import TrackListPage from './src/pages/TrackListPage';
import TrackDetailPage from './src/pages/TrackDetailPage';

import { setNavigator } from './src/navigationRef';

const switchNavigator = createSwitchNavigator({
  resolveAuth: ResolveAuthPage,
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
  <TrackProvider>
    <LocationProvider>
      <AuthProvider>
        {/* POINT：コンポーネントの外でnavigationを使う */}
        <App ref={(navigator) => setNavigator(navigator)} />
      </AuthProvider>
    </LocationProvider>
  </TrackProvider>
);
