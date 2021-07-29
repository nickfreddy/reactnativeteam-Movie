import React, { useState } from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import GenreBox from './GenreBox'
import { connect, useDispatch, useSelector } from 'react-redux'

const Genre = (props) => {
    const dispatch = useDispatch()
    const [buttonState, setButtonState] = useState('')
    const genre = useSelector(state => state.genre)
    const actionHandler = () => {
        dispatch({type: 'ACTION'})
        setButtonState('buttonOne')
    }
    const romanceHandler = () => {
        dispatch({type: 'ROMANCE'})
        setButtonState('buttonTwo')
    }
    const thrillerHandler = () => {
        dispatch({type: 'THRILLER'})
        setButtonState('buttonThree')
    }
    const comedyHandler = () => {
        dispatch({type: 'COMEDY'})
        setButtonState('buttonFour')
    }


    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={{...styles.text, fontSize:20}}>Best Genre</Text>
                <TouchableOpacity>
                    <Text style={styles.text}>More {'>>'}</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row'}}>
                <GenreBox name={genre.action} colorBG={buttonState === 'buttonOne' ? 'orange' : 'white'} 
                onClick={()=> actionHandler()}/>
                <GenreBox name={genre.romance} colorBG={buttonState === 'buttonTwo' ? 'orange' : 'white'} 
                onClick={()=> romanceHandler()}/>
                <GenreBox name={genre.thriller} colorBG={buttonState === 'buttonThree' ? 'orange' : 'white'} 
                onClick={()=> thrillerHandler()}/>
                <GenreBox name={genre.comedy} colorBG={buttonState === 'buttonFour' ? 'orange' : 'white'} 
                onClick={()=> comedyHandler()}/>
            </View>
        </View>
    )
}
// const mapStateToProps = (state) => ({
//     action: state.genre.action,
//     romance: state.genre.romance,
//     thriller: state.genre.thriller,
//     comedy: state.genre.comedy
// })

// const mapDispatchToProps = (dispatch) => ({
//     actionClicked: () => dispatch({type: 'ACTION'}),
//     romanceClicked: () => dispatch({type: 'ROMANCE'}),
//     thrillerClicked: () => dispatch({type: 'THRILLER'}),
//     comedyClicked: () => dispatch({type: 'COMEDY'})
// })

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
