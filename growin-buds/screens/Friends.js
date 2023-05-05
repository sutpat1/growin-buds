import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <Text>Friends</Text>
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffff5',
  }
});