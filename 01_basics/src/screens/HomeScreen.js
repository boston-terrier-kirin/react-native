import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <Button
        title="Go to Components Demo"
        onPress={() => navigation.navigate('Components')}
      />
      <Button
        title="Go to List Demo"
        onPress={() => navigation.navigate('List')}
      />
      <Button
        title="Go to Image Demo"
        onPress={() => navigation.navigate('Image')}
      />
      <Button
        title="Go to Couter Demo"
        onPress={() => navigation.navigate('Counter')}
      />
      <Button
        title="Go to Color Demo"
        onPress={() => navigation.navigate('Color')}
      />
      <Button
        title="Go to Square Demo"
        onPress={() => navigation.navigate('Square')}
      />
      <Button
        title="Go to Text Demo"
        onPress={() => navigation.navigate('Text')}
      />
      <Button
        title="Go to Flex Demo"
        onPress={() => navigation.navigate('Flex')}
      />
      <Button
        title="Go to FlexItem Demo"
        onPress={() => navigation.navigate('FlexItem')}
      />
      <Button
        title="Go to Position Demo"
        onPress={() => navigation.navigate('Position')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
