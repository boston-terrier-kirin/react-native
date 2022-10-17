import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider as BlogProvider } from './src/context/BlogContext';
import IndexPage from './src/pages/IndexPage';
import ShowPage from './src/pages/ShowPage';
import CreatePage from './src/pages/CreatePage';

const navigator = createStackNavigator(
  {
    Index: IndexPage,
    Show: ShowPage,
    Create: CreatePage,
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blogs',
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};
