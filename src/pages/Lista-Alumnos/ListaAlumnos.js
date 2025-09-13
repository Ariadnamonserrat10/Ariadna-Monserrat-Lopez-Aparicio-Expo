import { StyleSheet, View, Text, Platform, StatusBar, ScrollView, Image } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/FontAwesome';


const ListaAlumnos = () => {
    return (
        <SafeAreaView style={style.main}>
            {/* Inicio del AppBar */}
            <View style={style.appBar}>
                <Icon name="arrow-left" size={20} />
                <Text style={style.Title}>Lista de Usuarios</Text>
                <View style={{ width: 20 }}></View>
            </View>
            {/* Fin del AppBar */}
            {/* Inicio del contenido (Lista de alumnos) */}
            <ScrollView>
                <Text style={style.TC}>Lista de Alumnos</Text>
                <Image source={{ uri: 'https://i.pinimg.com/736x/a4/11/f9/a411f94f4622cfa7c1a87f4f79328064.jpg' }} />
                <View style={style.cardinfo}>
                    <Text style={style.username}>Ariadna Monserrat</Text>
                    <Text style={style.userdetails}>Ing. en Sistemas Computacionales</Text>
                </View>
            </ScrollView>
            {/* Fin del contenido (Lista de alumnos) */}
        </SafeAreaView>
    )
}

export default ListaAlumnos;


const style = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#cfaecfff',
        // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
    },

    appBar: {
        height: 50,
        width: '100%',
        backgroundColor: '#ffffffff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
    },
    Title: {
        fontFamily: 'cursive',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'center',
    },
    TC: {
        fontFamily: 'Arial',
        fontSize: 25,   
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
        color: '#000000',
    },
    cardinfo: {
        backgroundColor: '#ffffffff',
        margin: 20, 
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: '#000',
    },
});