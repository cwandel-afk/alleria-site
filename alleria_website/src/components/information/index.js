import { Heading, Card, Text } from "@aws-amplify/ui-react";
import { defaultTheme } from "@aws-amplify/ui-react";

const information = "  ";

export default function information_page() {
    return (
            <Text variation="primary"
                as="body"
                lineHeight="1.5em"
                fontSize="1em"
                fontWeight={500}
                fontStyle="normal"
                textAlign={"center"}
                textDecoration="none"
                alignSelf={"center"}
                fontFamily={defaultTheme.tokens.fonts.default}>
                {"Introducing Alleria, an uncomplicated and complimentary baby monitoring application. Capture your baby's activities in real-time, and let the app effortlessly organize and record every detail. The list is automatically arranged chronologically, allowing you to conveniently review logs from both today and yesterday."} 
                <br/><br/>
                {"No internet access is necessary for the basic version; it seamlessly records data on your device for instant viewing. Opting for the premium version provides additional features such as data syncing, customizable themes, and real-time updates across up to four devices."}
                <br/><br/>
                {"It's your all-in-one solution for comprehensive baby tracking. Rest assured, Alleria prioritizes your privacy by refraining from any data collection or information selling. A simple account and the presence of a baby are all you need to make the most of this user-friendly app."}
            </Text>
    );
}