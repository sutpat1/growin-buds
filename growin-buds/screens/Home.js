import { StyleSheet, Text, View, Image } from 'react-native';
import CheckBox from 'expo-checkbox';
import { useState } from 'react';

export default function App() {
  const [isChecked1, setChecked1] = useState(false);
  const [isChecked2, setChecked2] = useState(false);
  const [isChecked3, setChecked3] = useState(false);
  const [isChecked4, setChecked4] = useState(false);
  return (
    <View style={{backgroundColor: '#fffff5'}}>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.username}>Hi, Grace!</Text>
        <Image source={require("../assets/userpic.png")} style={{position: 'absolute', left: 225, top: 80}}></Image>
      </View>

      <View style={{flexDirection: 'row'}}>
        <Image source={require("../assets/pinkplant.png")} style={{alignSelf: 'flex-start', marginTop: 10, marginLeft: 65}}></Image>
        <Image source={require("../assets/star.png")} style={{marginTop: 120, marginLeft: 85}}></Image>
      </View>

      <Text style={{fontSize: 18, position: 'absolute', left: 305, top: 247}}>65</Text>
      <Text style={styles.subheader}>Daily Tasks:</Text>

      
      <Image source={require("../assets/rectangles/darkgreen.png")} style={{position: 'absolute', left: 33, top: 350}}></Image>
      <Image source={require("../assets/star.png")} style={{position: 'absolute', left: 285, top: 368}}></Image>
      <Text style={{fontSize: 18, position: 'absolute', left: 100, top: 375}}>Water tulips</Text>
      <Text style={{fontSize: 18, position: 'absolute', left: 300, top: 377}}>5</Text>

      <Image source={require("../assets/rectangles/green.png")} style={{position: 'absolute', left: 33, top: 450}}></Image>
      <Image source={require("../assets/star.png")} style={{position: 'absolute', left: 285, top: 468}}></Image>
      <Text style={{fontSize: 18, position: 'absolute', left: 100, top: 475}}>Water rose plant</Text>
      <Text style={{fontSize: 18, position: 'absolute', left: 300, top: 477}}>5</Text>
      
      

      <Image source={require("../assets/rectangles/lightgreen.png")} style={{position: 'absolute', left: 33, top: 550}}></Image>
      <Image source={require("../assets/star.png")} style={{position: 'absolute', left: 285, top: 568}}></Image>
      <Text style={{fontSize: 18, position: 'absolute', left: 100, top: 565}}>Change soil for</Text>
      <Text style={{fontSize: 18, position: 'absolute', left: 100, top: 585}}>tomato plant</Text>
      <Text style={{fontSize: 18, position: 'absolute', left: 296, top: 577}}>10</Text>
      

      <Image source={require("../assets/rectangles/grey.png")} style={{position: 'absolute', left: 33, top: 650}}></Image>
      <Image source={require("../assets/star.png")} style={{position: 'absolute', left: 285, top: 668}}></Image>
      <Text style={{fontSize: 18, position: 'absolute', left: 100, top: 665}}>Add fertilizer to</Text>
      <Text style={{fontSize: 18, position: 'absolute', left: 100, top: 685}}>carrot plant</Text>
      <Text style={{fontSize: 18, position: 'absolute', left: 296, top: 677}}>10</Text>
      
      <CheckBox value={isChecked1} color="#696969"
        onValueChange={setChecked1}
        style={{position: 'absolute', left: 60, top: 375}}
      />

      <CheckBox value={isChecked2} color="#696969"
        onValueChange={setChecked2}
        style={{position: 'absolute', left: 60, top: 475}}
      />

      <CheckBox value={isChecked3} color="#696969"
        onValueChange={setChecked3}
        style={{position: 'absolute', left: 60, top: 575}}
      />

      <CheckBox value={isChecked4} color="#696969"
        onValueChange={setChecked4}
        style={{position: 'absolute', left: 60, top: 675}}
      />
      
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

  subheader: {
    marginTop: 15,
    fontSize: 24,
    fontWeight: 500,
    alignSelf: 'center',
  },
  
});