import React, { useState } from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import GenreBox from './GenreBox'
import { connect } from 'react-redux'

const Genre = (props) => {
    const [buttonState, setButtonState] = useState('')


    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={{...styles.text, fontSize:20}}>Best Genre</Text>
                <TouchableOpacity>
                    <Text style={styles.text}>More {'>>'}</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row'}}>
                <GenreBox name="action" colorBG={buttonState === 'buttonOne' ? 'orange' : 'white'} 
                onClick={()=> {
                    props.actionClicked()
                    setButtonState('buttonOne')
                    }}/>
                <GenreBox name="romance" colorBG={buttonState === 'buttonTwo' ? 'orange' : 'white'} 
                onClick={()=> {
                    props.romanceClicked()
                    setButtonState('buttonTwo')
                    }}/>
                <GenreBox name="Thiller" colorBG={buttonState === 'buttonThree' ? 'orange' : 'white'} 
                onClick={()=> {
                    props.thrillerClicked()
                    setButtonState('buttonThree')
                    }}/>
                <GenreBox name="Comedy" colorBG={buttonState === 'buttonFour' ? 'orange' : 'white'} 
                onClick={()=> {
                    props.comedyClicked()
                    setButtonState('buttonFour')
                    }}/>
            </View>
        </View>
    )
}
const mapStateToProps = (state) => ({
    action: state.genre.action,
    romance: state.genre.romance,
    thriller: state.genre.thriller,
    comedy: state.genre.comedy
})

const mapDispatchToProps = (dispatch) => ({
    actionClicked: () => dispatch({type: 'ACTION'}),
    romanceClicked: () => dispatch({type: 'ROMANCE'}),
    thrillerClicked: () => dispatch({type: 'THRILLER'}),
    comedyClicked: () => dispatch({type: 'COMEDY'})
})

export default connect(mapStateToProps, mapDispatchToProps)(Genre)

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
