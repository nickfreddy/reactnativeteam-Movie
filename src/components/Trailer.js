import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import YouTube from 'react-native-youtube'

const Trailer = (props) => {
    const [playing, setplaying] = useState(false)


    return (
            <YouTube 
            videoId= {props.path}
            play={true}
            loop={true}
            resumePlayAndroid={false}
            style={{width:300, height: 200 }}
            apiKey="AIzaSyC1v8DscUQX_FSsJAT22gRcYi0uSli_tjs"
            />
    )   
}

export default Trailer

const styles = StyleSheet.create({})
