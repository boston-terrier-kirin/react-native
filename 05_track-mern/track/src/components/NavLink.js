import { StyleSheet, Pressable } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Text } from '@rneui/themed';

const NavLink = ({ title, navigateTo, navigation }) => {
  return (
    <Pressable onPress={() => navigation.navigate(navigateTo)}>
      <Text style={styles.link}>{title}</Text>
    </Pressable>
  );
};

export default withNavigation(NavLink);

const styles = StyleSheet.create({
  link: {
    fontSize: 16,
    color: '#3b82f6',
    textAlign: 'center',
  },
});
