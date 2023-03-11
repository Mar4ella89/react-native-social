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

import User from "./assets/user.svg";
import Union from "./assets/union.svg";
import Grid from "./assets/grid.svg";

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
    <MainTab.Navigator tabBarOptions={{ showLabel: false }}>
      <MainTab.Screen
        options={{
          tabBarIcon: () => <Grid width={24} height={24} fill={"#fff"} />,
        }}
        name="PostsScreen"
        component={PostsScreen}
      />

      <MainTab.Screen
        options={{
          tabBarIcon: () => <Union width={24} height={24} fill={"#fff"} />,
        }}
        name="CreatePostsScreen"
        component={CreatePostsScreen}
      />
      <MainTab.Screen
        options={{
          tabBarIcon: () => <User width={24} height={24} fill={"#fff"} />,
        }}
        name="ProfileScreen"
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
};
