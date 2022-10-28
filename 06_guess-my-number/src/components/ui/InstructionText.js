import { StyleSheet, Text } from 'react-native';
import Colors from '../../constants/colors';

const InstructionText = ({ children, style }) => {
  // POINT：styleは配列で指定できるので、CSSっぽい上書きができる。
  return <Text style={[styles.instrunctionText, style]}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  instrunctionText: {
    color: Colors.accent500,
    fontSize: 24,
    fontFamily: 'open-sans',
  },
});
