import { StyleSheet } from 'react-native';

export const basicStyle = StyleSheet.create({
  // margin-bottom
  mb1: {
    marginBottom: 16,
  },
  mb2: {
    marginBottom: 24,
  },

  // margin-top
  mt1: {
    marginTop: 16,
  },
  mt2: {
    marginTop: 24,
  },

  // padding
  p1: {
    padding: 16,
  },
  psm: {
    padding: 8,
  },
});

export const errorStyle = {
  ...basicStyle.mb1,
  ...basicStyle.psm,
  fontSize: 16,
  borderColor: '#fca5a5',
  backgroundColor: '#fecaca',
};
