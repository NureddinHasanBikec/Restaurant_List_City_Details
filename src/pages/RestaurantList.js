import {get} from 'axios';
import React, {useEffect, useState} from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';
import {RestaurantItem, SearchBar} from '../components';

let originalList = [];
const RestaurantList = (props) => {
    
    const [restaurantList, setRestaurantList] = useState([])
    const {selectedCity} = props.route.params;

    const fetchRestaurants = () => {
        get(
            'http://opentable.herokuapp.com/api/restaurants',
            {
                params: {
                    "city": selectedCity
                }
            }
            ) .then (response => {
                setRestaurantList(response.data.restaurants);
                originalList = [...response.data.restaurants]
            })
    }

    useEffect(()=>{
        fetchRestaurants()
    }, [] )

    const renderRestaurants = ({item}) => {
        return (
            <RestaurantItem 
                restaurant = {item}
                onSelect= {()=> props.navigation.navigate('Details', {selectedRestaurant: item})}
            />
         )
    }

    const searchRestaurant = (search) => {
        const filteredRestaurants = originalList.filter( restaurant => {
            const text = search.toUpperCase();
            const restaurantName = restaurant.name.toUpperCase();

            return restaurantName.indexOf(text) > -1;
        })
        
        setRestaurantList(filteredRestaurants);
    }

    return(
        <View style={{flex:1}}>
            <View>
                <Text style={styles.text}>{selectedCity}</Text>
                <SearchBar 
                    placeholder="Search a restaurant:"
                    onSearch={(value) => searchRestaurant(value)}
                />
            </View>
            <FlatList
                keyExtractor={(_,index) => index.toString()}
                data={restaurantList}
                renderItem={renderRestaurants}
            />
        </View>
    )
}

export {RestaurantList};

const styles= StyleSheet.create({
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        margin: 5
    }
})