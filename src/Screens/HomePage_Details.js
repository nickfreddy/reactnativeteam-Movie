import React, { useEffect } from 'react'
import { ActivityIndicator, StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import MovieFooter from '../components/MovieFooter';
import LinearGradient from 'react-native-linear-gradient'
import Trailer from '../components/Trailer';
import AntDesign from 'react-native-vector-icons/AntDesign'
import moment from 'moment';


const HomePage_Details = (props) => {
    const dispatch = useDispatch()
    const movieDetails_redux = useSelector(state => state.movie.movieDetails)
    const loading = useSelector(state => state.movie.loading)

    const movieTrailer = (data) => {
        let path = movieDetails_redux.trailer
        return path.includes('watch') 
        ? path.split('=')[1]
        : path.split('/')[3]
    }

    console.log("for review",movieDetails_redux)
    useEffect(() => {
        dispatch({type:'GET_MOVIE_DETAILS'})
    }, [])
    
    if(loading) {
        return <ActivityIndicator size="large" color="#0000ff" style={{flex:1, backgroundColor:'#114E60'}}/>
    }

    return (
        <ImageBackground source={{uri: movieDetails_redux.poster}} 
        resizeMode="cover" 
        style={{flex:1}}>
            <LinearGradient colors={['transparent',  'black']} style={{flex:1}}>
                <ScrollView>
                    <View style={styles.containerBox}>
                        <Trailer path={movieTrailer()} />
                        <View style={styles.topMiddleContent}>
                            <Text style={{fontSize:20, fontWeight:'bold', color:'white'}}>{movieDetails_redux.title} ({movieDetails_redux.release_year})</Text>
                            <View style={{flexDirection:'row'}}>
                                {(movieDetails_redux.genres.map((item,index) => 
                                    (index !== movieDetails_redux.genres.length - 1) 
                                    ? <Text key={index} style={{color:'white'}}>{item[0].toUpperCase() + item.substring(1)} | </Text>
                                    : <Text key={index} style={{color:'white'}}>{item[0].toUpperCase() + item.substring(1)}</Text>
                                ))}
                            </View>
                        </View>

                        <View style={{width:'100%', paddingHorizontal:10}}>
                            <Text style={{ borderBottomWidth:1, color:'white', borderBottomColor:'white', fontSize:25, fontWeight:'bold'}} >Overview</Text>
                            <Text style={{textAlign:'justify',color:'white'}}>{movieDetails_redux.synopsis}</Text>
                        </View>
                        
                        <View style={{width:'100%', marginTop:20, paddingHorizontal:10}}>
                            <Text style={{color:'white', fontSize:20}}>Reviews</Text>
                            <View style={styles.commentContainer}>
                                {(movieDetails_redux.reviews.length > 0) 
                                    ? movieDetails_redux.reviews.map((item) => {
                                        return (
                                        <View key={item._id} style={styles.commentCard}>
                                            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                                                <View style={{flexDirection:'row', alignItems:'center'}}>
                                                    <Image source={{uri: item.user_id.photo}} 
                                                    style={{width:50, height:50, borderRadius:30}}
                                                    />
                                                    <View>
                                                        <Text> username: {item.user_id.username}</Text>
                                                        <Text> Reviewed {moment(item.createdAt).startOf('day').fromNow()    }</Text>
                                                    </View> 
                                                </View>
                                                <View style={{flexDirection:'row', marginHorizontal:10}}>
                                                    <Text style={{fontSize:21}}>{item.rating}</Text>
                                                    <AntDesign name="star" size={25} color="gold" />
                                                </View>
                                            </View>
                                            <Text style={{margin:10}}>{item.comment}</Text>
                                        </View>) 
                                    }) 
                                    : <Text style={{color:'white'}}>No one has review this movie</Text>

                                }
                            </View>
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
        alignItems:'center',
        justifyContent:'space-between',
        paddingVertical:100
    },
    videoBox : {
        borderWidth:1,
        width: "80%",
        height: heightScreen - (0.8 * heightScreen),
        backgroundColor:'white'
    },
    topMiddleContent : {
        marginVertical: 10,
        justifyContent:'space-between', 
        alignItems:'center',
        height: '10%'
    },
    commentContainer : {
        alignItems: 'center',
        justifyContent:'center'
    },
    commentCard : {
        width : widthScreen - (0.1 * widthScreen),
        height: 100,
        backgroundColor:'white',
        marginVertical:20,
        borderRadius:20,
    }
    
})
