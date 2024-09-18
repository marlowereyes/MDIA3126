import { Text, View } from "react-native"

export default function Status({statusText}){
    return (
        <View>
            <Text
                style={{
                    color:"white",
                    fontSize: "16px"
                }}
                >
                    {statusText}
                </Text>
        </View>
    )
}