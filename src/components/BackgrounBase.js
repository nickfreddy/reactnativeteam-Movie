import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BackgrounBase = () => {
    return (
        <View style={styles.backgroundBase}>

        </View>
    )
}

export default BackgrounBase

const styles = StyleSheet.create({
    backgroundBase : {
        backgroundColor:'black',
        height: '100%',
        borderBottomRightRadius:20,
        borderBottomLeftRadius:20,
        paddingVertical:10
    },
})
