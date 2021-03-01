import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const InputText = ({label, inputText}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput placeholder={inputText} style={styles.inputText} />
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({
  label: {fontSize: 16, fontFamily: 'Poppins-Regular', color: '#020202'},
  inputText: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
    paddingVertical: 10,
    paddingLeft: 10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#020202',
    marginTop: 6,
  },
});
