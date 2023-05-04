import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Pressable,Text, View,TouchableOpacity, ScrollView, TextInput, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView style = {styles.scollView}>
      <Text style = {styles.title}>Create plant profile</Text>
      
      <StatusBar style="auto" />

      <Text style={styles.inputField}>Name</Text>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          placeholder="ex: Nessie"
          keyboardType="text"
        />
      </SafeAreaView>
      
      <Text style={styles.inputField}>Plant Species</Text>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          placeholder="ex: Monstera Deliciosa"
          keyboardType="text"
        />
      </SafeAreaView>

      <Text style={styles.inputField}>Plant Birthday</Text>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          placeholder="MM/DD/YYYY"
          keyboardType="text"
        />
      </SafeAreaView>
      <Text style={styles.inputField}>Soil Requirements</Text>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          placeholder="ex: Potting mix"
          keyboardType="text"
        />
      </SafeAreaView>
      <Text style={styles.inputField}>Sun Requirements</Text>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          placeholder="ex: Direct Sunlight"
          keyboardType="text"
        />
      </SafeAreaView>
       <TouchableOpacity style = {styles.button} >
         <Text style = {styles.buttonText}>Create</Text>
       </TouchableOpacity>
       </ScrollView>
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

  title: {
    fontSize: 50,
  },

 button: {
    fontSize: 20,
    paddingHorizontal: 60,
    paddingVertical: 20,
    borderRadius: 50,
    backgroundColor: '#FFD260',
    alignSelf: 'center',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '48%',
    textAlign: 'center',
  },

  buttonText: {
    fontSize: 20,
    color:'white'
  },

  input: {
    height: 60,
    width: 250,
    margin: 20,
    borderWidth: 1,
    borderRadius: 50,
    padding: 10,
    alignSelf: 'center'
  },

  inputField: {
    fontSize: 25,
    paddingTop: 10,
    margin: 5,
    textAlign: 'center'
  }
});