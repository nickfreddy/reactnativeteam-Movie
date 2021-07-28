import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TouchableHighlight } from 'react-native'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'

const GenreBox = (props) => {
    return (
        <TouchableOpacity style={{...styles.box, backgroundColor:props.colorBG}} onPress={() => {props.onClick()}}> 
            <MaterialCommunityIcon name='movie-filter' />
            <Text>{props.name}</Text>
        </TouchableOpacity>
    )
}

export default GenreBox

const styles = StyleSheet.create({
    box : {
        flex:1,
        height:40,
        borderRadius:10,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'space-evenly',
        marginTop:20,
        marginHorizontal:2,
        flexDirection:'row'
    }
})