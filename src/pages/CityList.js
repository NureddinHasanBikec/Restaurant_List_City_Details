import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';

import {CityItem, SearchBar} from '../components';
 
let originalList = [];

const CityList = (props) => { 

    const [cityList, setCityList] = useState ([]);
    

    const fetchCityData = async () => {
        const {data} = await axios.get('http://opentable.herokuapp.com/api/cities');
        console.log(data);
        setCityList(data.cities);
        originalList = [...data.cities];
      };
    useEffect(()=>{
        fetchCityData();
    }, [])

    const renderCities = ({item}) => {
        return(
        <CityItem 
            cityName={item}
            onSelect={() => props.navigation.navigate('Restaurants', {selectedCity: item})}
            />
        )
    }

    const renderSeperator = () => <View style={{borderWidth: 1, borderColor: '#ab000d'}} />

    const searchCity = (search) => {
        const filteredCities = originalList.filter(city => {
            const text = search.toUpperCase();
            const cityName = city.toUpperCase();

            return cityName.indexOf(text) > -1;
        })
        setCityList(filteredCities);
    }

    return(
        <View>
            <Text style={styles.text}>Cities</Text>
            <SearchBar 
                placeholder= "Search a city:"
                onSearch={(value)=>searchCity(value)}
            />
            <FlatList
                keyExtractor={(_,index) => index.toString}
                data={cityList}
                renderItem={renderCities}
                
            />
        </View>
    )
}

export { CityList };

const styles= StyleSheet.create({
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        margin: 5
    }
})