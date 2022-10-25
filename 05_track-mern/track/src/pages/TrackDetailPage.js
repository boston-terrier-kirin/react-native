import { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from '@rneui/themed';
import MapView, { Polyline } from 'react-native-maps';

import { Context as TrackContext } from '../context/TrackContext';
import { basicStyle } from '../components/Styles';

const TrackDetailPage = ({ navigation }) => {
  const _id = navigation.getParam('_id');
  const { state } = useContext(TrackContext);

  const track = state.find((t) => t._id === _id);

  return (
    <View style={styles.container}>
      <Text h2 style={basicStyle.mb1}>
        {track.name}
      </Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: track.locations[0].coords.latitude,
          longitude: track.locations[0].coords.longitude,
          latitudeDelta: 0.001,
          longitudeDelta: 0.001,
        }}
      >
        <Polyline coordinates={track.locations.map((loc) => loc.coords)} />
      </MapView>
    </View>
  );
};

export default TrackDetailPage;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  map: {
    height: 300,
  },
});
