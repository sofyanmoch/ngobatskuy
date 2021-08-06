import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Gap = ({ height }) => {
    return (
        <View style={styles.gap(height)}></View>
    )
}

export default Gap

const styles = StyleSheet.create({
    gap: (height) => ({
        height: height ? height : 12
    })
})
