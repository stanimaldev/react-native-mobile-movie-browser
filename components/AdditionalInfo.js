import React from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';



export default function AdditionalInfo(props) {
  return (
    <View>
      <Text>Some addition info about the movie</Text>
      <Button title="Go Back" onPress={() => this.props.navigation.goBack()}></Button>
    </View>
  )
}