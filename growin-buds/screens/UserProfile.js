import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, SafeAreaView, Button } from 'react-native';


export default function App() {
  return (
  <View style={styles.container}>
    <Image 
        source = {require("../assets/Rectangle1.png")}
        style = {styles.image}></Image>
    <Image 
        source = {require("../assets/Grace.png")}
        style = {styles.image}></Image>
    <Image 
        source = {require("../assets/Followers.png")}
        style = {styles.image}></Image>

<TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Create new plant profile</Text>
      </TouchableOpacity>

    <Image 
        source = {require("../assets/Group30.png")}
        style = {styles.image}></Image>


    <StatusBar style="auto" />



    </View>);
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
    topMargin: 40
  },

  button: {
    alignItems: 'center',
    topMargin: 40,
    backgroundColor: '#9AD46C',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,

  },

  title: {
    topMargin: 40,
    fontSize: 60,
  },

  login: {
    fontSize: 20,
    backgroundColor: '#FC9778',
    margin: 30,
    paddingHorizontal: 60,
    paddingVertical: 20,
    borderRadius: 50,
  }, 

  buttonText: {
    fontSize: 20,
  },

  input: {
    height: 60,
    width: 250,
    margin: 20,
    borderWidth: 1,
    borderRadius: 50,
    padding: 20,
  },

  inputField: {
    fontSize: 25,
    textAlign: 'left'
  }
});
