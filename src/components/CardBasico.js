import { StyleSheet, View, Text} from 'react-native';


export default function CardBasico() {
    return (
        <View style={style.card}>
            <Text>Titulo del card Ariadna </Text>
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
});