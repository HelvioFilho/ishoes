import { useTheme } from "native-base";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, Feather } from '@expo/vector-icons';

import { Home } from "@screens/Home";
import { Cart } from "@screens/Cart";

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  const { colors, sizes } = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.green[500],
        tabBarInactiveTintColor: colors.gray[300],
        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: colors.gray[800],
        },
      }}
    >
      <Screen
        name='products'
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name='md-home-outline' size={sizes[6]} color={color} />,
        }}
      />
      <Screen
        name='cart'
        component={Cart}
        options={{
          tabBarIcon: ({ color }) => <Feather name='shopping-bag' size={sizes[6]} color={color} />,
        }}
      />
    </Navigator>
  )
}