import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IconBack } from '../../../assets'
import { BtnIcon, Button } from '../../atoms'

const Header = ({ onPress, title }) => {
    return (
        <View style={styles.container}>
            <BtnIcon icon={<IconBack />} onPress={onPress} />
            <Text style={styles.text}>{title || 'gaada titlenya bro' }</Text>
            <View style={{ width:30 }}></View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 30,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        textAlign: 'center',
        flex: 1,
        color: '#112340',
        fontFamily: 'Nunito-SemiBold'
    }
})
