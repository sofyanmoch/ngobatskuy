import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { GetStarted, Login, Register, Splash, UploadPhoto } from '../pages';
import { GetStartedNavigation, SplashNavigation, RegisterNavigation, LogInNavigation, UploadPhotoNavigation } from '../utils';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Router = () => {

    const MainApp = () => {
        return (
            <Tab.Navigator>
                <Tab.Screen name='' />
            </Tab.Navigator>
        )
    }

    return (
        <Stack.Navigator>
            <Stack.Screen name={SplashNavigation} component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name={GetStartedNavigation} component={GetStarted} options={{ headerShown: false }} />
            <Stack.Screen name={LogInNavigation} component={Login} options={{ headerShown: false }} />
            <Stack.Screen name={RegisterNavigation} component={Register} options={{ headerShown: false }} />
            <Stack.Screen name={UploadPhotoNavigation} component={UploadPhoto} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default Router

const styles = StyleSheet.create({})
