import React from "react";
import { View } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

import RegistrationScreen from "./Screens/auth/RegistrationScreen";
import LoginScreen from "./Screens/auth/LoginScreen";
import PostsScreen from "./Screens/mainScreen/PostsScreen";
import CreatePostsScreen from "./Screens/mainScreen/CreatePostsScreen";
import ProfileScreen from "./Screens/mainScreen/ProfileScreen";

import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

// import User from "./assets/user.svg";
// import Union from "./assets/Union.svg";
// import Grid from "./assets/grid.svg";

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator initialRouteName="Login">
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Registration"
          component={RegistrationScreen}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    <MainTab.Navigator
      screenOptions={{
        showLabel: false,
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
        tabBarActiveTintColor: "#FFFFFF",
        tabBarActiveBackgroundColor: "#FF6C00",
        tabBarInactiveTintColor: "#212121",
        tabBarItemStyle: {
          borderRadius: 20,
          marginTop: 4,
          marginBottom: 4,
          maxWidth: 70,
          margin: 8,
        },
        tabBarStyle: {
          justifyContent: "space-between",
          alignItems: "center",
        },
      }}
    >
      <MainTab.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Ionicons name="ios-grid-outline" size={size} color={color} />
            );
          },
          title: "Публикации",
        }}
      />

      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <AntDesign name="plus" size={24} color={color} />;
          },
        }}
        name="CreatePostsScreen"
        component={CreatePostsScreen}
      />
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <Feather name="user" size={24} color={color} />;
          },
        }}
        name="ProfileScreen"
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
};
