import { View, TextInput } from "react-native"
import Button from "../atoms/Button"
import Label from "../atoms/Label"
import ProfileImage from "@/components/atoms/Image"
import Status from "../atoms/Status"

export default function InputForm({ textForLabel, textForButton, statusText }){
    return (
        <View
            style={{
                flexDirection: "column",
                justifyContent: "center"

            }}
        >
            <div
            style = {{
                padding: "1.5rem 1.5rem 2rem",
                borderRadius: "20px",
                backgroundColor: "white"
            }}
            >
            <div
            style = {{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                border: "solid"
            }}
            >
            <ProfileImage/>
            <Label labelText={textForLabel} />
            <Status statusText={statusText} />
            </div>
            <Button buttonText={textForButton}/>
            </div>
        </View>
    )
}