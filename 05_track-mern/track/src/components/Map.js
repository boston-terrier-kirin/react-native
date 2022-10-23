import { useContext } from 'react';
import { ActivityIndicator } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Polyline, Circle } from 'react-native-maps';

import { Context as LocationContext } from '../context/LocationContext';

const Map = () => {
  const { state } = useContext(LocationContext);
  const { currentLocation } = state;

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
      }}
      region={{
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
      }}
    >
      <Circle
        center={{
          latitude: currentLocation.coords.latitude,
          longitude: currentLocation.coords.longitude,
        }}
        radius={5}
        strokeColor="rgba(158,158,255, 1.0)"
        fillColor="rgba(158,158,255, 0.3)"
      />
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});
