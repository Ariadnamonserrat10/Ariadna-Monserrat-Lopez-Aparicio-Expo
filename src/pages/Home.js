import { StatusBar } from 'expo-status-bar';
import { Image,StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <Image source={{uri:'https://i.pinimg.com/736x/98/13/89/9813892efee6c55e09b4da2d1a6987b2.jpg'}} style={styles.img}/>
     <Text style={styles.holamundo}>Hola Mundo</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d4b6d4ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  holamundo: {
    color: '#ffffffff',
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    borderRadius: 50,
    padding: 20,
    backgroundColor: '#542275ff',
  },
  img: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
});
