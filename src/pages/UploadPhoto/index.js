import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { DefaulPP, IconPlus } from '../../assets'
import { Button, Gap, Header, Link } from '../../components'
import { colors, RegisterNavigation } from '../../utils'

const UploadPhoto = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header title={'Upload Photo'} onPress={() => navigation.goBack()} />
            <View style={{ alignItems: 'center', marginVertical: 100 }}>
            <View style={styles.avatarWrapper}>
                <Image source={DefaulPP} style={styles.avatar} />
                <IconPlus style={styles.addPhoto} />
            </View>
            <Gap height={20} />
            <View>
                <Text style={styles.name}>Mochamad Sofyan</Text>
                <Text style={styles.proffesion}>Software Engineer</Text>
            </View>
            </View>
            <View style={{ marginHorizontal: 20, marginTop: 80 }}>
                <Button title={'Upload and Continue'} />
                <Gap height={20} />
                <Link title={'Skip for this'} align={'center'} />
            </View>
        </View>
    )
}

export default UploadPhoto

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,  
    },
    avatar: {
        width: 110, 
        height: 110
    },
    avatarWrapper: {
        width: 130,
        height: 130,
        borderWidth: 1,
        borderColor: '#E9E9E9',
        borderRadius: 130 / 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addPhoto: {
        position: 'absolute',
        bottom: 8,
        right: 6
    },
    name: {
        fontSize: 24,
        fontFamily: 'Nunito-SemiBold',
        color: colors.secondary,
        // textAlign: ''
    },
    proffesion: {
        color: '#7D8797',
        fontFamily: 'Nunito-Regular',
        fontSize: 18,
        textAlign: 'center'
    }
})
