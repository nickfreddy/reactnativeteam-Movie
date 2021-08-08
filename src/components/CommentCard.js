import React from 'react'
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import moment from 'moment';
import AntDesign from 'react-native-vector-icons/AntDesign'

const CommentCard = props => {
    return (
        <View key={props.keyIndex} style={styles.commentCard}>
            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Image source={{uri: props.photo === '' ? 'https://i1.wp.com/jejuhydrofarms.com/wp-content/uploads/2020/05/blank-profile-picture-973460_1280.png?fit=300%2C300&ssl=1' 
                                                            : props.photo
                                    }}
                    style={{width:50, height:50, borderRadius:30}}
                    />
                    <View>
                        <Text> username: {props.username}</Text>
                        <Text> Reviewed {moment(props.updateTime).startOf('day').fromNow()}</Text>
                    </View> 
                </View>
                <View style={{flexDirection:'row', marginHorizontal:10}}>
                    <Text style={{fontSize:21}}>{props.rating}</Text>
                    <AntDesign name="star" size={25} color="gold" />
                </View>
            </View>
            <Text style={{margin:10}}>{props.comment}</Text>
        </View>
    )
}

export default CommentCard

const widthScreen = Dimensions.get('screen').width

const styles = StyleSheet.create({
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
