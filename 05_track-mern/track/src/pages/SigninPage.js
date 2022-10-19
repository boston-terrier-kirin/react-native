import { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { basicStyle } from '../components/Styles';

const SigninPage = () => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        headerText="Sign In to your account"
        submitButtonText="Sign In"
        onSubmit={({ email, password }) => signin({ email, password })}
        errorMessage={state.errorMessage}
      />

      <NavLink
        title="Dont have an account? Sign up instead."
        navigateTo="Signup"
      />
    </View>
  );
};

SigninPage.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default SigninPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 200,
    ...basicStyle.p1,
  },
});
