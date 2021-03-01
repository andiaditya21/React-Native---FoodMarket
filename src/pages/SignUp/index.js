import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Button, Gap, Header, InputText} from '../../components';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Sign Up" subTitle="Register and eat" onBack />
      <View style={styles.container}>
        <View style={styles.photo}>
          <View style={styles.borderPhoto}>
            <View style={styles.containerPhoto}>
              <Text style={styles.addPhoto}>Add Photo</Text>
            </View>
          </View>
        </View>
        <InputText label="Full Name" inputText="Type your full name" />
        <Gap height={16} />
        <InputText label="Email Address" inputText="Type email your address" />
        <Gap height={16} />
        <InputText label="Password" inputText="Type your password" />
        <Gap height={24} />
        <Button
          title="Continue"
          onPress={() => navigation.navigate('SignUpAddress')}
        />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {flex: 1},
  container: {
    paddingHorizontal: 24,
    paddingVertical: 26,
    backgroundColor: 'white',
    flex: 1,
    marginTop: 24,
  },
  containerPhoto: {
    width: 90,
    height: 90,
    backgroundColor: '#f0f0f0',
    borderRadius: 90 / 2,
    padding: 24,
  },
  addPhoto: {
    color: '#8D92A3',
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    textAlign: 'center',
  },
  borderPhoto: {
    borderWidth: 1,
    borderStyle: 'dashed',
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
    borderColor: '#8D92A3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  photo: {
    alignItems: 'center',
    marginTop: 26,
    marginBottom: 16,
  },
});
