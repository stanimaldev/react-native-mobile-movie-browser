import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button,  } from 'react-native';
import Search from './components/Search';
import Movie from './components/Movie';
import AdditionalInfo from './components/AdditionalInfo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function App(props) {

  // useEffect(() => {
  //   console.log(movies.length > 1 ? movies.map(movie => movie) : null)
  // },[movies, setMovies])
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Search" component={Search}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}