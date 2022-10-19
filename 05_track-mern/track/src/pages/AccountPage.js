import { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from '@rneui/themed';
import { Context as AuthContext } from '../context/AuthContext';
import { basicStyle } from '../components/Styles';

const AccountPage = () => {
  const { signout } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text h3 style={basicStyle.mb2}>
        Your Account
      </Text>
      <Button title="Sign Out" onPress={() => signout()} />
    </View>

    // POINT：SafeAreaViewでタップできる領域を確保するのもあり
    // import { SafeAreaView } from 'react-navigation';
    // <SafeAreaView forceInset={{ top: 'always' }}></SafeAreaView>
  );
};

export default AccountPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 200,
    ...basicStyle.p1,
  },
});
