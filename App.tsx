import { Platform, StatusBar } from "react-native";
import { NativeBaseProvider } from "native-base";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";

import { Routes } from "@routes/index";
import { Loading } from "@components/Loading";
import { theme } from "./src/theme";

import { CartContextProvider } from "@contexts/CartContext";
import OneSignal from "react-native-onesignal";

const { SIGNAL_ANDROID_ID } = process.env;
const { SIGNAL_IOS_ID } = process.env;

const oneSignalId = Platform.OS === "ios" ? SIGNAL_IOS_ID : SIGNAL_ANDROID_ID;

OneSignal.setAppId(oneSignalId!);
OneSignal.promptForPushNotificationsWithUserResponse(response => {
  console.log(response);
});

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <CartContextProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </CartContextProvider>
    </NativeBaseProvider>
  );
}