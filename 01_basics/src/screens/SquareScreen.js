import { useReducer } from 'react';
import { StyleSheet, View } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const reducer = (state, action) => {
  switch (action.type) {
    case 'r':
      if (state.r + action.payload > 255 || state.r + action.payload < 0) {
        return state;
      }
      return {
        ...state,
        r: state.r + action.payload,
      };
    case 'g':
      if (state.g + action.payload > 255 || state.g + action.payload < 0) {
        return state;
      }
      return {
        ...state,
        g: state.g + action.payload,
      };
    case 'b':
      if (state.b + action.payload > 255 || state.b + action.payload < 0) {
        return state;
      }
      return {
        ...state,
        b: state.b + action.payload,
      };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { r: 0, g: 0, b: 0 });

  console.log(state);

  const onIncrease = (type) => {
    dispatch({ type, payload: 15 });
  };

  const onDecrease = (type) => {
    dispatch({ type, payload: -15 });
  };

  return (
    <View style={styles.container}>
      <ColorCounter
        name="Red"
        onIncrease={() => onIncrease('r')}
        onDecrease={() => onDecrease('r')}
        style={{ borderColor: '#f87171', backgroundColor: '#fecaca' }}
      />
      <ColorCounter
        name="Green"
        onIncrease={() => onIncrease('g')}
        onDecrease={() => onDecrease('g')}
        style={{ borderColor: '#4ade80', backgroundColor: '#bbf7d0' }}
      />
      <ColorCounter
        name="Blue"
        onIncrease={() => onIncrease('b')}
        onDecrease={() => onDecrease('b')}
        style={{ borderColor: '#60a5fa', backgroundColor: '#bfdbfe' }}
      />
      <View
        style={{
          ...styles.colorBall,
          backgroundColor: `rgb(${state.r}, ${state.g}, ${state.b})`,
        }}
      ></View>
    </View>
  );
};

export default SquareScreen;

const styles = StyleSheet.create({
  container: { padding: 16, alignItems: 'center' },
  colorBall: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
});
