import { useState, useContext } from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { Text, Input, Button } from '@rneui/themed';
import { Context as AuthContext } from '../context/AuthContext';
import { basicStyle, errorStyle } from '../components/Styles';

const SignupPage = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { state, signup } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text h3 style={basicStyle.mb2}>
        Sign Up for Tracker
      </Text>

      {state.errorMessage && (
        <Text style={errorStyle}>{state.errorMessage}</Text>
      )}

      <View style={basicStyle.mb1}>
        <Input
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>

      <View style={basicStyle.mb1}>
        <Input
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>

      <View style={basicStyle.mb2}>
        <Button title="Sign Up" onPress={() => signup({ email, password })} />
      </View>

      <Pressable onPress={() => navigation.navigate('Signin')}>
        <Text style={styles.link}>
          Already have an account? Sign in instead.
        </Text>
      </Pressable>
    </View>
  );
};

SignupPage.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default SignupPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 200,
    ...basicStyle.p1,
  },
  link: {
    fontSize: 16,
    color: '#3b82f6',
    textAlign: 'center',
  },
});
