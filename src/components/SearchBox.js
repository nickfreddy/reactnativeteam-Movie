import React from 'react'
import { View, Text, TouchableOpacity, Dimensions, TextInput, StyleSheet } from 'react-native'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'

const SearchBox = () => {
    return (
        // <View style={{alignItems:'center'}}>
            <View style={styles.searchBox}>
                <TouchableOpacity>
                    <MaterialCommunityIcon name='magnify' size={25} />
                </TouchableOpacity>
                <TextInput placeholder='Search Movies...' value='search'/>
            </View>
        // </View>
    )
}

export default SearchBox

const styles = StyleSheet.create({
    searchBox : {
        flexDirection:'row',
        width: Dimensions.get('screen').width - 50, 
        borderWidth:1, 
        borderRadius: 20,
        alignItems:'center',
        alignSelf:'center',
        backgroundColor:'white',
    }
})
