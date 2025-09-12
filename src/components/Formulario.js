import { StyleSheet, View, Platform, StatusBar, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Formulario() {
    return (
        <SafeAreaView style={style.main}>
            <Text style={style.Texto}>Formulario</Text>
            <TextInput placeholder="Ingrese su nombre"/>
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
    Texto: {
        fontFamily: 'Arial',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
    },
});