import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';

const RestaurantDetail = (props) => {

    const { selectedRestaurant } = props.route.params;

    return(
        <View style={styles.container}>
            <Text style={styles.name}>{selectedRestaurant.name}</Text>
            <Image 
                style= {styles.image}
                source= {{ uri: selectedRestaurant.image_url }}
            />
            <View style={styles.infoContainer}>
                 <Text style={styles.infoText}>{selectedRestaurant.address}</Text>
            </View>

            <View style={styles.infoContainer}>
                 <Text style={styles.infoText}>{selectedRestaurant.area}</Text>
            </View>

            <View style={styles.infoContainer}>
                 <Text style={styles.infoText}>{selectedRestaurant.phone}</Text>
            </View>
        </View>
    )
}

export {RestaurantDetail};

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: 10
    },
    name: {
        fontWeight: '300',
        fontSize: 30
    },
    image: {
        height: Dimensions.get('window').height /3
    },
    infoContainer: {
        backgroundColor: '#29b6f6',
        padding: 10,
        margin: 5,
        borderRadius:5
    },
    infoText:{
        color: 'white',
        fontWeight:'bold'
    }
})