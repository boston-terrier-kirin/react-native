import { useContext } from 'react';
import { StyleSheet, View, FlatList, Pressable } from 'react-native';
import { ListItem } from '@rneui/themed';
import { NavigationEvents } from 'react-navigation';

import { Context as TrackContext } from '../context/TrackContext';

const TrackListPage = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={() => fetchTracks()} />
      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <Pressable
              onPress={() =>
                navigation.navigate('TrackDetail', { _id: item._id })
              }
            >
              <ListItem>
                <ListItem.Content>
                  <ListItem.Title>{item.name}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            </Pressable>
          );
        }}
      />
    </View>
  );
};

TrackListPage.navigationOptions = () => {
  return {
    title: 'Tracks',
  };
};

export default TrackListPage;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
