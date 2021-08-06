import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {IBackground, ILogo} from '../../assets/illust';
import {Button} from '../../components';
import {LogInNavigation, RegisterNavigation} from '../../utils';

const GetStarted = ({navigation}) => {
  return (
    <ImageBackground source={IBackground} style={styles.container}>
      <View>
        <ILogo />
        <Text style={styles.title}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <Button
          title={'Get Started'}
          type="primary"
          onPress={() => navigation.navigate(RegisterNavigation)}
        />
        <View style={{height: 16}} />
        <Button
          title={'Sign In'}
          type="secondary"
          onPress={() => navigation.navigate(LogInNavigation)}
        />
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: 'yellow',
    justifyContent: 'space-between',
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#FFFFFF',
    marginTop: 90,
    fontFamily: 'Nunito-SemiBold',
  },
});
