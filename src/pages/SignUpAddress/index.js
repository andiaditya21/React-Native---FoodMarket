import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, InputText, Select} from '../../components';

const SignUpAddress = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Address" subTitle="Make sure it's valid" onBack />
      <View style={styles.container}>
        <InputText label="Phone No." inputText="Type your phone number" />
        <Gap height={16} />
        <InputText label="Address" inputText="Type your address" />
        <Gap height={16} />
        <InputText label="House No." inputText="Type your house number" />
        <Gap height={16} />
        <Select />
        <Gap height={24} />
        <Button
          title="Continue"
          onPress={() => navigation.navigate('SignUpAddress')}
        />
      </View>
    </View>
  );
};

export default SignUpAddress;

const styles = StyleSheet.create({
  page: {flex: 1},
  container: {
    paddingHorizontal: 24,
    paddingVertical: 26,
    backgroundColor: 'white',
    flex: 1,
    marginTop: 24,
  },
});
