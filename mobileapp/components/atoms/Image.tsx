import { View, Image } from "react-native";

export default function ProfileImage() {
    return (
        <View>
            <Image
                style={{
                    width: 290,
                    height: 365,
                    borderRadius: 20,
                }}
                source={require('@/assets/images/irina.png')}
            />
        </View>
    )
}