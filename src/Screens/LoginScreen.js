import React from 'react'
import {Dimensions, Image, StyleSheet, Text, TouchableOpacity,  View } from 'react-native'

import TxtInput from '../components/TxtInput'
import Button from '../components/Button'
import PassInput from '../components/PassInput'


const LoginScreen = (props) => {    
    return (
        <View style={styles.backgroundBase}>
            <Image 
            source={require('../assets/LogoBlue.jpg')} 
            style={styles.image}
            />
            <View style={styles.contentContainer}>
                <View style={styles.containerInput}>
                    <TxtInput placeholder="Username" title="Username" BGcolor="#325288" />
                    <PassInput placeholder="Password" title="Password" BGcolor="#325288"/>
                </View>
                <Button title="Login" onPress={()=> props.navigation.navigate('MainNavigator')}/>
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

export default LoginScreen

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
        paddingVertical: 50 ,
        justifyContent:'space-between',
        alignItems:'center',
    },
    containerInput : {
        width: widthScreen - (0.15 * widthScreen)
    },
    image :{
        width:150, 
        height:150
    },
})
