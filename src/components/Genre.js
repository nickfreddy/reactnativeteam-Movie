import React, { useState } from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import GenreBox from './GenreBox'
import { connect, useDispatch, useSelector } from 'react-redux'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

const Genre = (props) => {
    const dispatch = useDispatch()
    const [buttonState, setButtonState] = useState('')
    const genre = useSelector(state => state.genre)
    const actionHandler = () => {
        dispatch({type: 'ACTION'})
        setButtonState('buttonOne')
        dispatch({type: 'GET_MOVIE_BY_GENRE', genre :'action'})
    }
    const romanceHandler = () => {
        dispatch({type: 'ROMANCE'})
        setButtonState('buttonTwo')
        dispatch({type: 'GET_MOVIE_BY_GENRE', genre :'romance'})
    }
    const comedyHandler = () => {
        dispatch({type: 'COMEDY'})
        setButtonState('buttonThree')
        dispatch({type: 'GET_MOVIE_BY_GENRE', genre :'comedy'})
    }
    const animeHandler = () => {
        dispatch({type: 'ANIME'})
        setButtonState('buttonFour')
        dispatch({type: 'GET_MOVIE_BY_GENRE', genre :'anime'})
    }
    const resetHandler = () => {
        dispatch({type: 'RESET'})
        setButtonState('')
        dispatch({type: 'GET_DATA'})
    }


    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={{...styles.text, fontSize:20}}>Best Genre</Text>
                <TouchableOpacity onPress={() => resetHandler()}>
                    <EvilIcons name="refresh" size={30} color='white' />
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row'}}>
                <GenreBox name={genre.action} colorBG={buttonState === 'buttonOne' ? 'orange' : 'white'} 
                onClick={()=> actionHandler()}/>
                <GenreBox name={genre.romance} colorBG={buttonState === 'buttonTwo' ? 'orange' : 'white'} 
                onClick={()=> romanceHandler()}/>
                <GenreBox name={genre.comedy} colorBG={buttonState === 'buttonThree' ? 'orange' : 'white'} 
                onClick={()=> comedyHandler()}/>
                <GenreBox name={genre.anime} colorBG={buttonState === 'buttonFour' ? 'orange' : 'white'} 
                onClick={()=> animeHandler()}/>
            </View>
        </View>
    )
}


export default Genre

const styles = StyleSheet.create({
    container : {
        width: Dimensions.get('screen').width -50,
        height: 100,
        marginVertical: 10,
        justifyContent:'center',
        alignSelf:'center'
    },
    text : {
        color:'white',
        fontWeight:'bold',
    }
})
