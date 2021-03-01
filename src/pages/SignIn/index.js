import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Gap, Header, InputText} from '../../components';

const SignIn = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Sign In" subTitle="Find your best ever meal" />
      <View style={styles.container}>
        <InputText label="Email Address" inputText="Type email your address" />
        <Gap height={16} />
        <InputText label="Password" inputText="Type your password" />
        <Gap height={24} />
        <Button title="Sign In" />
        <Gap height={12} />
        <Button
          title="Create New Account"
          color="#8D92A3"
          textColor="white"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
};

export default SignIn;

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
