import React from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import Button from '../components/Button'
import EditProfile from '../components/EditProfile'
import PassInput from '../components/PassInput'
import ProfilePic from '../components/ProfilePic'
import TxtInput from '../components/TxtInput'

const RegisterScreen = () => {
    return (
        <View style={styles.backgroundBase}>
            <ProfilePic />
            <View style={styles.contentContainer}>
                <View style={styles.containerInput}>
                    <TxtInput placeholder='Name'/>
                    <TxtInput placeholder='Username'/>
                    <TxtInput placeholder='Email'/>
                    <PassInput />
                </View>
                <Button title="Submit"/>
                <View style={{flexDirection:'row',alignItems:'center', justifyContent:'center'}}>
                    <Text style={{color:'white'}}>Don't have an account?</Text> 
                    <TouchableOpacity onPress={() => props.navigation.navigate('Register')}>
                        <Text style={{color:'yellow'}}> SignUp!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default RegisterScreen

const heightScreen = Dimensions.get('screen').height
const widthScreen = Dimensions.get('screen').width

const styles = StyleSheet.create({
    backgroundBase: {
        flex:1, 
        justifyContent:'center', 
        alignItems:'center', 
        backgroundColor:'#325288'
    },
    contentContainer : {
        width: widthScreen - (0.2 * widthScreen),
        height: heightScreen - (0.5 * heightScreen),
        justifyContent:'space-between',
        alignItems:'center',
    },
    containerInput : {
        width: widthScreen - (0.2 * widthScreen)
    },
})
