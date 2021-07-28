import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'

const Movies = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.movieContainer}>
                <View style={styles.movieBox}>
                    <View style={styles.contentContainer}>
                        <MaterialCommunityIcon name="movie" size={40} />
                    </View>
                    <View style={{marginHorizontal:20, marginVertical:10}}>
                        <Text style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae lectus eget metus blandit convallis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis maximus lorem id turpis fringilla rhoncus. Sed venenatis elit ac enim condimentum tempus. </Text>
                    </View>
                    <View style={styles.footerMovie}>
                        <View style={styles.footerMovieContent}>
                            <TouchableOpacity>
                                <MaterialCommunityIcon name='message-outline'
                                size={20} />
                            </TouchableOpacity>
                            <Text>count</Text>
                        </View>
                        <View>
                            <TouchableOpacity>
                                <MaterialCommunityIcon name='share-variant'
                                size={20}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Movies

const styles = StyleSheet.create({
    container : {
        width: Dimensions.get('screen').width - 50,
        alignSelf:'center',
    },
    
    movieContainer : {
        height:'75%',
        paddingVertical:10
    },
    movieBox: {
        width: Dimensions.get('screen').width - 50,
        height:'110%',
        backgroundColor:'white',
        alignItems:'center',
        paddingVertical:'10%',
        borderRadius:20,
        justifyContent:'space-between'
    },
    contentContainer : {
        borderWidth:1,
        borderColor:'black',
        width: Dimensions.get('screen').width - 100,
        height:100,
        alignItems:'center',
        justifyContent:'center'
    },
    footerMovie : {
        borderTopWidth:1,
        width: Dimensions.get('screen').width - 100,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:10
        
    },
    footerMovieContent: {
        flexDirection:'row', 
        justifyContent:'space-between', 
        alignItems:'center',
        width:50,
    }
})
