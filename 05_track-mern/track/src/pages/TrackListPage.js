import { StyleSheet, Text, View, Button } from 'react-native';

const TrackListPage = ({ navigation }) => {
  return (
    <View>
      <Text>TrackListPage</Text>
      <Button
        title="Go to track detail"
        onPress={() => navigation.navigate('TrackDetail')}
      />
    </View>
  );
};

export default TrackListPage;

const styles = StyleSheet.create({});
