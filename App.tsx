import { Platform, StatusBar } from "react-native";
import { NativeBaseProvider } from "native-base";
import { Roboto_400Regular, Roboto_700Bold, useFonts } from "@expo-google-fonts/roboto";
import OneSignal from "react-native-onesignal";

import { Loading } from "@components/Loading";
import { Routes } from "@routes/index";
import { theme } from "./src/theme";

import { CartContextProvider } from "@contexts/CartContext";
import { hasNotificationOpened, tagUserInfoCreate } from "@utils/notifications";
import { useEffect } from "react";

const { SIGNAL_ANDROID_ID } = process.env;
const { SIGNAL_IOS_ID } = process.env;

const oneSignalId = Platform.OS === "ios" ? SIGNAL_IOS_ID : SIGNAL_ANDROID_ID;

OneSignal.setAppId(oneSignalId!);
OneSignal.promptForPushNotificationsWithUserResponse();

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  
  tagUserInfoCreate({
    user_name: 'Hélvio',
    user_email: 'helviosvf@gmail.com'
  });

  useEffect(() => {
    const unsubscribe = hasNotificationOpened();

    return () => unsubscribe;
  }, []);

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