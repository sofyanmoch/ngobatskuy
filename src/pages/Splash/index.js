import React, { useEffect } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILogo} from '../../assets/illust';
import { GetStartedNavigation } from '../../utils'

const Splash = ({ navigation }) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.replace(GetStartedNavigation)
    }, 3000)
  }, [navigation])

  return (
    <View style={styles.container}>
      <ILogo />
      <Text style={styles.title}>DoctorQu</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {fontWeight: '600', fontSize: 25, color: '#112340', marginTop: 5},
});
