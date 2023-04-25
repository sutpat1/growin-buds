import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {styles.title}>Create plant profile</Text>
      <Image 
         // source = {require("./assets/loginPlant.png")}
          style = {styles.image}></Image>
      
      <StatusBar style="auto" />

      <Text style={styles.inputField}>name</Text>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          placeholder="ex: Nessie"
          keyboardType="text"
        />
      </SafeAreaView>
      
      <Text style={styles.inputField}>plant species</Text>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          placeholder="ex:Monstera Deliciosa"
          keyboardType="text"
        />
      </SafeAreaView>

      <Text style={styles.inputField}>plant birthday</Text>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          placeholder="MM/DD/YYYY"
          keyboardType="text"
        />
      </SafeAreaView>
      <Text style={styles.inputField}>soil requirements</Text>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          placeholder="ex: Potting mix"
          keyboardType="text"
        />
      </SafeAreaView>
      <Text style={styles.inputField}>sun requirements</Text>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          placeholder="ex: Direct Sunlight"
          keyboardType="text"
        />
      </SafeAreaView>

       <TouchableOpacity style = {styles.login}>
          <Text style = {styles.buttonText}>create</Text>
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
    margin: 40
  },

  title: {
    margin: 30,
    fontSize: 60,
  },

  login: {
    fontSize: 20,
    backgroundColor: '#FFD260',
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
