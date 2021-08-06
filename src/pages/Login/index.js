import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILogo} from '../../assets/illust';
import { Button, Gap, Input, Link } from '../../components';

const Login = () => {
  return (
    <View style={styles.container}>
      <ILogo />
      <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
      <Input label={'Email Address'} />
      <View style={{ height: 16 }}></View>
      <Input label={'Password'} />
      <Gap />
      <Link title={'Forgot My Password'} />
      <Gap height={40} />
      <Button title={'Sign In'} />
      <Gap height={16} />
      <Link title={'Create New Account'} size={16} align={'center'} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        padding: 40,
        backgroundColor: 'white',
        flex: 1
    },
    title: {
        fontSize: 20,
        fontFamily: 'Nunito-SemiBold',
        color: '#112340',
        marginVertical: 40,
        maxWidth: 153
    }
});
