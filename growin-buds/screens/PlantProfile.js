import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.plantname}>Nessie</Text>
      <Text style={styles.planttype}>Monstera Deliciosa</Text>
      <Image source={require("../assets/monstera.png")}></Image>
      <Text></Text>
      <Text style={styles.subheader}>Birthday:</Text>
      <Text style={styles.regulartext}>01/23</Text>
      <Text></Text>
      <Text style={styles.subheader}>Soil Requirements:</Text>
      <Text style={styles.regulartext}>Well-Draining Potting Mix</Text>
      <Text></Text>
      <Text style={styles.subheader}>Water Requirements:</Text>
      <Text style={styles.regulartext}>Every 1-2 Days</Text>
      <Text></Text>
      <Text style={styles.subheader}>Sun Requirements:</Text>
      <Text style={styles.regulartext}>Bright to Medium Indirect Light</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffff5',
    alignItems: 'center',
    justifyContent: 'center',
  },

  plantname: {
    fontSize: 45,
    fontWeight: 500,
    textAlign: 'center',
  },

  planttype: {
    fontSize: 30,
    textAlign: 'center',
  },

  subheader: {
    fontSize: 24,
    fontWeight: 500,
  },

  regulartext: {
    fontSize: 18,
    padding: 5
  }
  
});