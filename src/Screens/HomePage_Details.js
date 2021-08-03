import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import SearchBox from '../components/SearchBox'
import AntDesign from 'react-native-vector-icons/AntDesign';
import MovieFooter from '../components/MovieFooter';
import LinearGradient from 'react-native-linear-gradient'

const HomePage_Details = (props) => {
    const dispatch = useDispatch()
    const movieDetails_redux = useSelector(state => state.movie.movieDetails.data)

    console.log(movieDetails_redux)
    if(movieDetails_redux === undefined) {
        return (
            <ActivityIndicator style={{flex:1}}/>
        )
    }

    return (
        <ImageBackground source={{uri:'https://image.tmdb.org/t/p/w200' + movieDetails_redux.poster_path}} 
        resizeMode="cover" 
        style={{flex:1}}>
            <LinearGradient colors={['transparent',  'black']} style={{flex:1}}>
                <ScrollView>
                    <View style={styles.containerBox}>
                        <View style={styles.videoBox}>
                            <Text style={{color:'white'}}>Video</Text>
                        </View>
                        <View style={styles.topMiddleContent}>
                            <Text style={{fontSize:20, fontWeight:'bold', color:'white'}}>{movieDetails_redux.title}</Text>
                            <Text style={{color:'white'}}>{movieDetails_redux.release_date}</Text>
                            <View style={{flexDirection:'row'}}>
                                {movieDetails_redux.genres.map((item, index) => 
                                (index !== movieDetails_redux.genres.length - 1) 
                                ?  <Text key={index} style={{color:'white'}}>{item.name} | </Text>
                                : (<Text key={index} style={{color:'white'}}>{item.name}</Text>)
                                )}
                            </View>
                        </View>

                        <View>
                            <Text style={{textAlign:'justify',color:'white'}}>{movieDetails_redux.overview}</Text>
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
// {/* 
//         <View style={styles.backgroundBase}>
//             <ScrollView >
//                 <View style={{paddingVertical:10, alignItems:'center'}}>
//                     <Image source={{uri:'https://image.tmdb.org/t/p/w200' + movieDetails_redux.poster_path}}
//                     style={{width:100, height:150}}
//                     />
//                     <View style={{flexDirection: 'row', justifyContent:'space-between', paddingVertical:10}}>
//                         <View style={{alignItems:'center',borderRightWidth:1, paddingHorizontal:5}}>
//                             <AntDesign name="star" size={20} color="gold" />
//                             <Text style={{fontWeight: 'bold'}}>{movieDetails_redux.vote_average}/10</Text>
//                         </View>
//                         <TouchableOpacity style={{alignItems:'center', paddingHorizontal:5}}>
//                             <AntDesign name="star" size={20} color="grey" />
//                             <Text>Rate This!</Text>
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//                 </View>
//             </ScrollView>
//         </View> */}
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
        borderBottomWidth: 1,
        alignItems:'center',
        height: '10%'
    }
    
})
