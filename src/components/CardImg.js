import { StyleSheet, View, Text, Image } from 'react-native';


export default function CardImg() {
    return (
        <View style={style.card}>
            <Image style={style.imagen} source={{uri:'https://i.pinimg.com/736x/6f/7d/46/6f7d46ab764a48a571d0a07b2d9491d4.jpg'}}/>
            <Text style={style.Titulo}>Card con imagen</Text>
            <Text style={style.cont}>Contenido del card</Text>
        </View>
    );
}

const style = StyleSheet.create({
    card: {

        backgroundColor: '#ffffff',
        padding: 16,
        margin: 10,
        borderRadius: 10,
        shadowColor: '#3ddda0ff',
        elevation: 4,
        shadowOpacity: 0.5,
        shadowRadius: 4,
    },
    Titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    cont: {
        fontSize: 16,
        color: '#333333',
        marginTop:4,
    },
    imagen:{
        width:'100%',
        height:150,
        borderRadius:10,
    },
});