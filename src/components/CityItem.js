import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View, Dimensions} from 'react-native';

const  CityItem = (props) => {
    return(
       <View style={styles.main}>
            <View style={styles.view}>
                <TouchableOpacity style={styles.container} onPress={props.onSelect}>
                    <Text style={styles.text}>{props.cityName}</Text>
                </TouchableOpacity>
               
            </View>
       </View>
    )
}


export {CityItem};

const styles = StyleSheet.create({
    container:{
        padding: 10,
        alignItems: 'center',
       
    },
    text: {
        fontWeight: '900',
        fontSize: 23,
        fontFamily: 'sans-serif-light'
        
    },
    view: {
        flex:1,
        backgroundColor: '#ff9800',
        width: Dimensions.get('window').width * 0.70,
        alignSelf:'center'
        
        
       
    },
    main: {
        flex:1,
        backgroundColor: 'red',
    }
})