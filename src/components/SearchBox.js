import React, { useState } from 'react'
import { View,  TouchableOpacity, Dimensions, TextInput, StyleSheet } from 'react-native'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useDispatch } from 'react-redux'

const SearchBox = () => {
    const dispatch = useDispatch()
    const [input, setInput] = useState('')

    const handleSearch = () => {
        dispatch({type: 'GET_MOVIE_BY_SEARCH', payload: input})
        setInput('')
    }
    return (
        <View style={styles.searchBox}>
            <TouchableOpacity onPress={()=> handleSearch()}>
                <MaterialCommunityIcon name='magnify' size={25} />
            </TouchableOpacity>
            <TextInput 
                placeholder='Search Movies...' 
                value={input}
                onChangeText={(text) => setInput(text)}
            />
        </View>
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
        paddingHorizontal:10
    }
})
