import { Text, View } from "react-native"

export default function Name({ nameText}){
    return (
        <View>
            <Text
                style={{
                    color:"white",
                    fontWeight: "700",
                    fontSize: "24px"
                }}
                >
                    {nameText}
                </Text>
        </View>
    )
}