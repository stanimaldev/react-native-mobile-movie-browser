import React, {useState} from 'react';
import Movie from './Movie'
import AdditionalInfo from './AdditionalInfo';
import {ScrollView, StyleSheet, Text, Button, View, TextInput} from 'react-native';

export default function Search() {
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState("");

  const fetchData = async (input) => {
    const response = await fetch(`http://www.omdbapi.com/?apikey=844528c&s=${input}`)
    const data = await response.json()
    setMovies(data.Search)
  }

/* OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=844528c */

  const handleChange = (input) => {
    setInput(input)
  }

  const handlePress = () => {
    if (input) {
      fetchData(input)
      setInput("");
    }
  }

  return(
    <ScrollView>
      <View style={styles.container}>
        <Text>React-Native Movie Browser</Text>
        <TextInput style={styles.input} value={input} placeholder="Search for movies..." onChangeText={handleChange}></TextInput>
        <Button onPress={handlePress} title="Search"></Button>
        <View>
          {movies ? movies.map((movie, idx) => <Movie key={idx} movie={movie}/>): null}
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  },
  input: {
    backgroundColor: "whitesmoke",
    borderColor: "grey",
    borderRadius: 10,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    height: 30,
    width: 200,
    paddingLeft: 15,
    paddingRight: 15
  }
});