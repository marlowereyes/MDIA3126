import { View, Text, StyleSheet } from 'react-native';

export default function Button({ buttonText }) {
    return (
        <View style={styles.container}>
                <Text style={styles.buttonText}>{buttonText}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    buttonText: {
        color: 'white', 
        fontSize: 16, 
        backgroundColor: '#877AE5', 
        borderRadius: 25, 
        paddingVertical: 10, 
        paddingHorizontal: 20,
        margin: 'auto',
        width: '100%',
        textAlign: 'center'
    },
});
