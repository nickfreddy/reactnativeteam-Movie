import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Genre from '../components/Genre'
import Movies from '../components/Movies'
import SearchBox from '../components/SearchBox'

import { connect } from 'react-redux'
import { useSelector } from 'react-redux'

const HomePage = () => {
    const headline_redux = useSelector(state => state.genre.headline)

    return (
        <View style={{backgroundColor:'white'}}>
            <View style={styles.backgroundBase}>
                <SearchBox/>
                <Genre />
                <View style={{padding:10, marginHorizontal:10}}>
                    <Text style={styles.headerText}>Hot {headline_redux} Movies</Text>
                </View>
                <Movies/>
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
        height: '100%',
        borderBottomRightRadius:20,
        borderBottomLeftRadius:20,
        paddingVertical:10
    },
    headerText : {
        color:'white',
        fontSize:20,
        fontWeight:'bold'
    },
})
