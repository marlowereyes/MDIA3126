import { View } from "react-native";
import Button from "@/components/atoms/Button";
import Label from "@/components/atoms/Label";
import InputForm from "@/components/molecules/InputForm";

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
      <InputForm
        textForLabel="Irina Lim"
        textForButton="Message Irina"
        textForPlaceholder="Mother" />
    </View>
  );
}
