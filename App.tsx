import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "@/Screens/Login";
import Dashboard from "@/Screens/Dashboard";
import { PaperProvider } from "react-native-paper";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { theme } from "@/core/theme";
import { IconComponentProvider } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Profile from "./Screens/Profile";

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <GestureHandlerRootView>
        <IconComponentProvider IconComponent={MaterialCommunityIcons}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
              <Stack.Screen
                component={Login}
                name="Login"
                options={{ headerShown: false }}
              />
              <Stack.Screen
                component={Dashboard}
                name="Dashboard"
                options={{ headerShown: false }}
              />
              <Stack.Screen
                component={Profile}
                name="Profile"
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </IconComponentProvider>
      </GestureHandlerRootView>
    </PaperProvider>
  );
}
