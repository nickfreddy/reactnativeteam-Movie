import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import MovieFooter from './MovieFooter'
import AntDesign from 'react-native-vector-icons/AntDesign'

const Movies = (props) => {

    return (
        <TouchableOpacity style={styles.container} onPress={() => props.onPress()}>
            <View style={styles.topContent}>
                <Text style={styles.titleText}>{props.title}</Text>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <View style={{flexDirection:'row'}}>
                        {(props.genre.map((item,index) => 
                            (index !== props.genre.length - 1) 
                            ? <Text key={index} style={styles.subTitleText}>{item[0].toUpperCase() + item.substring(1)}| </Text>
                            : <Text key={index} style={styles.subTitleText}>{item[0].toUpperCase() + item.substring(1)}</Text>
                        ))}
                    </View>
                    <Text style={styles.subTitleText}>{props.releaseYear}</Text>
                </View>
            </View>

            <View style={styles.middleContent}>
                <Image source={{uri:props.posterPath}}
                style={{width:100   , height: 150}}/>
                <View style={{justifyContent:'center', alignItems:'center'}}>
                    <AntDesign name="star" size={18} color="gold" />
                    <Text>{props.rating}/5</Text>
                </View>
            </View>
                <Text style={{textAlign:'justify', marginVertical:10}}>{props.overview}</Text>
            <MovieFooter modalShow={()=> props.modalShow()}/>
        </TouchableOpacity>
    )
}

export default Movies

const styles = StyleSheet.create({
    container : {
        width: Dimensions.get('screen').width -50,
        backgroundColor:'white',
        borderRadius:20,
        alignSelf:'center',
        marginVertical:10,
        paddingHorizontal: 20,
        paddingVertical:20
     }, 
     topContent : {
         width:'100%'
     },
     titleText : {
         color:'black', 
         textAlign:'left',
         borderBottomWidth: 1,
         fontWeight: 'bold',
         fontSize: 20
    },
    subTitleText : {
        color: 'black',
        fontSize: 16
    },
    middleContent : {
        width: '100%', 
        flexDirection:"row", 
        justifyContent:"space-around",
        marginVertical: 20
    }
})
