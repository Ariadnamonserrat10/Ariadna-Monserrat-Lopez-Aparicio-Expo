import { FontAwesome } from '@expo/vector-icons';
import { Platform, StyleSheet, Text, View,StatusBar,TouchableOpacity} from 'react-native';


export default  function Botones() {
  return (
    <View style={styles.main}>
      <Text style={styles.texto}>Botones</Text>
        {/* Boton 1 */}
        <TouchableOpacity style={styles.BTNbasic}>
            <Text style={styles.Btntexto}>Boton 1</Text>
        </TouchableOpacity>

        {/* Boton 2 */}
        <TouchableOpacity style={styles.BTNIcon}>
            <Text style={styles.Btntexto}>Boton Icono</Text>
            <FontAwesome style={styles.Btnicono} name="user" />
        </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  main: { 
    flex: 1,
    backgroundColor: '#d4b6d4ff',
    padding: Platform.OS === 'android' ?  StatusBar.currentHeight : 44, 
    padding: 16
  },
    texto: {
        fontFamily: 'Arial',
        fontSize: 40,
        fontWeight: 'bold',
        color: '#ffffffff',
        marginTop: 30,
    },
    Btntexto: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#ffffffff',
    },
    BTNbasic: {
        backgroundColor: '#542275ff',
        padding: 20, 
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 30,

    },
    BTNIcon: {
        backgroundColor: '#542275ff',
        padding: 20, 
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 30,
        flexDirection: 'row', 
        justifyContent: 'center', 
    },
    Btnicono: {
        fontSize: 20,
        color: '#ffffff',
        marginLeft: 10, 
        marginTop: 0,   
    },  

});

