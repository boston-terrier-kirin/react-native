import { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Button } from '@rneui/themed';

import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';
import { basicStyle } from './Styles';

const TrackForm = () => {
  const { state, startRecording, stopRecording, changeName } =
    useContext(LocationContext);
  const { name, recording, locations } = state;
  const { saveTrack } = useSaveTrack();

  return (
    <View>
      <Input
        style={basicStyle.mt1}
        placeholder="Enter Name"
        onChangeText={(text) => {
          changeName(text);
        }}
        value={name}
      />
      {recording ? (
        <Button title="Stop" onPress={stopRecording} />
      ) : (
        <Button title="Start Recording" onPress={startRecording} />
      )}

      {!recording && locations.length > 0 ? (
        <Button
          style={basicStyle.mt1}
          title="Save Recording"
          onPress={() => saveTrack()}
        />
      ) : null}
    </View>
  );
};

export default TrackForm;

const styles = StyleSheet.create({});
