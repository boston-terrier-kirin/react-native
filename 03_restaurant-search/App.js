import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchPage from './src/pages/SearchPage';
import ResultsShowPage from './src/pages/ResultsShowPage';

const navigator = createStackNavigator(
  {
    Search: SearchPage,
    ResultsShow: ResultsShowPage,
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Business Search',
    },
  }
);

export default createAppContainer(navigator);
