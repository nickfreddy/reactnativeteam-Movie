import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import SearchBox from '../components/SearchBox'
import AntDesign from 'react-native-vector-icons/AntDesign';
import MovieFooter from '../components/MovieFooter';

const HomePage_Details = (props) => {
    const dispatch = useDispatch()
    const movieDetails_redux = useSelector(state => state.movie.movieDetails.data)

    console.log('details',movieDetails_redux)

    if(movieDetails_redux === undefined) {
        return (
            <ActivityIndicator />
        )
    }

    return (
        <ScrollView >
            <View style={{flex:1, justifyContent:'space-evenly', alignItems:'center', backgroundColor:'#325288'}}>
                <View style={{marginVertical:20}}>
                    <SearchBox />
                </View>
            <View style={styles.containerBox}>
                <View style={styles.videoBox}>
                    <Text>Video</Text>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-between', borderBottomWidth: 1, flexWrap:'wrap'}}>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>{movieDetails_redux.title}</Text>
                    <View>
                        <Text>{movieDetails_redux.release_date}</Text>
                        <View style={{flexDirection:'row'}}>
                            {movieDetails_redux.genres.map((item, index) => 
                            (index !== movieDetails_redux.genres.length - 1) 
                            ?  <Text>{item.name} | </Text>
                            : (<Text>{item.name}</Text>)
                            )}
                        </View>
                    </View>
                </View>
                <View style={{paddingVertical:10, alignItems:'center'}}>
                    <Image source={{uri:'https://image.tmdb.org/t/p/w200' + movieDetails_redux.poster_path}}
                    style={{width:100, height:150}}
                    />
                    <View style={{flexDirection: 'row', justifyContent:'space-between', paddingVertical:10}}>
                        <View style={{alignItems:'center',borderRightWidth:1, paddingHorizontal:5}}>
                            <AntDesign name="star" size={20} color="gold" />
                            <Text style={{fontWeight: 'bold'}}>{movieDetails_redux.vote_average}/10</Text>
                        </View>
                        <TouchableOpacity style={{alignItems:'center', paddingHorizontal:5}}>
                            <AntDesign name="star" size={20} color="grey" />
                            <Text>Rate This!</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{textAlign:'justify'}}>{movieDetails_redux.overview}</Text>
                </View>
                <MovieFooter voteCount={movieDetails_redux.vote_count}/>
            </View>
            </View>
        </ScrollView>
    )
}

export default HomePage_Details

const heightScreen = Dimensions.get('screen').height
const widthScreen = Dimensions.get('screen').width

const styles = StyleSheet.create({
    containerBox: {
        width: widthScreen - (0.2 * widthScreen),
        backgroundColor:'white',
        paddingHorizontal:20,
        paddingVertical: 20,
        marginVertical:20
    },
    videoBox : {
        borderWidth:1,
        width: "100%",
        height: heightScreen - (0.8 * heightScreen),
    }
})
