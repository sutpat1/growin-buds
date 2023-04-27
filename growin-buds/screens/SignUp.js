import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import { TextInput, SafeAreaView, TouchableOpacity, Image, ScrollView} from "react-native";
import { useState } from "react";


export default function SignUp({ navigation }) {
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style = {styles.header}> sign up </Text>
      <Image style = {styles.img} source = {require("../assets/plant-yellow.png")} />
      <Text style = {styles.header2}> name </Text>
      <TextInput
                placeholder="ex: john smith"
                value={email}
                onChangeText={(text) => setEmail(text)}
                keyboardType="name"
                style={styles.input}
            />
      <Text style = {styles.header2}> email </Text>
      <TextInput
                placeholder="example@gmail.com"
                value={email}
                onChangeText={(text) => setEmail(text)}
                keyboardType="email-address"
                style={styles.input}
            />
      <Text style = {styles.header2}> password </Text>
      <TextInput
                placeholder="********"
                value={password}
                onChangeText={(text) => setPassword(text)}
                keyboardType="visible-password"
                secureTextEntry
                style={styles.input}
            />
      <Text style = {styles.header2}> verify password </Text>
      <TextInput
                placeholder= "********"
                value={password}
                onChangeText={(text) => setPassword(text)}
                keyboardType="visible-password"
                secureTextEntry
                style={styles.input}
            />
      <StatusBar style="auto" />

      <TouchableOpacity 
          style = {styles.signUpBtn}
          onPress = {() => navigation.navigate("Home")}>
          <Text style = {styles.buttonText}>sign up</Text>
       </TouchableOpacity>
    </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffff5',
    alignItems: 'flex',
    justifyContent: 'flex',
  },

  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },

  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },

  header: {
    fontSize: 60,
    color: "black",
    textAlign: 'center',
    alignSelf: "center",
    margin: 30
  },

  header2: {
    fontSize: 25,
    marginHorizontal: 30,
    textAlign: 'left',
  },

  input: {
    marginHorizontal: 30,
    padding: 20,
    borderWidth: 1,
    borderRadius: 50,
    height: 60,
    width: 250,
    margin: 20,
  },

  img: {
    alignSelf: "center",
  },

  signUpBtn: {
    fontSize: 20,
    backgroundColor: '#FFD260',
    margin: 30,
    paddingHorizontal: 60,
    paddingVertical: 20,
    borderRadius: 50,
    alignSelf: "center",
  }, 

  buttonText: {
    fontSize: 20,
  },

});

