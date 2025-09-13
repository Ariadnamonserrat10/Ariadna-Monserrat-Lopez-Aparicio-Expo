import { StyleSheet, View, Text, Platform, StatusBar, ScrollView, Image, TouchableOpacity } from 'react-native';
// import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/FontAwesome';


const ListaAlumnos = () => {
    return (
        <View style={style.main}>
            {/* Inicio del AppBar */}
            <View style={style.appBar}>
                <Icon name="arrow-left" size={20} />
                <Text style={style.Title}>Lista de Usuarios</Text>
                <View style={{ width: 20 }}></View>
            </View>
            {/* Fin del AppBar */}
            {/* Inicio del contenido (Lista de alumnos) */}
            <ScrollView style={{ padding: 10 }}>
                <Text style={style.TC}>Alumnos de Aplicaciones Moviles</Text>
                {/* Alumno 1  */}
                {[1,2,3,4,5,6].map(( ) => (
                    <View style={style.card}>
                        <Image style={style.avatar} source={{ uri: 'https://i.pinimg.com/736x/a4/11/f9/a411f94f4622cfa7c1a87f4f79328064.jpg' }} />
                        <View style={style.cardinfo}>
                            <Text style={style.username}>Ariadna Monserrat</Text>
                            <Text style={style.userdetails}>Ing. en Sistemas Computacionales</Text>
                            <TouchableOpacity style={style.saveButton}>
                                <Text style={style.saveButtonText}>Ver mas</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}

            </ScrollView>
            {/* Fin del contenido (Lista de alumnos) */}
        </View>
    )
}

export default ListaAlumnos;


const style = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#cfaecfff',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
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
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
        color: '#000000',
    },
    username: {
        fontFamily: 'fantasy',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000',
    },
    userdetails: {
        fontFamily: 'consolas',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000000',
    },
    cardinfo: {
        flex: 1,
        justifyContent: 'center',
    },
    card: {
        padding: 10,
        flexDirection: 'row',
        backgroundColor: '#ffffffff',
        borderRadius: 25,
        marginTop: 20,
    },
    avatar: {
        width: 68,
        height: 68,
        borderRadius: 50,
        marginRight: 12,
    },
    saveButton: {
        backgroundColor: '#5f236eff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginTop: 10,
        alignSelf: 'flex-end',
        padding: 10,
    },
    saveButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});