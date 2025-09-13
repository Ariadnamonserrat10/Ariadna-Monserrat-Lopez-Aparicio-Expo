import { StyleSheet, View, Platform, StatusBar, Text, ScrollView, Image,TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from "react-native-safe-area-context";

export default function FormularioV2() {
    return (
        <SafeAreaView style={style.main}>
            <ScrollView>
                <Text style={style.Title}>Formulario V2</Text>
                <View style={style.contar}>
                    <TouchableOpacity style={style.salida}>
                        <Icon name="close" size={25} />
                    </TouchableOpacity>
                    <Image style={style.imagen} source={{ uri: 'https://i.pinimg.com/736x/98/13/89/9813892efee6c55e09b4da2d1a6987b2.jpg' }} />
                    <Text style={style.name}>Ariadna Monserrat</Text>
                    <View style={style.InfoCont}>
                        <Text style={style.sub}>Carrera:</Text>
                        <Text style={style.Info}>Ing.Sistemas Computacionales</Text>
                        <Text style={style.sub}>Especialidad:</Text>
                        <Text style={style.Info}>Desarrollo de Software</Text>
                        <Text style={style.sub}>Correo:</Text>
                        <Text style={style.Info}>Arisliz@gmail.com</Text>
                        <Text style={style.sub}>Telefono:</Text>
                        <Text style={style.Info}>1234567891</Text>
                        <Text style={style.sub}>Numero de Control:</Text>
                        <Text style={style.Info}>22620052</Text>
                    </View>
                    {/* Boton Grande con icono */}
                    <TouchableOpacity style={style.botonGrandeiCON}>
                        <Icon name="save" size={20} color="#ffffff" style={style.iconIZQ} />
                        <Text style={style.textoBotonGrande}>Guardar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#d4b6d4ff',
        padding: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
        padding: 16
    },
    Title: {
        fontFamily: 'cursive',
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#ffffffff',
        textShadowColor: '#ffffffff',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
        marginBottom: 20,
    },
    imagen: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 20,
        alignSelf: 'center',
    },
    contar: {
        marginTop: 20,
        backgroundColor: '#ffffffff',
        padding: 10,
        borderRadius: 10,
        shadowColor: '#3ddda0ff',
        elevation: 4,
        shadowOpacity: 0.5,
        shadowRadius: 4,
    },
    name: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#29035aff',
        textAlign: 'center',
        marginBottom: 10,
        backgroundColor: '#e9e0e9ff',
        borderRadius: 20,
        padding: 10,
        fontFamily: 'serif',
    },
    sub: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#30084bff',
        marginTop: 10,
        textAlign: 'Left',
        fontFamily: 'serif',
    },
    texto: {
        fontSize: 20,
        color: '#000000ff',
        textAlign: 'left',
        fontFamily: 'serif',
    },
    InfoCont: {
        marginTop: 10,
        padding: 10,
    },
    Info: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#e9e0e9ff',
        borderRadius: 10,
        fontSize: 20,
        color: '#000000ff',
        textAlign: 'left',
        fontFamily: 'serif',
    },
    textoBotonGrande: {
        color: '#ffffffff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    iconIZQ: {
        marginRight: 10, 
        marginTop: 3,
        alignSelf: 'center',
    },
    botonGrandeiCON: {
        backgroundColor: '#3d0557ff', 
        marginTop: 20,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        borderRadius: 15,
    },
    salida: {
        alignSelf: 'flex-end',
        padding: 5,
        marginBottom: -10,
        backgroundColor: '#e9e0e9ff',
        borderRadius: 20,
    },
});