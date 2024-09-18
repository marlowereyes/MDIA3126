import { View, TextInput } from "react-native"
import Button from "../atoms/Button"
import Name from "../atoms/Name"
import ProfileImage from "@/components/atoms/Image"
import Status from "../atoms/Status"
import Bio from "../atoms/Bio"
import ChoiceButton from "../atoms/ChoiceButton"

export default function InputForm({ nameText, textForButton, statusText, bioText, textForChoiceButton1, textForChoiceButton2 }){
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
                alignItems: "center"
            }}
            >
            <ProfileImage/>
            <div
            style = {{
                position: "absolute",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                top: "19rem",
                marginBottom: "10px"
            }}
            >
            <Name nameText={nameText} />
            <Status statusText={statusText} />
            <div
            style = {{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center"
            }}
            >
            <ChoiceButton choiceButtonText={textForChoiceButton1} buttonColor="white" buttonTextColor="#F36C48" />
            <ChoiceButton choiceButtonText={textForChoiceButton2} buttonColor="#F36C48"/>
            </div>
            </div>
            </div>
            <div
            style = {{
                marginTop: "45px"
            }}
            >
                <Bio bioText={bioText} />
                <Button buttonText={textForButton}/>
            </div>
            </div>
        </View>
    )
}