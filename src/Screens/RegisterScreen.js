import React from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import Button from '../components/Button'
import EditProfile from '../components/EditProfile'
import PassInput from '../components/PassInput'
import ProfilePic from '../components/ProfilePic'
import TxtInput from '../components/TxtInput'

const RegisterScreen = (props) => {
    return (
        <View style={styles.backgroundBase}>
            <ProfilePic />
            <View style={styles.contentContainer}>
                <View style={styles.containerInput}>
                    <TxtInput placeholder='Name' title="Name" BGcolor="#325288"/>
                    <TxtInput placeholder='Username' title="Username" BGcolor="#325288"/>
                    <TxtInput placeholder='Email' title="Email" BGcolor="#325288"/>
                    <PassInput title="Password" BGcolor="#325288"/>
                </View>
                <Button title="Submit" onPress={() => alert('It works')}/>
                <View style={{flexDirection:'row',alignItems:'center', justifyContent:'center'}}>
                    <Text style={{color:'white'}}>Already have an account?</Text> 
                    <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
                        <Text style={{color:'yellow'}}> SignIn!</Text>
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
