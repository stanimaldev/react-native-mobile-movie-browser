import React, {useState} from 'react';
import { StyleSheet, View, ScrollView, Text, Button, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import AdditionalInfo from './AdditionalInfo';

export default function Movie(props) {
  const [movie, setMovie] = useState();
  const [moreInfo, setMoreInfo] = useState(false);

  const fetchData = async (input) => {
    const response = await fetch(`http://www.omdbapi.com/?i=${input}&apikey=844528c`)
    const data = await response.json()
    setMovie(data)
    console.log(data)
  }

  const handlePress = (input) => {
    fetchData(input)
    setMoreInfo(!moreInfo);
  }

  return(
      <ScrollView>
        <View style={movieStyles.container}>
          <Image style={{height: 450, width: 300}} source={{ uri: props.movie.Poster }}/>
          <Text>{props.movie.Title}</Text>
          <Text>Released: {props.movie.Year}</Text>
          <Text>Type: {props.movie.Type}</Text>
          <Text>IMDB ID: {props.movie.imdbID}</Text>
          <Button style={movieStyles.button} onPress={() => handlePress(props.movie.imdbID)} title="More Info"></Button>
          {movie && moreInfo ? <Text>{`Plot:\n${movie.Plot}\n\n${JSON.stringify(movie, null, 2)}`}</Text> : null}
        </View>
      </ScrollView>
  )
}

const movieStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    // backgroundColor: 'lightblue',
    borderBottomWidth: 2,
    borderBottomColor: "black",
    borderWidth: 12
  }
})