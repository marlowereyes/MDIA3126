import { View, Text, StyleSheet } from 'react-native';

export default function ChoiceButton({ choiceButtonText, buttonColor, buttonTextColor }) {
    return (
        <View style={[styles.container, { backgroundColor: buttonColor }]}>
            <Text style={[styles.choiceButtonText, { color: buttonTextColor }]}>
                {choiceButtonText}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 7,
        borderRadius: 50,
        width: 60, 
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    choiceButtonText: {
        fontSize: '32px',
        textAlign: 'center',
        color: 'white'
    },
});
