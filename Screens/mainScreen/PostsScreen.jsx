import React from "react";
import { moduleName } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import DefaultScreenPosts from "../NestedScreen/DefaultScreenPosts";
import CommentsScreen from "../NestedScreen/CommentsScreen";
import MapScreen from "../NestedScreen/MapScreen";
import BtnLogout from "../../Components/BtnLogout";

const NestedScreen = createStackNavigator();

const PostsScreen = () => {
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        options={{ headerShown: false, headerRight: () => <BtnLogout /> }}
        name="DefaultScreenPosts"
        component={DefaultScreenPosts}
      />
      <NestedScreen.Screen
        name="CommentsScreen"
        component={CommentsScreen}
        options={{ title: "Комментарии" }}
      />
      <NestedScreen.Screen
        name="MapScreen"
        component={MapScreen}
        options={{ title: "Карта" }}
      />
    </NestedScreen.Navigator>
  );
};

export default PostsScreen;
