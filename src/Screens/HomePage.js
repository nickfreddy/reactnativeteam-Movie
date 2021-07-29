import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Button, FlatList, ScrollView, TouchableOpacity, Dimensions, VirtualizedList } from 'react-native'

import Genre from '../components/Genre'
import Movies from '../components/Movies'
import SearchBox from '../components/SearchBox'


import { connect, useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const HomePage = (props) => {
    const dispatch = useDispatch()
    const headline_redux = useSelector(state => state.genre.headline)
    const movies_redux = useSelector(state => state.movie.movieData.slice(0,6))

    const renderItem = ({item, index}) => {
        if (index !== 5) {
            return(
                <Movies 
                title={item.title}
                overview={item.overview}
                voteCount={item.vote_count}
                posterPath={item.poster_path}/>
                                
            )
        } else {
            return (
                <TouchableOpacity style={{justifyContent:'center', alignItems:'center'}}>
                    <Text style={{color:'white'}}>More</Text>
                </TouchableOpacity>
            )
        }
        
        
    }
    useEffect(() => {
    // dispatch({type: 'GET_DATA'})s

    },[])

    return (

        <View style={{backgroundColor:'white'}}>
            <View style={styles.backgroundBase}>
                <SearchBox/>
                <Genre />
                <View style={{padding:10, marginHorizontal:10}}>
                    <Text style={styles.headerText}>Hot {headline_redux} Movies</Text>
                </View>
                <FlatList
                data={movies_redux}
                keyExtractor={(elem, i) => i}
                renderItem={renderItem}/>
            </View>
        </View>
    )
}

// const mapStateToProps = () => {

// }

export default connect()(HomePage)

const styles = StyleSheet.create({
    backgroundBase : {
        backgroundColor:'black',
        borderBottomRightRadius:20,
        borderBottomLeftRadius:20,
        paddingVertical:10,
        height:'100%'
    },
    headerText : {
        color:'white',
        fontSize:20,
        fontWeight:'bold'
    },
})
