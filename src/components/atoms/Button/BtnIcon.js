import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const BtnIcon = ({ icon, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            {icon}
        </TouchableOpacity>
    )
}

export default BtnIcon

const styles = StyleSheet.create({})
