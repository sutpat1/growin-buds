import { StyleSheet, Text, View, Image } from 'react-native';
import CheckBox from 'react-native-check-box';

export default function App() {
  return (
    <View style={{backgroundColor: '#fffff5'}}>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.username}>Hi, Grace!</Text>
        <Image source={require("./assets/userpic.png")} style={{position: 'absolute', left: 225, top: 80}}></Image>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Image source={require("./assets/pinkplant.png")} style={{alignSelf: 'flex-start', marginTop: 10, marginLeft: 65}}></Image>
        <Image source={require("./assets/taskpoints.png")} style={{marginTop: 120, marginLeft: 85}}></Image>
      </View>
      <Text style={styles.subheader}>Daily Tasks:</Text>
      <Image source={require("./assets/rectangles/darkgreen.png")} style={{position: 'absolute', left: 33, top: 350}}></Image>
      <Image source={require("./assets/rectangles/green.png")} style={{position: 'absolute', left: 33, top: 450}}></Image>
      <Image source={require("./assets/rectangles/lightgreen.png")} style={{position: 'absolute', left: 33, top: 550}}></Image>
      <Image source={require("./assets/rectangles/grey.png")} style={{position: 'absolute', left: 33, top: 650}}></Image>
    </View>
  )
}

const styles = StyleSheet.create({
  username: {
    fontSize: 40,
    fontWeight: 500,
    textAlign: 'left',
    marginTop: 70,
    marginLeft: 30,
  },

  planttype: {
    fontSize: 30,
    textAlign: 'center',
  },

  subheader: {
    marginTop: 15,
    fontSize: 24,
    fontWeight: 500,
    alignSelf: 'center',
  },

  regulartext: {
    fontSize: 18,
    padding: 5
  }
  
});