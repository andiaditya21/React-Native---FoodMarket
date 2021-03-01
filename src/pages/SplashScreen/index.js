import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Logo} from '../../assets';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignIn');
    }, 3000);
  });
  return (
    <View style={styles.page}>
      <Logo />
      <View style={{height: 37}} />
      <Text style={styles.text}>Foodmarket</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'yellow',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {fontSize: 32, fontFamily: 'Poppins-Medium', color: '#020202'},
});
export default SplashScreen;
