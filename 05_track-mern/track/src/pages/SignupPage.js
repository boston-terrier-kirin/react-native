import { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { basicStyle } from '../components/Styles';

const SignupPage = () => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        headerText="Sign Up for Tracker"
        submitButtonText="Sign Up"
        onSubmit={({ email, password }) => signup({ email, password })}
        errorMessage={state.errorMessage}
      />

      <NavLink
        title="Already have an account? Sign in instead."
        navigateTo="Signin"
      />
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
});
