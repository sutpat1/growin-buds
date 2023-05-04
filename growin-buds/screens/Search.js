import React, {useEffect, useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { SearchBar } from "react-native";
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';

export default function App() 
{
  return (
    <View style={styles.container}> 
    <TextInput style={styles.input}
        placeholder="                      Search                      "
        borderWidth={2}
        borderColor="#000000"
    />
      <Image source = {require("../assets/leaf.png")} style={{position: 'absolute', top: 175, left: 20}}/>
      <Image source = {require("../assets/eclipse.png")} style={{position: 'absolute', top: 175, left: 190}}/>
      <Image source = {require("../assets/shovel.png")} style={{position: 'absolute', top: 182, left: 200}}/>
      <Image source = {require("../assets/rectangle.png")} style={{position: 'absolute', top: 250, left: 25}}/>
      <Image source = {require("../assets/rectangle.png")} style={{position: 'absolute', top: 425, left: 25}}/>
      <Image source = {require("../assets/rectangle.png")} style={{position: 'absolute', top: 600, left: 25}}/>
      <Image source = {require("../assets/img_one.png")} style={{position: 'absolute', top: 260, left: 250}}/>
      <Image source = {require("../assets/img_two.png")} style={{position: 'absolute', top: 435, left: 250}}/>
      <Image source = {require("../assets/img_three.png")} style={{position: 'absolute', top: 610, left: 250}}/>
      <Text style={styles.plant_info_text}>Plant {'\n'} Info</Text>
      <Text style={styles.gardening_tips_text}>Gardening {'\n'} Tips</Text>
      <Text style={styles.how_to_care_text}> How to Care for {'\n'} Pothos Plants </Text>
      <Text style={styles.gardening_for_text}> Gardening for {'\n'} Beginners </Text>
      <Text style={styles.best_vegetables_text}> Best Vegetables to {'\n'} Grow in the Spring </Text>
      <Text style={styles.text_one}>Epipremnum aureum is a species in{'\n'}the arum family Araceae, native{'\n'}to Mo'orea...</Text>
      <Text style={styles.text_two}>Get to know your garden · Plan your {'\n'}garden · Learn how to plant · Feed{'\n'} and water...</Text>
      <Text style={styles.text_three}>In late February to early March, start{'\n'}cabbages, kale, broccoli, {'\n'}cauliflower, onions...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffff5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plant_info_text: {
    position: 'absolute', top:175, left: 100,
    fontSize: 25,
  },
  gardening_tips_text: {
    position: 'absolute', top:175, left: 250,
    fontSize: 25,
  },
  how_to_care_text: {
    position: 'absolute', top: 270, left:45,
    fontSize:20,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  gardening_for_text: {
    position: 'absolute', top: 440, left:45,
    fontSize:20,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  best_vegetables_text: {
    position: 'absolute', top: 615, left:45,
    fontSize:20,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  text_one: {
    position: 'absolute', top: 340, left: 45,
    fontSize:15,
  },
  text_two: {
    position: 'absolute', top: 510, left: 45,
    fontSize: 15,
  },
  text_three: {
    position: 'absolute', top: 685, left: 45,
    fontSize: 15,
  },
  input: {
    position: 'absolute', top: 80, left: 25,
    color: '#FFF000',
    fontSize: 25,
    height: 45,
  },
});



