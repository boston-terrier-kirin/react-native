import { useContext, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';
import { Text } from '@rneui/themed';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';
import { basicStyle } from '../components/Styles';

import { Context as LocationContext } from '../context/LocationContext';
import Map from '../components/Map';

import '../_mockLocation';

const TrackCreatePage = ({ isFocused }) => {
  const { state, addLocation } = useContext(LocationContext);

  const fn = useCallback(
    (location) => {
      addLocation(location, state.recording);
    },
    [state.recording]
  );

  const { err } = useLocation(isFocused || state.recording, fn);

  return (
    <SafeAreaView style={styles.container} forceInset={{ top: 'always' }}>
      <Text h2 style={basicStyle.mb1}>
        Create a Track
      </Text>
      <Map />
      {err && <Text>Please enable location service</Text>}
      <TrackForm />
    </SafeAreaView>
  );
};

TrackCreatePage.navigationOptions = () => {
  return {
    title: 'Add Track',
    tabBarIcon: <FontAwesome name="plus" size={20} />,
  };
};

export default withNavigationFocus(TrackCreatePage);

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
