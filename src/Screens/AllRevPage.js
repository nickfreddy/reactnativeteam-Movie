import React, {useState} from 'react';
import {View, Modal} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AllReview from '../components/AllReview';
import HeaderReview from '../components/HeaderReview';
import EditReview from '../components/EditReview';

const AllReviewPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <View style={{flex: 1, backgroundColor: '#114E60'}}>
      <View style={{backgroundColor: 'rgba(128,128,128,0.5)'}}>
        <Modal visible={modalOpen} transparent={true} animationType="slide">
          <View>
            <EditReview />

            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 5,
              }}>
              <AntDesign
                name="delete"
                size={23}
                color="wheat"
                onPress={() => setModalOpen(false)}
              />
            </View>
          </View>
        </Modal>
      </View>
      <HeaderReview title="AllReview" />
      <AllReview />
      <View
        style={{
          position: 'absolute',
          width: 50,
          height: 50,
          left: 330,
          top: 540,
        }}>
        <AntDesign
          name="pluscircle"
          size={50}
          color="gold"
          onPress={() => setModalOpen(true)}
        />
      </View>
    </View>
  );
};

export default AllReviewPage;
