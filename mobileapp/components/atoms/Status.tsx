import { Text, View } from "react-native"

export default function Status({ statusText}){
    return (
        <View>
            <Text
                style={{color:"salmon"}}
                >
                    {statusText}
                </Text>
        </View>
    )
}