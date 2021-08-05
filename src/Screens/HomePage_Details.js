import React, { useEffect } from 'react'
import { ActivityIndicator, StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import MovieFooter from '../components/MovieFooter';
import LinearGradient from 'react-native-linear-gradient'
import Trailer from '../components/Trailer';


const HomePage_Details = (props) => {
    const dispatch = useDispatch()
    const movieDetails_redux = useSelector(state => state.movie.movieDetails)
    const loading = useSelector(state => state.movie.loading)
    
    useEffect(() => {
        dispatch({type:'GET_MOVIE_DETAILS'})
    }, [])
    
    if(loading) {
        return <ActivityIndicator size="large" color="#0000ff" style={{flex:1, backgroundColor:'transparent'}}/>
    }

    return (
        <ImageBackground source={{uri: movieDetails_redux.poster}} 
        resizeMode="cover" 
        style={{flex:1}}>
            <LinearGradient colors={['transparent',  'black']} style={{flex:1}}>
                {/* <Trailer /> */}
                <ScrollView>
                    <View style={styles.containerBox}>
                        <View style={styles.videoBox}>
                        </View>
                        <View style={styles.topMiddleContent}>
                            <Text style={{fontSize:20, fontWeight:'bold', color:'white'}}>{movieDetails_redux.title} ({movieDetails_redux.release_year})</Text>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:'white'}}>{movieDetails_redux.genres[0]}</Text>
                            </View>
                        </View>

                        <View style={{width:'100%', paddingHorizontal:10}}>
                            <Text style={{ borderBottomWidth:1, color:'white', borderBottomColor:'white', fontSize:25, fontWeight:'bold'}} >Overview</Text>
                            <Text style={{textAlign:'justify',color:'white'}}>{movieDetails_redux.synopsis}</Text>
                        </View>
                        
                        <View style={{width:'100%'}}>
                            <MovieFooter 
                            voteCount={movieDetails_redux.vote_count}
                            modalShow={() => dispatch({type:'OPEN_MODAL'})}
                            style={{color:'white'}}
                            />
                        </View>
                    </View>
                </ScrollView>
            </LinearGradient>
        </ImageBackground>
    )
}

export default HomePage_Details

const heightScreen = Dimensions.get('screen').height
const widthScreen = Dimensions.get('screen').width

const styles = StyleSheet.create({
    backgroundBase : {
        flex:1, 
        justifyContent:'space-evenly', 
        alignItems:'center', 
        backgroundColor:'#325288'
    },
    containerBox: {
        width: widthScreen,
        height: heightScreen,
        alignItems:'center',
        justifyContent:'space-between',
        paddingVertical:100
    },
    videoBox : {
        borderWidth:1,
        width: "80%",
        height: heightScreen - (0.8 * heightScreen),
        backgroundColor:'black'
    },
    topMiddleContent : {
        marginVertical: 10,
        justifyContent:'space-between', 
        alignItems:'center',
        height: '10%'
    }
    
})
