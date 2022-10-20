import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Text, Input, Button } from '@rneui/themed';
import Map from '../components/Map';

const TrackCreatePage = () => {
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h2>Create a Track</Text>
      <Map />
    </SafeAreaView>
  );
};

export default TrackCreatePage;

const styles = StyleSheet.create({});
