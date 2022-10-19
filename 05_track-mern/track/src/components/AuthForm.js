import { useState } from 'react';
import { View } from 'react-native';
import { Text, Input, Button } from '@rneui/themed';
import { basicStyle, errorStyle } from '../components/Styles';

const AuthForm = ({ headerText, submitButtonText, onSubmit, errorMessage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Text h3 style={basicStyle.mb2}>
        {headerText}
      </Text>

      {errorMessage && <Text style={errorStyle}>{errorMessage}</Text>}

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
        <Button
          title={submitButtonText}
          onPress={() => onSubmit({ email, password })}
        />
      </View>
    </>
  );
};

export default AuthForm;
