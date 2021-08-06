import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Gap, Header, Input } from '../../components'
import { colors, GetStartedNavigation, UploadPhotoNavigation } from '../../utils'

const Register = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <Header onPress={() => navigation.goBack()} title={'Daftar Akun'} />
            <View style={styles.container}>
            <Input label={'Full Name'} />
            <Gap height={20} />
            <Input label={'Pekerjaan'} />
            <Gap height={20} />
            <Input label={'Email'} />
            <Gap height={20} />
            <Input label={'Password'} />
            <Gap height={50} />
            <Button title={'Continue'} onPress={() => navigation.navigate(UploadPhotoNavigation)} />
        </View>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    page : {
        backgroundColor: colors?.white,
        flex: 1
    },
    container: {
        padding: 40,

    }
})
