import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image 
          source = {require("./assets/title.png")}
          style = {styles.title}></Image>
      <Image 
          source = {require("./assets/appName.png")}
          style = {styles.appName}></Image>
      <StatusBar style="auto" />
      <Image 
          source = {require("./assets/3plants.png")}
          style = {styles.image}></Image>

       <TouchableOpacity style = {styles.login}>
          <Text style = {styles.buttonText}>login</Text>
       </TouchableOpacity>

       <TouchableOpacity style = {styles.signup}>
          <Text style = {styles.buttonText}>sign up</Text>
       </TouchableOpacity>     
      
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

  image: {
    alignItems: 'center',
    margin: 80
  },

  title: {
    margin: 20
  },

  appName: {
    margin: 20
  },

  login: {
    fontSize: 20,
    backgroundColor: '#FC9778',
    margin: 20,
    paddingHorizontal: 60,
    paddingVertical: 20,
    borderRadius: 50,
  }, 

  signup: {
    backgroundColor: '#FFD260',
    margin: 20,
    paddingHorizontal: 50,
    paddingVertical: 20,
    borderRadius: 50,
  }, 

  buttonText: {
    fontSize: 20,
  }
});

