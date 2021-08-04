import React from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import UserReview from '../components/UserReview';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const UserReviewPage = props => {
  // const dispatch = useDispatch();
  // const user_redux = useSelector(state => state.user.userData)
  // const renderItem = ({item, index})=>{
  //   if (index !==3){
  //     return(
  //       <UserReview/>
  //     )
  //   }else {
  //     return (
  //       <TouchableOpacity
  //         style={{justifyContent: 'center', alignItems: 'center'}}>
  //         <Text style={{color: 'white'}}>More</Text>
  //       </TouchableOpacity>
  //     );
  //   }
  // }
  return (
    <View style={{backgroundColor: '#114E60', flex: 1}}>
      <UserReview />
    </View>
  );
};

export default UserReviewPage;
