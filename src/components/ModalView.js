import React from 'react'
import {StyleSheet, Text, View, Modal, Dimensions, TextInput, TouchableHighlight } from 'react-native'

const ModalView = (props) => {

    return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.modalState}
        onRequestClose={() => props.onBackHandler()}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>How do you rate this movie?</Text>
            <Text>STAR HERE</Text>
            <Text>Your Rating: 0</Text>
            <TextInput placeholder="Write a headline for your review here" style={styles.textInputBox}/>
            <TextInput 
            placeholder="Write your review here" 
            multiline={true}
            style={[styles.textInputBox, styles.multilineBox]} />
            <TouchableHighlight
              style={[styles.button, styles.buttonClose]}
              onPress={() => props.onSubmitModal()}
            >
              <Text style={styles.textStyle}>Submit</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
    )
}

export default ModalView

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:'rgba(128,128,128,0.5)',
      },
    modalView: {
        width: Dimensions.get('screen').width - 50,
        height: 400,
        margin: 20,
        backgroundColor: "#F5CEBE",
        borderRadius: 20,
        padding: 35,
        justifyContent:'space-between',
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        width: 200,
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#114E60",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    textInputBox : {
        width: Dimensions.get('screen').width -100 ,
        backgroundColor:'white', 
        borderRadius:10
    },
    multilineBox : {
        height : 100
    }

 
})
