import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import MovieFooter from './MovieFooter'

const Movies = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => props.onPress()}>
            <View style={{width: Dimensions.get('screen').width -100, height:100, borderWidth:1 }}>
                <Image source={{uri:'https://image.tmdb.org/t/p/w200' + props.posterPath}}
                style={{width: Dimensions.get('screen').width -100, height:100}}/>
            </View>
            <Text style={{color:'black', textAlign:'center'}}>{props.title}</Text>
            <Text style={{textAlign:'justify'}}>{props.overview}</Text>
            <MovieFooter modalShow={()=> props.modalShow()} voteCount={props.voteCount}/>
        </TouchableOpacity>
    )
}

export default Movies

const styles = StyleSheet.create({
    container : {
        width: Dimensions.get('screen').width -50,
        height: 350,
        backgroundColor:'white',
        borderRadius:20,
        alignSelf:'center',
        marginVertical:10,
        justifyContent:'space-evenly',
        paddingVertical:20, 
        paddingHorizontal: 20
     },
    
    

})
