import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const Select = () => {
  return (
    <View>
      <Text style={styles.label}>Label select option</Text>
      <View style={styles.inputSelect}>
        <Picker

        //   selectedValue={selectedLanguage}
        //   onValueChange={(itemValue, itemIndex) =>
        //     setSelectedLanguage(itemValue)
        //   }
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
  label: {fontSize: 16, fontFamily: 'Poppins-Regular', color: '#020202'},
  inputSelect: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
    paddingVertical: 0,
    paddingHorizontal: 2,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#020202',
    marginTop: 6,
  },
});
