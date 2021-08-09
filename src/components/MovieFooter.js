import React from 'react'
import { Dimensions,StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'

const MovieFooter = (props) => {
    return (
        <View style={styles.footerContent}>
            <TouchableOpacity style={{flexDirection:'row'}} onPress={() => props.modalShow()} >
                <MaterialCommunityIcon name='message-outline' size={20}/>
                <Text>{props.voteCount}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <MaterialCommunityIcon name='share-variant' size={20}/>
            </TouchableOpacity>
        </View>
    )
}

export default MovieFooter

const styles = StyleSheet.create({
    footerContent: {
        flexDirection:'row', 
        justifyContent:'space-between',
        borderTopWidth: 1,
        paddingTop:5
    }
})
