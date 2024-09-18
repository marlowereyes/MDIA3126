import { View } from "react-native";
import Button from "@/components/atoms/Button";
import Name from "@/components/atoms/Name";
import Profile from "@/components/molecules/Profile";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#5B49DB"
      }}
    >
      <Profile
        nameText="Irina Lim"
        textForButton="Message Irina"
        statusText="Mother" 
        bioText="Hi! I am Irina and I am a mother of one lovely daughter. I love cats, fun nights out, and alcohol <3"
        textForChoiceButton1="✘"
        textForChoiceButton2="❤"
        />
    </View>
  );
}
